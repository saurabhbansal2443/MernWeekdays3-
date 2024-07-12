

// let arr1 = [1,2,3,4,5]
// let arr2 = [ 'a' , 'b' , 'c']

// let res = [ ...arr1 , ...arr2 , ...arr1 , ...arr2  ]

// console.log( res )

// let obj1 = {
//     name : "Saurabh"
// }
// let obj2 = {
//     age : 23 
// }  

// let res = {...obj1 , ...obj2}

// console.log(res)


// Rest Parameter 


function sum (...num) {
    let arr = num ; 

    let sum = 0 ;

    for( let i = 0 ;  i<arr.length ; i++  ){
        sum = sum +  arr[i] ;
    };
    return sum ;
};

console.log(sum(2,3 , 7 ))