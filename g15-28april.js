console.log("Home page")


function login(callback) {
    setTimeout(() => {
        console.log("Login");
        callback();

    }, 2000)

}


function checkRole(callback) {
    setTimeout(() => {
        console.log("Role ok ")
        callback();
       
    }, 5000);
}

function Dashboard (){
  setTimeout(function(){
    console.log("Dasboard loaded")
    

  },2000)
   
}


login(function(){
    checkRole(Dashboard);
    
})











// console.log("Home page");



// function login() {
//     setTimeout(function(){
//     console.log("Login")
// },5000)
   
// }

// function checkRole() {
//     console.log("Role ok");
// }

// login();
// checkRole();

// console.log("Dashboard load");
// console.log("Game playing");

// Output
// Home page
// Login
// Role ok
// Dashboard load
// Game playing

// You are not using call back functions for example



// console.log("Home page")


// function login() {
//     setTimeout(() => {
//         console.log("Login");


//     }, 2000)

// }

// login()
// checkRole()
// Dashboard()
// function checkRole() {
//     console.log("roleok")
// }

// function Dashboard() {
//     console.log("dashboard")
// }



// console.log("Game playing");



// console.log("home page")
// console.log("middle")

// setTimeout(function (){
// console.log("login ")
// },5000)




// console.log("role ok")

// console.log("user info")

// console.log("Webpage load")
// console.log("Game playing")

