
// let h1tag = document.querySelector(".h1tap");

// let inputBar = document.getElementById("itag");

// let boxes = document.querySelectorAll(".box");

// console.log( boxes)

// let imgtag = document.querySelector("img");

// imgtag.setAttribute("src" , "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w600/2023/10/free-images.jpg")


// let arr = [];

// console.log( arr )


// let box = document.querySelector(".box");

// // console.log(box.classList)


// box.classList.add("circle")

// // box.classList.remove("circle")


// box.classList.toggle("circle")


// Create Element 


// let h1tag = document.createElement("h1");

// let cont = document.querySelector(".cont");

// console.dir(h1tag)

// h1tag.innerHTML = " I am h1tag ";

// h1tag.classList.add("ht")

// cont.appendChild(h1tag);

// let div = document.createElement("div");    

// div.classList.add("box")
// div.classList.add("circle")

// cont.appendChild(div);  




// console.log(h1tag);
// console.dir(h1tag)

// h1tag.style.color = "green";

// h1tag.innerHTML = " I am chnaged through JS "

// console.dir( inputBar)


let imgtag = document.querySelector("img");

let flag = true ;

let toggleFunction = function () {

    if( flag == true ){
        imgtag.src = "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w600/2023/10/free-images.jpg"
    }else {
        imgtag.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXJA32WU4rBpx7maglqeEtt3ot1tPIRWptxA&s"
    }

    flag = !flag ;  

} 

imgtag.addEventListener("click",function () {

    if( flag == true ){
        imgtag.src = "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w600/2023/10/free-images.jpg"
    }else {
        imgtag.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXJA32WU4rBpx7maglqeEtt3ot1tPIRWptxA&s"
    }

    flag = !flag ;  

} )







