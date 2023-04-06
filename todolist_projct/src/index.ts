// npm init -y creates package.json

// const  btn=document.getElementById("btnn");
// function clicked():void{
//     alert("button clicked")
// }
//
// btn?.addEventListener("click",clicked);

// this ? mark operator first check return type of btn if  it  is null it will not call addEventlistener over it

// if not null then it will call event listener over it




// const  btn1=document.getElementById("btn")!;

// if i put not null asertion operator with button this tell type script , bro not worry you will find btn i will not be null
// it is a typescript operator " ! " if you used it , it tell typescipt to assume something even if it null to be not null
// so need to put  question mark ? operator when adding event listener


// function clickedd():void{
//     alert("button clicked")
// }
//
// btn1.addEventListener("click",clicked);
//




/*
* type assertion tell typescript to assert type of variable or object for a particular line instead of complaining
*
*/


// let mystery : unknown =4;
//
// const Lengthofmystrery=  (mystery as string) .length // for line 42 mystery will be treated as string


// different syntax for   
interface todo{

    text:string,
    isCompleted:boolean,

} 

const btn=document.getElementById("btn")! as HTMLButtonElement;
const input=document.getElementById("todoinput") ! as HTMLInputElement;
const  form =document.getElementById("todoform") ! as HTMLFormElement;
const list =document.getElementById("todolist") ! ;

const todoArray :Array<todo> =readTODos();

// btn.addEventListener("click",function () {
// alert(input.value);
// })


function readTODos():Array<todo>{
    const todoJson=localStorage.getItem("todos");
     if(todoJson===null)
     {
      return [];
     }
     return JSON.parse(todoJson);
  }



for (const [I,todoentry] of todoArray.entries())
{

    createTodoElement(todoentry);
}


form.addEventListener("submit",handlesubmit);


function handlesubmit(e: SubmitEvent){

    e.preventDefault();
    const textboxvalue=input.value;

    if(textboxvalue==='')
    {
     return;
    }
 const newTodotask:todo={
  text:textboxvalue,
  isCompleted:false,
 }

 todoArray.push(newTodotask);
 updatestorage();
 console.log(todoArray);
 createTodoElement(newTodotask);
     input.value="";

};

function createTodoElement(todoparameter:todo):void
{
    const newTOdo=todoparameter.text;
    const newLI=document.createElement("li");
    const checkbox=document.createElement("input");
    checkbox.type="checkbox";
    checkbox.checked=todoparameter.isCompleted;

    

    checkbox.addEventListener("change",function(){

         console.log("checked or unchecled")
        todoparameter.isCompleted=checkbox.checked
         updatestorage();

    })
    newLI.append(newTOdo);
    newLI.append(checkbox);
    list.append(newLI);
};

function updatestorage():void
{

    localStorage.setItem("todos", JSON.stringify(todoArray));

}

