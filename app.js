let menu=require('./menu.js');
let finalCalculator=require('./calculations.js')

// function that Display menu for the user
function menuDisplay(){
    console.log("Hello Our User \n");
    for(let i = 0 ; i<menu.length;i++){
        switch(menu[i].category){
            case "starch":
                if(i===0){console.log("Let's choose starch :");}
                console.log(`for ${menu[i].name} choose ${menu[i].id}`);
                break;
            case "protein":
                if(i===3){console.log("\nLet's choose protein :");}
                console.log(`for ${menu[i].name} choose ${menu[i].id}`);
                break;
            case "sweetdish":
                if(i===6){console.log("\nLet's choose sweetdish :");}
                console.log(`for ${menu[i].name} choose ${menu[i].id}`);
                break;
        }
    }

}

//The logic (main function)
function App(){
menuDisplay();
let userChoice = [menu[1],menu[3],menu[7]];
try{
    finalCalculator(userChoice);
}
catch(error){console.log()}
}

//run
App();
