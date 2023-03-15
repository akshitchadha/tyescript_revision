//course : Mastering TypeScript - 2023 Edition

//https://www.udemy.com/course/learn-typescript/

// three basic type in javascript number string boolean
// any type only exsist in typescript
// all javascript code is type script code
let mynumber : number = 123;
const isenabled : boolean= true;
let generalthing :any =45;
generalthing ="hello";
generalthing()// use any data type where you want to defeat the typescript all together
// usage of any ex
let foundMovie :any;
const names :Array<string>= ["ram","sham","niharika vashist chadha"];
names.forEach(function(parmater,index,array)
{
      if ( parmater=="ram")  
      { 
               console.log(`AT ${index} the value is  ${parmater}`);
      }
}
);


function greet(person :string)
{
 //   person(); remove the comment and check the error since above type is declared as string
 // it would not allow the person to be called as function that is the power of declaring type 
    return `hi ${person}  nice to meet you `;
}

greet("niharika")

//greet(true); // greet would not boolean or number it will only take string  

const dosomething =(person :string ,age :number,isFunny :boolean)=>{

}


dosomething("niharika",123,false);



// giving default value to function parameters
function adding(number1 :number=1,number2 :number=2)
{


    console.log(number1+number2);
}

adding();


// defining data type of function return
function g(a:number,b:number) :string {

    return ""+a+b;
}



// defining data type of arrow function  return
const add=(x:number,y:number) :number =>{
    return 1;
}



// defining data type of arrow function  return  this can either return string or number
const add2=(x:number,y:number) :number |string =>{
    return 1;
}


//anonymous function
const colors :Array<string>=["1","2","4"];
colors.map((color :string)=>{color.toUpperCase});

// void data type is used with function that does not return any meaning value  because with void 
// also function return undefined or null to do transfer of control
function message(msg :string ) :void
{

}


// never data type is unique to typescript used with function that should never return any value 
// means used with a function that always through exception or afunction that continuosuly runs

// reason below function will never finish it execution as flow of control will be trnasfered as   
// soon as error statement is encountered
function message2(msg :string ) :never
{
   throw new Error(msg);
  
}


// or  function that never got finish executing it self example


function gmaeloop() :never
{


    while(true)
    {

        console.log();
    }

    //return true;
}

