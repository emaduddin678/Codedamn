const str = 'XersdfasdfoX';
function getTheGapX(str) {
    // write your solution here
    if(!str.includes("X")){
        return -1;
    }
    const firstIndex = str.indexOf("X");
    const lastIndex = str.lastIndexOf("X");
    const count = lastIndex - firstIndex;


    return (firstIndex == lastIndex) ? -1 : count;
}

console.log(`Gap between the X's: ${getTheGapX(str)}`)
