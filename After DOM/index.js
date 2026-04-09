
// const bd = document.getElementById("title");
// const ele1= document.createElement("span")
// ele1.classList.add("pink")
// ele1.classList.add("red")
// console.log(ele1)
// // ele1.classList.remove("pink")
// // console.log(ele1)

// const ele1 = document.getElementById("one");
// const body = document.getElementById("title")
// console.log(ele1.firstChild)
// console.log(body.firstChild)
// const fragment = document.createDocumentFragment();

// for (let i = 1; i <= 3; i++) {
//    const li = document.createElement("li");
//    li.textContent = "Item " + i;
//    fragment.appendChild(li);
// }

// document.body.appendChild(fragment);

//  const para = document.getElementById("text");
//  const btn = document.getElementById("btn");
//  btn.onclick = function (){
//     const task = document.getElementById("input").value
//   const li = document.createElement("li");
//   li.innerText= task;
//   document.body.appendChild(li)
//   document.getElementById("input").value=""

//  }



// const h1 = document.getElementById("one")
// console.log(h1)
// console.log(h1.innerText)
// h1.style.backgroundColor= "Red"

// const para = document.getElementsByClassName("two")
// console.log(para)
// para[0].textContent= 8888888;

// const para1= document.getElementsByTagName("p");
// console.log(para1)


// const h = document.getElementById("one")
// console.log(h);

// const cls= document.querySelectorAll(".red")
// console.log(cls[1].textContent)

// const arr = document.getElementsByClassName("one")
// arr.classList.add ("red");
// arr.classList.remove("red");
// arr.classList.toggle("red");

// console.log(arr.classList.contains("red"))


// const h1 = document.getElementById("two")

// h1.style.backgroundColor= "red"
// const para = document.createElement("p");
// // para.setAttribute("id","red")
// // console.log(para)

// // document.body.appendChild(para);

// // const h1 = document.getElementById("two")
// // h1.style.color= "red"
// // // h1.innerHTML= "<span> Rahul </span>"
// // // console.log(h1)

// // const para = document.getElementById("three")
// // para.style.backgroundColor= "yellow"
// /// element create
// const span1 = document.createElement("span")
// span1.innerText= "Welcome to our website"
// span1.setAttribute("id", "red")
// const q = span1.getAttribute("id")
// // console.log(q)
// // console.log(span1)

// // we have to push the element inito div tag
// const box = document.getElementById("two")
// console.log(box)
// // getting the p element
// const para= document.getElementById("para")

// box.insertBefore(span1,para )

// /// removing the child from box 
// box.removeChild(span1)


// document.getElementById("two").remove()
// const t = document.getElementById("two");
// t.classList.add("red")
// console.log(t)
// t.classList.remove("red")
// // t.classList.toggle("red")
// // console.log(t.classList.contains("red"))



// // const para = document.getElementById("one")
// // para.innerHTML= "<span>  Rahul</span>"



// // const box = document.querySelectorAll(".red")
// // console.log(box)

// // const para = document.getElementById("one")
// // para.style.backgroundColor= "red"

// // creation of element
// const para = document.createElement("p")
// para.setAttribute("id", "one")
// para.textContent= "Hello world"
// console.log(para)

// /// div access

//  const boxes = document.getElementById("box")
//  console.log(boxes)

//  // now insert the element to div

//  boxes.appendChild(para)

//  // new element
//  const y = document.createElement("span")
// y.textContent= "Sourav"
//  /// push into div
//  boxes.insertBefore(y,para)


//  ///// remove childs


//  boxes.removeChild(y)
//  boxes.remove();



// const para = document.getElementById("two")
// console.log(para)

// para.classList.add("red")
// para.classList.remove("red")
// para.classList.toggle("red")
// console.log(para.classList.contains("pink"))


// const collection = document.getElementsByClassName("two")
// console.log(collection , collection.length)
// const nodelist = document.querySelectorAll("#one")
// console.log(nodelist, nodelist.length)


//  const para = document.createElement("p")
//  para.setAttribute("id", "one")
//  para.setAttribute("class", "two");
//  document.body.appendChild(para)

//  console.log(collection.length)
//  console.log(nodelist.length)




// // access
// const h = document.getElementById("red")
// console.log(h);


// /// creating a element

// const newelement = document.createElement("h2")


// /// setting a attribute
// newelement.setAttribute("id", "one")


// /// we have to insert the content in newelement
// newelement.textContent= "Welcome to chitkara "
// console.log(newelement)


// /// we have to append a element in to body or in any specific 

// const body = document.getElementById("title")

// // now append it 

// body.insertBefore(newelement,h)


// const box = document.getElementById("box");


// const para = document.createElement("p");
// para.innerText= "Sourav";

// box.appendChild(para)

// box.removeChild(para)

// box.remove();

// const h = document.getElementById("one")

// h.classList.add("red")
// console.log(h)
// h.classList.remove("red")
// h.classList.toggle("red")
// console.log(h.classList.contains("pink"))

// const collection = document.getElementsByTagName("p");
// console.log(collection, collection.length)
// const query = document.querySelectorAll("#one")
// console.log(query, query.length)

// const para = document.createElement("p");
// para.setAttribute("id", "one")

// document.body.appendChild(para)
// console.log(` collection length ${collection.length}`);
// console.log(` Query length ${query.length}`)


// const box = document.getElementById("box")
// const heading = document.getElementById("two")

// console.log(heading.parentElement)




//////////////////////////

// event handling 



/// three ways to handle the events 


// const heading = document.getElementById("two")
// console.log(heading)
// heading.textContent= "Welcome to chitkara univeristy"

////



// const answer= document.querySelectorAll(".one")
// answer[1].textContent= "Welcome to chitkara university"







/// Assignment 2
// const box = document.getElementById("box")

// console.log(box.innerText)

// const visiblep = document.getElementById("visible")
// visiblep.innerText= "Yes it is visible"


/// Assignment 3

// const container= document.getElementById("container")
// container.innerHTML= "<h2>hello</h2> <p> This is the a paragraph</p>"

// console.log(container.innerHTML)



//  const btn1= document.getElementById("btn")

//  btn1.onclick= function () {
//     document.getElementById("two").innerText= "Sourav"
//  }


// const btn1= document.getElementById('btn')
// function change () {
//     document.getElementById("two").innerText= "Rahul"                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
// }

// btn1.addEventListener('click', change)


const btn1 = document.getElementById("btn")

btn1.addEventListener('click', function (event) {
event.preventDefault();
    const username = document.getElementById("username").value
    const email= document.getElementById("email").value

    const password = document.getElementById("password").value

    const user= {
        username:username,
        email:email,
        password:password,
    }
    const us= JSON.stringify(user)
    console.log(us)
    localStorage.setItem("userauth", us)


})