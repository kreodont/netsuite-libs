import {modifySQL} from "../Helpers";

describe("Tests for functions connected to SQL requests", () => {
    test(`If no WHERE in initial SQL, it will be added`, () => {
        expect(modifySQL(`select * from transaction`, 'id', '0')).toEqual(
            `select * , id from transaction where id > 0 order by id asc`
        )
    })

    test(`Current value is taken into account`, () => {
        expect(modifySQL(`select * from transaction`, 'id', '100500')).toEqual(
            `select * , id from transaction where id > 100500 order by id asc`
        )
    })

    test(`If there is where clause already, it will be extended`, () => {
        expect(modifySQL(`select * from transaction where name like "Something"`, 'id', '100500')).toEqual(
            `select * , id from transaction where name like "Something" and id > 100500 order by id asc`
        )
    })

    test(`sortable unique key can be anything`, () => {
        expect(modifySQL(`select * from transaction where name like "Something"`, 'blabla', '100500')).toEqual(
            `select * , blabla from transaction where name like "Something" and blabla > 100500 order by blabla asc`
        )
    })

    test(`A complex SQL`, () => {
        expect(modifySQL(`SELECT MAX(TO_CHAR(INUM.lastmodifieddate, 'YYYY-MM-DD')) as lastmodifieddate,
               IA.transaction,
               IA.transactionline,
               TO_CHAR(TL.custcol_inventory_detail_last_update, 'YYYY-MM-DD') as custcol_inventory_detail_last_update,
               TL.uniquekey
        FROM inventorynumber INUM
                 JOIN inventoryassignment IA on INUM.id = IA.inventorynumber
                 JOIN transactionline TL
                      on (TL.linesequencenumber = IA.transactionline and TL.transaction = IA.transaction)
        WHERE TL.linesequencenumber > 0 and (TL.custcol_inventory_detail_last_update is null or INUM.lastmodifieddate <> custcol_inventory_detail_last_update)
        GROUP BY IA.transaction, IA.transactionline, TL.uniquekey, TO_CHAR(TL.custcol_inventory_detail_last_update, 'YYYY-MM-DD')`, 'TL.uniquekey', '8')).toEqual(
            `SELECT MAX(TO_CHAR(INUM.lastmodifieddate, 'YYYY-MM-DD')) as lastmodifieddate,
               IA.transaction,
               IA.transactionline,
               TO_CHAR(TL.custcol_inventory_detail_last_update, 'YYYY-MM-DD') as custcol_inventory_detail_last_update,
               TL.uniquekey
        FROM inventorynumber INUM
                 JOIN inventoryassignment IA on INUM.id = IA.inventorynumber
                 JOIN transactionline TL
                      on (TL.linesequencenumber = IA.transactionline and TL.transaction = IA.transaction)
        WHERE TL.linesequencenumber > 0 and (TL.custcol_inventory_detail_last_update is null or INUM.lastmodifieddate <> custcol_inventory_detail_last_update) and TL.uniquekey > 8
        GROUP BY IA.transaction, IA.transactionline, TL.uniquekey, TO_CHAR(TL.custcol_inventory_detail_last_update, 'YYYY-MM-DD') order by TL.uniquekey asc`
        )
    })

})