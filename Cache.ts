import {cache, runtime} from "N";
import {chunks} from "./Helpers";

export class Cache {


    static clear(cacheName?: string, logs?: string[]): void {
        let additionalNumber = 0
        let thereIsNext = true
        let currentCache: cache.Cache | null = null
        const name = cacheName ? cacheName : runtime.getCurrentScript().id
        logs?.push(`Cache name is ${cacheName}`)
        while (thereIsNext) {
            currentCache = cache.getCache({name: name + String(additionalNumber)})
            logs?.push(`Clearing "data" key from cache "${name + String(additionalNumber)}"`)
            thereIsNext = currentCache.get({key: 'next'}) === 'true'
            currentCache.remove({key: 'data'})
            additionalNumber++
        }
    }

    static set(s: string, cacheName?: string, logs?: string[]): void {
        const name = cacheName ? cacheName : runtime.getCurrentScript().id
        if (s.length === 0) {return;}
        const allChunks = chunks(s.split(''), 499000)
        let currentCache: cache.Cache | null = null
        for (const chunk of allChunks) {
            currentCache = cache.getCache({name: name + String(allChunks.indexOf(chunk))})
            logs?.push(`Writing ${chunk.length} bytes to cache "${name + String(allChunks.indexOf(chunk))}"`)
            currentCache.put({key: 'data', value: chunk.join(''), ttl: 300})
            currentCache.put({key: 'next', value: 'true', ttl: 300},)
        }
        if (currentCache) {currentCache.put({key: 'next', value: 'false'})}
    }

    static get(cacheName?: string, logs?: string[]): string {
        let additionalNumber = 0
        let outputString = ''
        let thereIsNext = true
        let currentCache: cache.Cache | null = null
        const name = cacheName ? cacheName : runtime.getCurrentScript().id
        logs?.push(`Cache name is "${cacheName}"`)
        while (thereIsNext) {
            currentCache = cache.getCache({name: name + String(additionalNumber)})
            const cacheString = currentCache.get({key: 'data'}) || ''
            logs?.push(`Reading ${cacheString.length} bytes from cache "${name + String(additionalNumber)}"`)
            outputString += cacheString
            thereIsNext = currentCache.get({key: 'next'}) === 'true'
            additionalNumber++
        }
        if (outputString === 'null') {
            outputString = ''
        }
        return outputString
    }
}