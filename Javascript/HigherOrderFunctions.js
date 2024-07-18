// let sum = function ( a  , b){
//     return a + b ;
// }
// let a = function (){
//     return 1 ;
// };
// let b = 3 ;
// console.log(sum(a,b));

// HOF

// ForEach
// map
// filter
// reduce

// for Each

// let arr = [10,20,30,40,50 ];

// let fn = function(ele , idx , arr ){
//     arr[idx] = ele *2 ;
//   }

// arr.forEach(fn)

// console.log(arr);

// Pure Functions - map filter reduce

// MAP

//  let arr = [10,20,30,40,50 ];

// let result = arr.map ( function(ele ){
//     return ele* ele
//  });
// // console.log("arr" , arr )
//  console.log( "result " , result )

// let arr = [3,2,1,4,6,0,9];

// let result = arr.filter( function(ele){
//     return ele%2 == 0 ;
// })

// console.log(result )

// Reduce

// let arr = [1,3,2,9,4,5,0,3];

// let res = arr.reduce(function( acc , curr ){
//     return acc + curr;
// },0 )

// console.log(res)

// Question

let arr = [4, 6, 1, 9, 2, 3];

// let ans = ;
// let ans2 = ans.
// let ans3 = ans2.reduce( function( acc , ele ) { return acc + ele;})

let res = (function () {
  return arr
    .map(function (ele) {
      return ele * ele;
    })
    .filter(function (ele) {
      return ele % 2 == 0;
    })
    .reduce(function (acc, ele) {
      return acc + ele;
    })
}) ()



console.log(res);
// console.log( ans3 )

// let sum = 0

// for( let i =0 ; i<arr.length ; i++ ){

//     let ele = arr[i] * arr[i];
//     if( ele%2 == 0 ){
//         sum += ele;
//     };
// }

// console.log( sum )

// IIFE

//   function abc() {
//     console.log("abc ");
//   }
// )();
