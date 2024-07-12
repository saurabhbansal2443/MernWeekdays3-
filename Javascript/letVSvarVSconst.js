// Reassign
// var and let  can be reassigned
// const cannot be reassigned

// Redeclartion
// var can be redecalred
// let and const cannot be redecalred

// Hoisting  -- Hoisting is a behaviour of variables and functions in which they will appear as they have mopved to the top of their scope

// var let and const are  hoisted but let and const are hoisted in a diffrent zone called TDZ
// var let and const are function scoped ( becuase function is also a block of code )

// scope
// -- function scope done 
// -- block scope 
// -- Global scope
// -- lexical Scope done 
// -- scope chain done 

// var is function scoped
//

// 

// console.log(a);

//  let a = 10 ;

// console.log(a);

// abc();

// function abc() {
//     console.log("abc");
// }

// // abc()
// console.log(a);
// var a = 99;
// console.log(a);

// function abc() {
//   a = 10;
//   console.log(a);
// }

// abc()

// console.log(a);

// var a = 10;
// let b = 20;
// var z = 109;

// console.log(a);
// console.log(b);
// function one() {
//   console.log(a);
//   console.log(b);

//   function two() {
//     a = 99;
//     var b = 89;
//     let c = 90;
//     console.log(a);
//     console.log(b);
//     console.log(c);

//     function three() {
//       console.log(a);
//       console.log(b);
//       console.log(c);
//       console.log(z);
//       var d = 89;
//     }

//     three();

//     // console.log(d);
//   }

//   two();
//   console.log(a);
//   console.log(b);
// //   console.log(c);
// }

// one();


// console.log(d);
// var d = 99 ;
// console.log(d);

// function abc(){
//     d = 10 ;
//     console.log(d);
// }

// abc();
// console.log(d); 

let a = 10 ;
console.log(b);

{ 
    console.log(b);
    let a  = 99 ;
    var b = 199 ; 
    console.log(a);
}
console.log(b)
