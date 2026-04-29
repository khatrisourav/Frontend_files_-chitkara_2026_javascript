// console.log("Home page")

// function login (callback){
// setTimeout(()=>{
// console.log("login")
// callback();

// },2000)
// }

// function checkrole(callbackdashboard){
//     setTimeout(()=>{
//         console.log("role ok")
//         callbackdashboard();
//     },5000)
   
// }

// function dashboard (){
//     setTimeout(()=>{
//         console.log("Dasboard loaded")
//     },6000)
// }


// login (function (){
//     checkrole(dashboard)
// }
// )
const array = [ {name: "sourav",age:21}, {name: "dhruv", instudy: "bad"}, {name:"Dev ", instudy:"bad"}, {name: "Aeshita", instudy: "very good"}]



const jsonstring = JSON.stringify(array);


function print(str){
    let count = 0;
    console.log(str)
   const newarray =  JSON.parse(str);
   console.log(newarray[2])


}
print(jsonstring)
