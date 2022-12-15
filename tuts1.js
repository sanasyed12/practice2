// Chapter - 02 
// Problem - 01

/*let age = prompt("What is your age?")
age = Number.parseInt(age)
if(age<=10){
    console.log("You are below 10");
}
else if(age<15){
    console.log("You are below 15");
}
else{
    console.log("You are above 15");
} 
*/
// Problem - 02

const prompt = require("prompt-sync")({ sigint:true });
let age = prompt("What is your age?")
age = Number.parseInt(age)
switch (age) {
    case 12 :
        console.log("you are 12")
    case 18 :
        console.log("you are 18")
    default :
        console.log("your age is not special")
}
