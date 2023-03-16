// defining object in typescript

// passsing object as function argument 


function printName(person:{firstname:string,lastname:string }) :void 
{   

    console.log(`hello ${person.firstname} ${person.lastname}`)
}


printName ({firstname:"niharika",lastname:'chadha'});


// defining object defination pointed by a varible name 

let cordinate :{x:number ,y:number};

// cordinate={x:123,y:124};

// console.log(cordinate.x);


// giving defination to object which will be return by a function

// defining data type of function return
function g(person :{a:number,b:number}) :{x:number ,y:number} {

   return {x :123,y:45};
}




//  type alias :define a type in typescript and then pass it into function

type Person ={
firstname :string,
lastname: string,
}

function greeting (employee :Person) :Person
{

    employee.firstname="x";
    return employee;
}

//  ----------exe-----------------
let emp :Person ={
    firstname:"a",
    lastname: "b"
} 


let emp2 :Person=greeting (emp)

console.log(emp2.firstname);




type parentNames={

 mom:string
 dad:string
}



