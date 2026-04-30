// // console.log("Home page")


// // function login(callback) {
// //     setTimeout(() => {
// //         console.log("Login");
// //         callback();

// //     }, 2000)

// // }


// // function checkRole(callback) {
// //     setTimeout(() => {
// //         console.log("Role ok ")
// //         callback();

// //     }, 5000);
// // }

// // function Dashboard (){
// //   setTimeout(function(){
// //     console.log("Dasboard loaded")


// //   },2000)

// // }


// // login(function(){
// //     checkRole(Dashboard);

// // })











// // // // console.log("Home page");



// // // // function login() {
// // // //     setTimeout(function(){
// // // //     console.log("Login")
// // // // },5000)

// // // // }

// // // // function checkRole() {
// // // //     console.log("Role ok");
// // // // }

// // // // login();
// // // // checkRole();

// // // // console.log("Dashboard load");
// // // // console.log("Game playing");

// // // // Output
// // // // Home page
// // // // Login
// // // // Role ok
// // // // Dashboard load
// // // // Game playing

// // // // You are not using call back functions for example



// // // // console.log("Home page")


// // // // function login() {
// // // //     setTimeout(() => {
// // // //         console.log("Login");


// // // //     }, 2000)

// // // // }

// // // // login()
// // // // checkRole()
// // // // Dashboard()
// // // // function checkRole() {
// // // //     console.log("roleok")
// // // // }

// // // // function Dashboard() {
// // // //     console.log("dashboard")
// // // // }



// // // // console.log("Game playing");



// // // // console.log("home page")
// // // // console.log("middle")

// // // // setTimeout(function (){
// // // // console.log("login ")
// // // // },5000)




// // // // console.log("role ok")

// // // // console.log("user info")

// // // // console.log("Webpage load")
// // // // console.log("Game playing")




// // /* ===== NORMAL STATEMENTS ===== */
// // console.log("1️⃣ Start");

// // /* ===== setTimeout (Async Task) ===== */
// // setTimeout(() => {
// //     console.log("2️⃣ setTimeout done (after 2 sec)");
// // }, 2000);

// // /* ===== PROMISE ===== */
// // let myPromise = new Promise((resolve, reject) => {
// //     let success = true;

// //     setTimeout(() => {
// //         if (success) {
// //             resolve("3️⃣ Promise Success");
// //         } else {
// //             reject("3️⃣ Promise Failed");
// //         }
// //     }, 1000);
// // });

// // /* ===== USING PROMISE ===== */
// // myPromise
// //     .then((result) => {
// //         console.log(result);
// //     })
// //     .catch((error) => {
// //         console.log(error);
// //     });

// // // /* ===== NORMAL STATEMENT ===== */
// // // console.log("4️⃣ End");




// // setTimeout(() => {
// //     console.log("setTimeout");
// // }, 0);

// // Promise.resolve().then(() => {
// //     console.log("Promise");
// // });

// // console.log("End");


// const orderFood = [["Sourav"], ["Chips", "Coldrink", "Burger", "Chowmein"]]

// function createOrderID(callbackproceedtoPayment) {
//     setTimeout(function (orderFood) {

//         let orderID = 1;
//         console.log("Order ID created" + orderID)

//         callbackproceedtoPayment(orderID)

//     }, 2000)

// }




// function proceedToPayment(orderID, callbackordersummary) {
//     setTimeout(() => {
//         console.log("payment done for " + orderID)
//         callbackordersummary(orderID)

//     }, 3000)

// }

// function Ordersummary(orderID, callbackwalletupdated) {
//     setTimeout(() => {
//         console.log("Displayed Order Summary " + orderID)
//         callbackwalletupdated(orderFood[0][0])

//     }, 5000)

// }

// function Walletupdate(name) {
//     setTimeout(() => {
//         console.log("wallet Updated for" + name)
//     }, 1000)

// }


// createOrderID(function(orderID){
//     proceedToPayment(orderID, function(orderID){
//         Ordersummary(orderID, function(name){
//             Walletupdate(name)

//         } )

//     })
// })

// createOrderID(function(orderID){
//     proceedToPayment(orderID,function(){
//         Ordersummary(orderID,function(name){
//             Walletupdate(name)
//         })
//     })
// })

// let p = new Promise((success, failure) => {

//     let a;
//     a = false;

//     if (a) {
//         success("Hlo its fullfiled")
//     }
//     else {
//         failure("error");
//     }

// })
// console.log(p)
// p.then((result) => { console.log(result) })
//     .catch((error) => { console.log(error) })
// p.then((data)=>{
//     console.log(data)
// }).catch((error)=>{
//     console.log(error)
// })


// function proceedToPayment(orderID) {

//     let p1 = new Promise((res, rej) => {
//         if (orderID == 1) {
//             res("Payment done")
//         }
//         else {
//             rej ("Payment dont done")
//         }

//     })

// }




// function createOrderID() {
//     const p = new Promise((resolve, reject) => {
//         let orderID = 1
//         if (orderID) {
//             resolve(orderID)

//         }
//         else {
//             reject("Not created")
//         }

//     })

//     return p;

// }

// createOrderID().then((data) => {
//     console.log(data)

//   return  proceedToPayment(data)




// }).then((data)=>{
//     console.log(data)
// })



// let orderFood = [["Sourav"], ["Burger", "Chips", "Coldrink"]]


// function createorderID (callbackProceedtopayment){


   
//     setTimeout(()=>{
//          let orderID = 1;
//          console.log("Order ID generated"+orderID)
//          callbackProceedtopayment(Ordersummary)

//     },2000)
   

// }
// function proceedToPayment (callbackordersummary){
//     setTimeout(()=>{
//          console.log("Payment done")
//          callbackordersummary()

//     },5000)
    
   

// }
// function Ordersummary (){
//     setTimeout(()=>{
//         console.log("Order Summary generated")

//     },2000)
 
    

// }
// createorderID(proceedToPayment);



// let p = new Promise (function (res, rej){
//     let a =  false;
//     if (a){
//         res("Done")
//     }
//     else{
//         rej("error")
//     }


// })
// p.then((data)=>{
//     console.log(data)
   
// }).catch((data)=>{
//     console.log(data)

// })




let dd= new Promise(function(success, failure){

    function createOrderID (){
        setTimeout(()=>{
          let a = false;
          if (a){
            success("Order ID created")
          }
          else{
            failure("Not created")
          }
        },1000)
    }

    createOrderID();
})
console.log(dd)

dd.then(function (data){
    console.log(data)

}).catch((data)=>{
    console.log(data)

})






