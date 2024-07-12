
let obj = {
    name : 'Saurabh',
    age : 23 ,
    address : {
        city : "Noida",
        state : " UP "
    }
}

// let copyObj = obj ; // shallow copy 

// let copyObj = JSON.parse(JSON.stringify(obj)); // deep copy 

let copyObj = { ...obj };  // Combination shallow and deep copy 

  copyObj.address.city  = 99 ;

console.log("Og Object " , obj )

console.log("copyObj" , copyObj)

