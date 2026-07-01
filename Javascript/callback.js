//login()
//getuser()
//getorder()
//getorderdetails()


// callGreet(greet);
// callGreet(greet("Jerry")); // we can't do this

// callGreet(() => {
//     greet("Harry");
// })

// setTimeout(() => {
//     console.log("Hello");
// }, 1000)

function login() {
    console.log("Login");
}

function getUser() {
    console.log("Getting user...");
    setTimeout(() => {
        console.log("User details loaded");
    }, 2000);
}

function getOrders() {
    console.log("Getting orders...");
    setTimeout(() => {
        console.log("Orders loaded");
    }, 3000);
}

function getOrderDetails() {
    console.log("Getting order details...");
    setTimeout(() => {
        console.log("Order details loaded");
    }, 4000);
}