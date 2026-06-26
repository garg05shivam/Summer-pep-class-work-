// // console.log("Hello, World!");
// // console.log("This is a practice file for JavaScript.");
// // console.log("Let's learn and practice JavaScript together!");

// // let a=5;
// // var b=6;
// // function sayhello(){
// //     console.log("Hello, World!");
// // }
// // console.log(a);
// // sayhello();


// // // SCOPE
// // function scope(){
// //     if(true){
// //         // let a=5;
// //         // const num=10;
// //         // console.log(a);
// //         var num=20;
// //         // console.log(num);

// //     }
// //     // console.log(a);
    
// // }
// // console.log(num);
// // scope();


       
// //               let        const       var
// // scope         block     block       function

// // hoisting      hoisted   hoisted       Hoisted
// //                              and TDZ
// //               and TDZ

// // function outer(){
// //     let count=0;
// //     function inner(){
// //         count++;
// //         console.log(count);
// //     }
// //     return inner;
// // }

// // const counter=outer();
// // counter();
// // counter();

// function createBankAccount(initialBalance) {
//     let balance = initialBalance;

//     return {
//         deposit(amount) {
//             balance += amount;
//             console.log(`Deposited: ${amount}. New balance: ${balance}`);
//         },

//         withdraw(amount) {
//             if (amount <= balance) {
//                 balance -= amount;
//                 console.log(`Withdrew: ${amount}. New balance: ${balance}`);
//             } else {
//                 console.log(`Insufficient funds. Current balance: ${balance}`);
//             }
//         },

//         getBalance() {
//             console.log(`Current balance: ${balance}`);
//             return balance;
//         }
//     };
// }

// // Example Usage
// const account = createBankAccount(1000);

// account.deposit(500);      // Deposited: 500. New balance: 1500
// account.withdraw(300);     // Withdrew: 300. New balance: 1200
// account.withdraw(1500);    // Insufficient funds. Current balance: 1200
// account.getBalance();      // Current balance: 1200


