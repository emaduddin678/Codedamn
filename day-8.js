//  date difference by day
const DAY_IN_MILLISECONDS = 1000 * 60 * 60 * 24;

function getDaysBetweenDates(dateText1, dateText2) {
    // write your solution here
    const date1 = new Date(dateText1);
    const date2 = new Date(dateText2);
    let differenceDate = Math.abs(date1 - date2);
    let numberOfDay = differenceDate / DAY_IN_MILLISECONDS;

    return numberOfDay;
}

console.log(`Days difference: ${getDaysBetweenDates('10/15/2020', '12/1/2021')}`)