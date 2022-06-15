const time = '10:50PM';

function convertTo24HrsFormat(time) {
    // write your solution here
    let timeLower = time.toLowerCase();
    let [hours, mins] = timeLower.split(":");
    // console.log(typeof hours)
    if(mins.endsWith("am")){
        hours = (hours == 12) ? 0 : hours;
    } else if( mins.endsWith("pm")){
        hours = (hours == 12) ? hours : String(parseInt(hours) + 12);       //String(+ hours + 12) // so we learn that if we give + before any string, the string will convert into a number.
    }
    // console.log(typeof hours)
    return hours + ":" + mins.slice(0, -2);                             //.padStart(2, 0) .padStart(2, 0)
}

console.log(`Converted time: ${convertTo24HrsFormat(time)}`)
// console.log(typeof `${convertTo24HrsFormat(time)}`)