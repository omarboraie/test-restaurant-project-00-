// const person :object = {
//     name:"omar",
//     age:30
// }
//console.log(person.name) error access the name property 

// const person :{
// name:string;
// age:number;} = {
//     name:"omar",
//     age:30
// }
//console.log(person.name) it will work here after assign type of each property but still bad practice

const person = {
    name:"omar",
    age:30,
    hobbies : ["football","reading","movies"]
}
for(const hobbie of person.hobbies){
console.log(hobbie)}

enum Roles {Admin,Manager,Author}

const human : {
    name:string;
    age:number;
    role:[number,string];
    hobbies:string[] } = {
    name:"omar",
    age:30,
    role:[1,'leader'],
    hobbies : ["football","reading","movies"]
}

console.log(human.role)