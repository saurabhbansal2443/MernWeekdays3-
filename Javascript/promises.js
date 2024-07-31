function bakeBread(raw) {
  return new Promise((resolve, reject) => {
    if (raw) {
      setTimeout(() => {
        resolve("Baking is done ");
      }, 2000);
    } else {
      reject(" error 1 ");
    }
  });
}

function addSauces(raw) {
  return new Promise((resolve, reject) => {
    if (raw) {
      setTimeout(() => {
        resolve(" Sauced are added  ");
      }, 2000);
    } else {
      reject(" error 2 ");
    }
  });
}

function grill(raw) {
  return new Promise((resolve, reject) => {
    if (raw) {
      setTimeout(() => {
        resolve(" sandwich is ready   ");
      }, 2000);
    } else {
      reject(" Error 3 ");
    }
  });
}

// bakeBread("bread")
//   .then((bakedBread) => {
//     console.log(" Baking is done ", bakedBread);
//     return addSauces(bakedBread);
//   })
//   .then((saucedBread) => {
//     console.log(" Saucing is done  ", saucedBread);
//     return grill(saucedBread);
//   })
//   .then((sandwich) => {
//     console.log("Sandwich is ready", sandwich);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// async / await 



async function makeSandwich(){
   let bakedBread = await bakeBread("Bread");
   console.log(bakedBread)
   let saucedBread = await addSauces(bakedBread);
   console.log(saucedBread)
   let sandwich = await grill(saucedBread)
   console.log(sandwich)
}

console.log("Start")
makeSandwich()

console.log("end")
