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

    console.log("\nWhat is Your Rate For Our Service : \nGood = 10$\nBad=0$\n");
    let user_rate = "good";
    
    function userRate(userRate)
    {userRate==="good" ? total += 10 : total=total
        return total
    }
    console.log("Your SubTotal =  " + subtotal.toFixed(2) + "\nYour Total After Adding Tip and Tax = " + userRate(user_rate).toFixed(2) + "\n" + new Date() );
    return total;
}

module.exports = finalCalculator