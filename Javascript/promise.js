const promise=new Promise((resolve, reject) => {
    let success = true;
setTimeout(() => {
    if (success) {
        resolve("Logged in");
    }
    else{
        reject("Login failed");
    
    }
},1000);
});

promise.then(data => {
    console.log(data);
}).catch(error => {
    console.error(error);
}).finally(() => {
    console.log("Login operation completed.");
});



function login() {
    console.log("Login...");
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Logged in");
        resolve();
    }, 1000);
})
}

function getUser() {
    console.log("Getting user...");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("User details loaded");
            resolve();
        }, 2000);
    });
}

function getOrders() {
    console.log("Getting orders...");
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Orders loaded");
        if (typeof cb === "function") cb();
    }, 3000);
})
}

function getOrderDetails() {
    console.log("Getting order details...");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Order details loaded");
            resolve();
        }, 4000);
    });
}

login()
.then(getUser)
.then(getOrders)
.then(getOrderDetails)