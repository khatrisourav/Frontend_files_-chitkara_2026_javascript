





// const dark = document.getElementById("dark")







// dark.addEventListener('click', function () {
//     const bd = document.getElementById('title')
//     bd.style.backgroundColor = "black"
// })


//   document.getElementById("light").addEventListener('click' , function(){
//       const bd = document.getElementById('title')
//     bd.style.backgroundColor = "white"
//   })


// function d() {
//     const div = document.getElementById('box')
//     div.style.backgroundColor= "red"
// }

// function d1() {
//     const div = document.getElementById('box')
//     div.style.backgroundColor= "pink"
// }




// document.getElementById('btn1').addEventListener('click', function() {
//     console.log("hello")
// })
// document.getElementById('btn1').addEventListener('click', function() {
//     console.log("hy")
// })


document.getElementById("myform").addEventListener('submit', function (event) {
    event.preventDefault();
    console.log("form is submitted")

    const usr = document.getElementById('username').value
    const pass = document.getElementById('pass').value
    console.log(usr, pass)
    let obj = {
        username: usr,
        password: pass,
    }
    console.log(obj)

    const lc = JSON.stringify(obj)
    console.log(lc)
    localStorage.setItem('G12', lc)
})



