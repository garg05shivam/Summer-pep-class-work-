function getProducts() {
    return new Promise((resolve, reject) => {
    //let success = true;
     let success = false;  
        setTimeout(() => {
            if (success) {
                resolve('Product Loaded');}
            else {
                reject('Product loading failed');
            }
        }, 1000);
    });
}

function getoffers() {
    return new Promise((resolve, reject) => {
         //let success = true;
       let success = false
        setTimeout(() => {
            if (success) {
                resolve('Offers Loaded');}
             else {
                reject('Offers loading failed');
            }
        }, 2000);
    });
}

function getCategories() {

    return new Promise((resolve, reject) => {
    //    let success = true;
 let success = false ;
        setTimeout(() => {
            if (success) {
                resolve('Categories Loaded');}
            
             else {
                reject('Categories loading failed');
            }
        }, 3000);
    });
}

// Promise.all([
//     getProducts(),
//     getoffers(),
//     getCategories()
// ])
//     .then((results) => {
//         console.log('success',results);
//     })
//     .catch((error) => {
//         console.error('failed' ,error);
//     });

Promise.allSettled([
    getProducts(),
    getoffers(),
    getCategories()
])
    .then((results) => {
        console.log('success',results);
    })
    .catch((error) => {
        console.error('failed' ,error);
    });

// Promise.race([
//     getProducts(),
//     getoffers(),
//     getCategories()
// ])
//     .then((results) => {
//         console.log('success',results);
//     })
//     .catch((error) => {
//         console.error('failed' ,error);
//     });

// Promise.any([
//     getProducts(),
//     getoffers(),
//     getCategories()
// ])
//     .then((results) => {
//         console.log('success',r esults);
//     })
//     // .catch((error) => {
//     //     console.error('failed' ,error);
//     // }); 