// // function getDetails(name) {

// //     let pro = new Promise((res, rej) => {

// //         // Details get ho rahi hai 
// //         let data = { name: "sourav", age: 89, college: "Chitkara" }
// //         let error = "User not found"
// //         let a

// //         setTimeout(() => {
// //             if (name == data.name) {
// //                 a = true;

// //             }
// //             else {
// //                 a = false;
// //             }

// //             if (a) {

// //                 res(data)
// //             }
// //             else {
// //                 rej(error)
// //             }

// //         }, 5000)


// //     })

// //     return pro;

// // }

// // function checkEligibility(data) {


// //     return new Promise((r, j) => {
// //         setTimeout(() => {
// //             if (data.age > 18) {
// //                 r("User can vote")
// //             }
// //             else {
// //                 j("User cannot vote")
// //             }

// //         }, 2000)


// //     })





// // }

// // function ShowMessage(message) {

// //   return  new Promise((success, faliure) => {


// //         setTimeout(() => {
// //             let status=false;
// //             if (message != undefined) {
// //                 status= true;
// //                 document.querySelector("h1").innerText = message;
// //                 success(status)


// //             }
// //             else {
// //                 document.querySelector("h1").innerText = "Bro message is undefined";
// //                 faliure(status)



// //             }

// //         },4000)




// //     })

// // }



// // document.querySelector("button").addEventListener("click", function () {
// //     const name = document.querySelector("input").value
// //     const pro = getDetails(name)
// //     pro.then((data) => {
// //         console.log(data)
// //         return checkEligibility(data)


// //     }).then((message) => {
// //         console.log(message)
// //       const p =   ShowMessage(message);
// //       return p ;


// //     }).then ((data)=>{
// //         console.log(data)
// //     })
// //     .catch((error) => {
// //             console.log(error)

// //         })


// // })

// // const p = Promise.reject("Sourav")



// // p.then(
// //     (data) => { console.log(data)},
// //     (error) => {console.log(error)  }
// // )


// // Promise.resolve("Done")
// //     .then((data) => console.log(data))
// //     .catch((err) => console.log(err))
// //     .finally(() => console.log("Execution completed"));


// // const promise= Promise.resolve(20)
// // console.log(promise)
// // promise.then((x)=>{
// //   return  x+2
// // }).then((y)=>{
// //     console.log(y)
// //     console.log("hlo")
// // })

// // let p2 = Promise.reject(2);
// // let p1 = Promise.resolve(1);

// // let p3 = Promise.resolve(3);

// // Promise.any([p1, p2, p3])
// //    .then((result) => console.log(result))
// //    .catch((error) => console.log(error));


// // try {
// //     let x = 10;
// //     let y = 0;

// //     if (y === 0) {
// //         throw new Error("Cannot divide by zero ❌");
// //     }

// //     let result = x / y;
// //     console.log(result);

// // } catch (error) {
// //     console.log("Error:", error.message);
// // }



// // function processPayment(amount) {
// //     if (amount <= 0) {
// //         throw new Error("Invalid amount ❌");
// //     }

// //     console.log("Payment successful ✅");
// // }

// // try {
// //     processPayment(-500);   // mistake or bug
// // } catch (error) {
// //     console.log("Payment failed:", error.message);
// // }






// // let promise = new Promise(function (success, failure){
// //     // // success("Done")
// //     // failure("not done")

// //     failure("done")

// // })

// // // console.log(promise)

// // promise.then(()=>{
// //     console.log("hlo")
// // }).catch(()=>{
// //     console.log("hi")
// // })


// let data = {name : "sourav", age : 21, college: "chitkara"}
// let error = "User not found"
// function getUserDetails(name){  //a

//  let p =   new Promise((res,rej)=>{
//         setTimeout(()=>{
//             if (data.name==name){
//                 res(data)
//             }
//             else{
//                 rej(error)
//             }

//         },5000)

//     })

//   return p 
// }

// function check (data){
//   return   new Promise((success, faliure)=>{

//     setTimeout(()=>{
//         if (data.age>=18){
//             success("USer can vote")
//         }
//         else {
//             faliure("User cannot vote")
//         }


//     },2000)

//     })

// }

// function webpage(message){
//     document.querySelector("h1").innerText= message

// }


// document.querySelector("button").addEventListener('click', function(){
//  const name =    document.querySelector("input").value   //a
//  let get = getUserDetails(name) //a
// //  get.then((data)=>{
// //     console.log(data)
// //   return  check(data)


// //  }).then((message)=>{
// //     console.log(message)

// //     webpage(message)

// //  })

// //  .catch((error)=>{
// //     console.log(error)

// //  })




// // })




// const p = Promise.resolve(20)
// console.log(p)

// // const q = Promise.reject("error")
// // console.log(q)

// p.then((x)=>{
//     return x+2;   /// Promise.resolve(22)
// }).then((y)=>{

//     return y*2 //Promise.resolve(44)

// }).then((t)=>{
//     console.log(t)
// })

// .catch((e)=>{
//     console.log(e)

// }).finally(()=>{
//     console.log("finally")
// })


// let p1 = new Promise ((r,s)=>{
//     setTimeout(()=>{
//         r(1)
//     },5000)

// })



// let p2 = new Promise ((r,s)=>{
//     setTimeout(()=>{
//         r(2)
//     },2000)

// })


// let p3 = new Promise ((r,s)=>{
//     setTimeout(()=>{
//         s(3)
//     },1000)

// })


// Promise.all([p1,p2,p3]).then((result)=>{
//     console.log(result)
// }).catch((e)=>{
//     console.log(e)
// })


// let p1 = new Promise((res) => setTimeout(() => res("First"), 2000));
// let p2 = new Promise((res) => setTimeout(() => res("Second"), 1000));

// Promise.race([p1, p2])
//    .then((result) => console.log(result));



// let p1 = Promise.resolve("Success");
// let p2 = Promise.reject("Error");

// Promise.allSettled([p1, p2])
//     .then((result) => console.log(result));































