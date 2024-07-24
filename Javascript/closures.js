// {
//     let x = 8 ;

//     function sum(a,b){
//         return a + b + x ;
//     }
// }
// console.log(x)
// console.log(sum(1,2));

function counter() {
  let count = 0;

  return {
    inc: function () {
      count++;
      console.log(count);
    },
    dec: function () {
      count--;
      console.log(count);
    },
  };
}

let { inc, dec } = counter(); // { inc : inc , dec : dec }

inc();
inc();
inc();
dec();

count = 50;

inc();
