// // // console.log("start")
// // // for (let i = 0;i<100000;i++){
// // //     console.log(i)
// // // }
// // // console.log("end")

// // function consoleprint(name){
// //     console.log("hello" + name)
// // }



// // function userinputprocess(callbackconsoleprint){
// // let name = "sourav";
// // let a = true;
// // if (a){
// //     callbackconsoleprint(name)

// // }
// // else{
// //     console.log("data not found")
// // }

// // // }
// // userinputprocess(consoleprint)

// function orderplaced(proceedtopayment) {
//     setTimeout(() => {
//         let orderFood = [["Sourav"], ["Burger", "chips", "Coldrink"]]
//         console.log("Order Placed")
//         proceedtopayment();

//     }, 2000)

// }


// function proceedtopayment(ordersummary) {
//     setTimeout(()=>{
//         console.log("Payment done")
//         ordersummary();

//     },5000)
    
// }

// function ordersummary(walletupdate) {
//     setTimeout(()=>{
//          console.log("OrderSummary generated")
//          walletupdate()

//     },1500)
   
// }

// function walletupdate() {
//     console.log("Wallet updated")
// }

// orderplaced(function(){
//     proceedtopayment(function(){
//         ordersummary(walletupdate)
//     })
// });



// let p = new Promise(function(s,j){

//     let a =true;
//     if(a){
//         s("credential are correct")
//     }
//     else{
//         j("credentials are not correct")
//     }


// })
// p.then((w)=>{
//     console.log(w)
// }).catch((e)=>{
//     console.log(e)
// })


let dd = new Promise (function (res,rej){

    function orderPlaced (){
        setTimeout(()=>{
            let a = true;
            if (a){
                res("Order placed")
            }
            else {
                rej("Order not placed")
            }
        },10)
    }
    orderPlaced()

})



console.log("hello")
console.log("hi")

