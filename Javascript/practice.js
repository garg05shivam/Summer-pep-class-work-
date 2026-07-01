// // console.log("6")
// // setTimeout(() => console.log("Hello, World!"), 1000);
// // Promise.resolve().then()


// console.log("start");
// setTimeout(() => console.log("Hello!"), 0);
// console.log("end");
console.log('1');
Promise.resolve().then(() => console.log('g'));
console.log('2');
setTimeout(() => console.log('3'), 3000);
console.log('4');
setTimeout(() => console.log('5'), 1000);
Promise.resolve().then(() => console.log('8'));
console.log('6');
setTimeout(() => console.log('7'),2000);