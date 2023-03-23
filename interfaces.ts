// interface is shape of the object

interface Point {

    x: number;
    y: number;
}

const pt :Point ={x:1,y:12};


interface Person {

   readonly id:number
    first:string;
    last:string;
    nickname?:string;
    sayhi():string;
}


const thomas:Person={


    id :123,
    first:"thomas",
    last:"hardy",
    nickname :"TOm",
    sayhi:()=> {
        return "hello";
    }
}

// thomas.id=34; as id is read only



interface Product {
    name:string;
    price:number;
    applydiscount(discount :number):number;
}

const p1 :Product= {

    name: "jordans",
    price: 100,
    applydiscount(discount: number) {

        return this.price * discount;

    }
}
///// reopening an interface
interface dog {
    name:string,
    age :number,
}


interface dog {

    breed : string,
    bark():string,

}



// inheritance

interface ServiceDog extends dog{

    job:string,
}

const chiti :ServiceDog=
{
    name:"hammer",
    age:7,
    breed : "german shepherd",
    job :"i am a guard dog",
    bark() {
        return "woop"
    },
}



// mutliple inheritance

interface Humman {
    name:string,
}


interface employee {

    readonly id:number;
    email:string;
}


interface Engineer extends Humman,employee {
    level:string
    languages :string[];
}



const akshitchadha :Engineer ={

name:"akshit chadha",
id :12344,
email:'achadha1995@gmail.com',
level:"team lead",
languages : ["JAVA","typescript/javascript"]
};




