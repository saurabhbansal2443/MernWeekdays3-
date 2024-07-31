// sandwich --> bakeTheBread --> applySauces ---> Grill


// callback hell 
function bakeTheBread(raw) {
  setTimeout(function () {
    console.log("Bread is baked ");
    setTimeout(function () {
      console.log("Sauces applied  ");
      setTimeout(function () {
        console.log("Sandwich is ready ");
      }, 2000);
    }, 2000);
  }, 2000);
}

bakeTheBread("bread")

// bakeTheBread("bread",function applySauces(bread, ){

//     setTimeout(function(){
//         console.log("Sauces applied  ");

//     } , 2000 )
// } )
