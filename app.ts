let userinput : unknown;
let userName : String;

userinput =5;
userinput = "Omar";
if(typeof userinput === "string"){
    userName = userinput;
}

function generateError(msg:string,code:number): never {
    throw {message:msg,statusCode:code};
}

generateError("Error Happend",500);