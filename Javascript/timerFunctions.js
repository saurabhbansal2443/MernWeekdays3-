

// setTimeout(function(){
//     console.log(" called after 3 sec ")
// }, 3000 )
let count = 0 ;
let id = setInterval(function(){
    console.log(count++)
},1000)

setTimeout(function(){
    clearInterval(id);
},5000)