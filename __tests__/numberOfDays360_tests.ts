import {numberOfDays360} from "../Days360";

describe(`Tests for proper calculations for 360/30 (https://en.wikipedia.org/wiki/Day_count_convention#30/360_US)`, () => {
    test(`1`, () => {
        expect(numberOfDays360(new Date("2020-01-01"), new Date("2020-05-31"))).toEqual(150)
    })
    test(`2`, () => {
        expect(numberOfDays360(new Date("2021-03-01"), new Date("2022-02-28"))).toEqual(360)
    })
    test(`3`, () => {
        expect(numberOfDays360(new Date("2020-01-02"), new Date("2020-05-31"))).toEqual(149)
    })
    test(`4`, () => {
        expect(numberOfDays360(new Date("2020-01-03"), new Date("2020-05-31"))).toEqual(148)
    })
    test(`5`, () => {
        expect(numberOfDays360(new Date("2020-01-12"), new Date("2020-05-31"))).toEqual(139)
    })
    test(`6`, () => {
        expect(numberOfDays360(new Date("2020-01-15"), new Date("2020-05-31"))).toEqual(136)
    })
    test(`7`, () => {
        expect(numberOfDays360(new Date("2020-01-20"), new Date("2020-05-31"))).toEqual(131)
    })
    test(`8`, () => {
        expect(numberOfDays360(new Date("2020-01-29"), new Date("2020-05-31"))).toEqual(122)
    })
    test(`9`, () => {
        expect(numberOfDays360(new Date("2020-01-30"), new Date("2020-05-31"))).toEqual(121)
    })
    test(`10`, () => {
        expect(numberOfDays360(new Date("2020-01-31"), new Date("2020-05-31"))).toEqual(121)
    })
    test(`11`, () => {
        expect(numberOfDays360(new Date("2020-02-01"), new Date("2020-05-31"))).toEqual(120)
    })
    test(`12`, () => {
        expect(numberOfDays360(new Date("2020-02-02"), new Date("2020-05-31"))).toEqual(119)
    })
    test(`13`, () => {
        expect(numberOfDays360(new Date("2020-02-05"), new Date("2020-05-31"))).toEqual(116)
    })
    test(`14`, () => {
        expect(numberOfDays360(new Date("2020-02-10"), new Date("2020-05-31"))).toEqual(111)
    })
    test(`15`, () => {
        expect(numberOfDays360(new Date("2020-02-15"), new Date("2020-05-31"))).toEqual(106)
    })
    test(`16`, () => {
        expect(numberOfDays360(new Date("2021-01-14"), new Date("2022-01-13"))).toEqual(360)
    })
    test(`17`, () => {
        expect(numberOfDays360(new Date("2021-01-14"), new Date("2022-01-14"))).toEqual(361)
    })
    test(`18`, () => {
        expect(numberOfDays360(new Date("2021-01-14"), new Date("2022-01-22"))).toEqual(369)
    })
    test(`19`, () => {
        expect(numberOfDays360(new Date("2021-01-30"), new Date("2022-01-22"))).toEqual(353)
    })
    test(`20`, () => {
        expect(numberOfDays360(new Date("2021-01-30"), new Date("2022-03-01"))).toEqual(392)
    })
    test(`21`, () => {
        expect(numberOfDays360(new Date("2020-01-31"), new Date("2020-05-30"))).toEqual(120)
    })
    test(`22`, () => {
        expect(numberOfDays360(new Date("2020-01-14"), new Date("2021-06-30"))).toEqual(527)
    })
    test(`23`, () => {
        expect(numberOfDays360(new Date("2023-02-28"), new Date("2024-02-29"))).toEqual(361)
    })
    test(`24`, () => {
        expect(numberOfDays360(new Date("2023-03-01"), new Date("2024-02-29"))).toEqual(360)
    })
    test(`25`, () => {
        expect(numberOfDays360(new Date("2020-08-30"), new Date("2021-08-30"))).toEqual(361)
    })
    test(`26`, () => {
        expect(numberOfDays360(new Date("2020-08-30"), new Date("2021-08-31"))).toEqual(361)
    })
    test(`5 Years`, () => {
        expect(numberOfDays360(new Date("2022-09-02"), new Date("2027-09-01"))).toEqual(1800)
    })
    test(`10 Years`, () => {
        expect(numberOfDays360(new Date("2022-09-02"), new Date("2032-09-01"))).toEqual(3600)
    })
    test(`End of February`, () => {
        expect(numberOfDays360(new Date("2022-02-28"), new Date("2023-02-27"))).toEqual(360)
    })
    test(`End of February leap year`, () => {
        expect(numberOfDays360(new Date("2022-02-28"), new Date("2024-02-28"))).toEqual(720)
    })
    test(`End of February jump over leap year`, () => {
        expect(numberOfDays360(new Date("2022-02-28"), new Date("2025-02-27"))).toEqual(1080)
    })
    test(`Another End of February`, () => {
        expect(numberOfDays360(new Date("2020-02-28"), new Date("2023-02-27"))).toEqual(1080)
    })

})