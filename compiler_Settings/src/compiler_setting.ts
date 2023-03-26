// to compile the file use command tsc  abc.ts

// to enable watch mode use command  tsc -w abc.ts
// watch mode detect any changes in ts file and do auto compilation

// to include only particular folder that is to tell typescript only to compile particular folder items
// put include option of tsconfig

// in tsconfig json we mention that it should compile all files file present in source folder
// but we want to exclude donot touch file
// this can be done using exclude



//The default value of exclude option that is  in  ts config is that it excludes node
// modules by default but if we have a custom value  like we want a file that need to
// be excluded  example don't touch in that particular case we have to give our file name
// as well as again have to  mention the node modules  folder name if present in your project

// out dir tell where to put js files are compilation


// target tell which to which version of javascript code typescript code will compile to

interface chicken {

    breed :string;
    eggsPerWeek:number;
    name :string;
    age :number;
}


const norma :chicken={

    breed:"abc",
    eggsPerWeek:2,
    name:"xyz",
    age:7
}