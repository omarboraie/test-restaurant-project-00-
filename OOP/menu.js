//Class to init the menu
class menuItem {
    #rawPrice=this.price*0.5;
    constructor(name,price,id,category){
        this.name=name;
        this.price=price;
        this.id=id;
        this.category=category;
    }
    get rawPrice(){
        return this.#rawPrice;
    }
}
//the menu as an array of objects of the class menuItem
const menu = new Array();
menu.push(new menuItem("rice",20,1,"starch"));
menu.push(new menuItem("noodles",24,2,"starch"));
menu.push(new menuItem("vegetables",10,3,"starch"));
menu.push(new menuItem("Chicken",50,4,"protein"));
menu.push(new menuItem("meat",65,5,"protein"));
menu.push(new menuItem("Fish",80,6,"protein"));
menu.push(new menuItem("rice with Milk",7.5,7,"sweetdish"));    
menu.push(new menuItem("konafa",15,8,"sweetdish"));


module.exports = menu;