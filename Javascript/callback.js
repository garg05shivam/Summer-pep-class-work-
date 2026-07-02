//login()
//getuser()
//getorder()
//getorderdetails()



function login(cb) {
    console.log("Login...");
    setTimeout(() => {
        console.log("Logged in");
        if (typeof cb === "function") cb();
    }, 1000);
}

function getUser(cb) {
    console.log("Getting user...");
    setTimeout(() => {
        console.log("User details loaded");
        if (typeof cb === "function") cb();
    }, 2000);
}

function getOrders(cb) {
    console.log("Getting orders...");
    setTimeout(() => {
        console.log("Orders loaded");
        if (typeof cb === "function") cb();
    }, 3000);
}

function getOrderDetails(cb) {
    console.log("Getting order details...");
    setTimeout(() => {
        console.log("Order details loaded");
        if (typeof cb === "function") cb();
    }, 4000);
}

