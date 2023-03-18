type Point={
    x:number;
    y:number;
}


type Loc={
    lat :number;
    long:number;
}

let cordinates :Point | Loc ={
    x:1,
    y:2,
}


cordinates ={lat :20, long:50};


function calcualteTax(price :number |string ,tax :number) :void {

    if (typeof price  ==="string")
    {
        price.replace("$","r");
    }
     else
    {

        price * tax;
    }

}


// arrays and union
const cordinatess : Array<string|number > =[1234,"one","three",4];


const newarray : (number|string) []=[1234,"one","three",4];


const cord : Array<Point|Loc > =[{x:1,y:23},{long:23,lat:34}];


// literal types
function enterYourAnswer(answer : "yes" | "YES" |"no" |"NO") :void
{

    console.log(`the correct answer is : ${answer}`);

}


// creating enum or constant using union and type

type weekOfDay = "MONDAY" | "TUESDAY" |"WEDNESDAY" |"THURSDAY" |"FRIDAY" |"SATURDAY" |"SUNDAY" ;

const day :weekOfDay ="FRIDAY";




