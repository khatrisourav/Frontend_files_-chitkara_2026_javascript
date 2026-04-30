// function orderplaced(Payment) {

//     setTimeout(() => {
//         let orderfood = [["sourav"], ["Burger", "chips", "coldrink"]]
//         console.log("order placed")
//         Payment()


//     }, 2000)

// }


// function Payment(ordersummary) {
//     setTimeout(() => {
//         console.log("payment")
//         ordersummary()

//     }, 1000)

// }
// function ordersummary(wallet) {

//     setTimeout(() => {
//         console.log("order summary")
//         wallet()

//     }, 5000)
// }

// function wallet() {
//     console.log("wallet updated")
// }


// orderplaced(function(){
//     Payment(function(){
//         ordersummary(wallet)
//     })
// });


//  let p =  new Promise (function (success, failure){
//     let a = false;
//     if (a){
//         success("done")
//     }
//     else{
//         failure("Error g")
//     }

  
// })
// p.then((w)=>{
//     console.log("then",w)
// }).catch((e)=>{
//     console.log("catch",e)
// })


let so = new Promise((r,j)=>{
    function orderPlaced (){
        console.log("sourav")
        setTimeout(()=>{
            let a = false;
            if (a){
                r("order placed")
            }
            else{
                j ("Order not placed")
            }

        },10)
    }
    orderPlaced()

})
so.then((w)=> console.log(w)).catch(e=> console.log(e))
console.log("hello")
console.log("hi")
