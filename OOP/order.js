// function finalCalculator(userChoice){
//     let subtotal=0;
//     const tax= 0.14;
//     let total=0;
//     console.log("\nYour Order is")
//     userChoice.forEach((item) => console.log("item: "+ item.name + " | Price: " + item.price));
//     for(let i =0; i<userChoice.length;i++){
//         subtotal += userChoice[i].price; 
//     }; 
//     total = (subtotal*tax)+subtotal ;

//     console.log("\nWhat is Your Rate For Our Service : \nGood = 10$\nBad=0$\n");
//     let user_rate = "good";
    
//     function userRate(userRate)
//     {userRate==="good" ? total += 10 : total=total
//         return total
//     }
//     console.log("Your SubTotal =  " + subtotal.toFixed(2) + "\nYour Total After Adding Tip and Tax = " + userRate(user_rate).toFixed(2) + "\n" + new Date() );
//     return total;
// }
class Order {
    #items=[];
    #tax=0.14;
    subtotal=this.subtotal;
    total =this.total;
    addItem(item){
        this.#items.push(item);
    }

    removeItem(id){
        this.#items = this.#items.filter((item) => item.id != id )
    }
    getBill(){
        this.subtotal=0;
        this.total=0;
        console.log(`\nYour Order is`);
        this.#items.forEach((item) => {
            console.log("item: "+ item.name + " | Price: " + item.price);
            this.subtotal+=item.price;
        });
        this.total=(this.subtotal*this.#tax)+this.subtotal;
        console.log("Your SubTotal =  " + this.subtotal.toFixed(2) + "\nYour Total After Adding Tax = " + this.total.toFixed(2) + "\n" + new Date() );
    }

    resetOrder(){
        this.#items=[];
        console.log("Now You Can make new order. reset is done")
    }
}
// const newOrder = (function(){
//     let userChoice = [];
//     const tax = 0.14;
//     function bill(){
//         let subtotal=0;
//         let total=0;
//         console.log("\nYour Order is")
//         userChoice.forEach((item) => console.log("item: "+ item.name + " | Price: " + item.price));
//         for(let i =0; i<userChoice.length;i++){
//             subtotal += userChoice[i].price; 
//         };
//         total = (subtotal*tax)+subtotal ;
//         console.log("Your SubTotal =  " + subtotal.toFixed(2) + "\nYour Total After Adding Tax = " + total.toFixed(2) + "\n" + new Date() );
//         }
//     return {
//         addItem(item){
//             userChoice.push(item);
//         },
//         removeItem(item){
//             let n=userChoice.lastIndexOf(item);
//             userChoice.splice(n,1)
//         },
//         getBill(){bill()},
//         reset(){
//             userChoice=[];
//             console.log("Now You Can make new order. reset is done")
//         }
//     }
// })()


module.exports = Order;