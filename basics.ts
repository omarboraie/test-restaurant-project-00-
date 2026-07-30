function add(n1:number,n2:number,show:boolean,phrase:string){
    if(show){
    console.log(phrase + (n1 + n2));
    }else
        console.log("Nooo")
}

const number1 = 5;
const number2 = 9.2;
const phrase = "Adding is done :"
const showResult=true;
add(number1,number2,showResult,phrase);
