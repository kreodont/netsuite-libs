import moment from "moment";

function isLastDayOfFebruary(date: Date): boolean {
    return (
        moment(date)
            .add(1, 'days')
            .date() === 1 &&
        moment(date)
            .add(1, 'days')
            .month() === 2
    );
}
export function numberOfDays360(
    start: Date,
    end: Date,
    logs?: string[],
): number {
    // Must be calculated using 360/30 formula, so 360 days in the year, and 30 days in a month
    if (start > end) {
        return 0;
    }
    if (
        start.getFullYear() === end.getFullYear() &&
        start.getMonth() === end.getMonth() &&
        start.getDate() === end.getDate()
    ) {
        return 1;
    }
    let d1 = start.getDate();
    let d2 = end.getDate();
    logs?.push(`D1 is ${d1}, D2 is ${d2}`);

    if (isLastDayOfFebruary(end)) {
        d2 = 30;
    }
    if (isLastDayOfFebruary(start) && isLastDayOfFebruary(moment(end).add(1, 'days').toDate())) { // since Feb 27 is also end of February for the end date
        d1 = 30;
        d2 = 29;
    }
    if (isLastDayOfFebruary(start)) {
        d1 = 30;
    }
    if (d2 === 31 && d1 !== 31) {
        d2 = 30;
    }
    const yearsDifference = end.getFullYear() - start.getFullYear();
    const monthsDifference = end.getMonth() - start.getMonth();
    const daysDifference = d2 - d1 + 1;
    const result =
        360 * yearsDifference + 30 * monthsDifference + daysDifference;
    logs?.push(
        `Start date: ${start}, end date: ${end}. Years difference: ${yearsDifference}, months difference: ${monthsDifference} (end month is ${end.getMonth()}, start month is ${start.getMonth()}), days difference: ${daysDifference}. Result days: ${result}`,
    );
    return result;
}
