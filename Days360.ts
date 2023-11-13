import dayjs from 'dayjs';

function isLastDayOfFebruary(date: Date): boolean {
    return (
        dayjs(date)
            .add(1, 'days')
            .date() === 1 &&
        dayjs(date)
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
    const d10 = start.getDate();
    const d20 = end.getDate();
    logs?.push(`D1 is ${d10}, D2 is ${d20}`);

    const d21 = isLastDayOfFebruary(end) ? 30 : d20
    const d22 = isLastDayOfFebruary(start) && isLastDayOfFebruary(dayjs(end).add(1, 'days').toDate()) ? 29 : d21
    const d11 = isLastDayOfFebruary(start) && isLastDayOfFebruary(dayjs(end).add(1, 'days').toDate()) ? 30 : d10
    const d12 = isLastDayOfFebruary(start) ? 30 : d11
    const d23 = (d22 === 31 && d12 !== 31) ? 30 : d22
    const d13 = (d12 === 31 && d22 !== 31 && d22 !== 30) ? 30 : d12

    const yearsDifference = end.getFullYear() - start.getFullYear();
    const monthsDifference = end.getMonth() - start.getMonth();
    const daysDifference = (d23 === d13 && monthsDifference === 1 && d23 === 30) ? 0: d23 - d13 + 1;
    const result =
        360 * yearsDifference + 30 * monthsDifference + daysDifference;
    logs?.push(
        `Start date: ${start}, end date: ${end}. Years difference: ${yearsDifference}, months difference: ${monthsDifference} (end month is ${end.getMonth()}, start month is ${start.getMonth()}), days difference: ${daysDifference}. Result days: ${result}`,
    );
    return result;
}
