const obj = { key: 1 };

function isEmpty(obj) {
    // write your solution here
    let b = true;
    let a = JSON.stringify(obj);
    if(a === JSON.stringify({})){
        b = true;
    } else{
        b = false;
    }
    return b;
}

console.log(`is empty object: ${isEmpty(obj)}`);