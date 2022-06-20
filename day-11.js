// function fibonacci(n) {
// 	// write your solution here
//     let first = 0;
//     let second = 1;
//     let count = 0;
//     var fibo = 0;
//     while(count < n){
//         if(count<=1){
//             fibo = count;
//         }else{
//             fibo = first+ second;
//             first = second;
//             second = fibo;
//         } 
//         count++;
//     }
//     return fibo; 
	
    
// }

// console.log(`fibonacci value at position 5: ${fibonacci(33)}`)



function fibonacci(n) {
	// write your solution here
    let first = 0;
    let second = 1;
    let fibonacci = 0;
    for(let i = 2; i <= n; i++){
        fibonacci = first + second;
        first = second;
        second = fibonacci;
    }
	return fibonacci; 

}

console.log(`fibonacci value at position 5: ${fibonacci(32)}`)