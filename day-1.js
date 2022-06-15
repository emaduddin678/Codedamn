// let a = (Math.random() * 10) + 1;
// console.log(a)
// console.log(Math.random())

// let b;
// let c = Math.random();
// console.log(c);

// // b = Math.floor( (c * (15-7)) + 7);
// b = Math.floor( (c * (10-1)) + 1);
// console.log(b);


function getLudoNum(min,max) {
    return Math.floor(Math.random() * (max-min +1) + min);
}

let a = getLudoNum(1,6);
console.log(a);