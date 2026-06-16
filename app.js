//Class to init the menu
class menuItem {
    constructor(name,price,id){
        this.name=name;
        this.price=price;
        this.id=id;
    }
}
//the menu as an array of objects of the class menuItem
const menu = [
    new menuItem("rice",20,1),
    new menuItem("noodles",24,2),
    new menuItem("vegetables",10,3),
    new menuItem("Chicken",50,4),
    new menuItem("meat",65,5),
    new menuItem("Fish",80,6),
    new menuItem("rice with Milk",7.5,7),
    new menuItem("konafa",15,8)
]
// function that Display menu for the user
function menuDisplay(){

    console.log("Let's choose starch \n");
    for(let i = 0;i<3;i++){
        console.log(`for ${menu[i].name} choose ${menu[i].id}`);
    }

    console.log("\nLet's choose protein \n");
    for(let i = 3;i<6;i++){
        console.log(`for ${menu[i].name} choose ${menu[i].id}`);
    }

    console.log("\nLet's choose sweetdish \n");
    for(let i = 6;i<8;i++){
        console.log(`for ${menu[i].name} choose ${menu[i].id}`);
        }
}
// the function that calculate the bill
function finalCalculator(userChoice){
    let subtotal=0;
    const tax= 0.14;
    let tip;
    let total=0;
    console.log("\nYour Order is")
    userChoice.forEach((item) => console.log("item: "+ item.name + " | Price: " + item.price));
    for(let i =0; i<userChoice.length;i++){
        subtotal += userChoice[i].price; 
    }; 
    total = (subtotal*tax)+subtotal ;

    console.log("\nWhat is Your Rate For Our Service : \nGood = 10$ \nexcellent=20$ \nBad=0$");
    let userRate = "good";
    
    if(userRate === "good"){
        total += 10
    }
    else if(userRate==="excellent"){
        total+=20
    }
    else{
        console.log("Sorry and We will do our best next time");
    }
    console.log("\nYour SubTotal =  " + subtotal.toFixed(2) + "\nYour Total After Adding Tip and Tax = " + total.toFixed(2));
}

//The logic (main function)
function App(){
console.log("Hello Our User \n");
menuDisplay();
let userChoice = [menu[1],menu[3],menu[7]];
finalCalculator(userChoice);
}

//run
App();
