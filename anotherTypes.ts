
type combinable = number | string;
type combinableTypes =  "as-number" | "as-text";
function combine(input1:combinable, input2:combinable , conversion: combinableTypes ){
    let result;
    if(typeof input1 === 'number' && typeof input2 === "number" || conversion === "as-number"){
    result = +input1 + +input2;
    }else{
        result = String(input1)+String(input2);
    }
    // if(conversion === "as-number")
    // {
    //     return +result
    // }else{
    //     return input1.toString() + input2.toString()
    // }
}

const combinedAges=combine(50,25,"as-text");
const combinedAges2=combine('30','25',"as-number");
const combinedNames=combine("Ahmed","Khaled","as-text");
console.log(combinedAges);
console.log(combinedAges2);
console.log(combinedNames);