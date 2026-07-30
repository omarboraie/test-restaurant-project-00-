function add(n1:number,n2:number){
    return n1+n2;
}

function printValue(r:number):void{
    console.log("the result is = " + r);
}

printValue(add(5,7));

let combineNumbers : (a:number,b:number) => number;

combineNumbers=add;
// combineNumbers=5;
// combineNumbers=printValue;
printValue(combineNumbers(12,9));

function addAndHandle(n1:number,n2:number,cb:(r:number)=>void){
    const r=n1+n2;
    cb(r);
}

addAndHandle(31,37,(r)=>{
    console.log(r);
})