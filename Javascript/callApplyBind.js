function getDetails (gender , fit){
    console.log(this.name , this.age ,  gender  , fit  );
}

let obj1 = {
    name : "Saurabh",
    age : 24 ,
   
}

let obj2 = {
    name : "Aman",
    age : 43 
}

let fn = getDetails.bind(obj1 , 'male' , 'yes');

fn()

// call -- extra prameter are passed as (,) comma sepreated 
// apply -- extra pramater are passed as a array 
// bind -- it gives a the reference of resultant function and extra pramater are passed  as (,) comma sepreated 