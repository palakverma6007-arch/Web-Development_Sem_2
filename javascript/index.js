var num=10;
console.log(num);
console.log(typeof(num));
num=false;
console.log(num);
console.log(typeof(num));
num=null
console.log(num);
console.log(typeof(num));
// function
var sayhello=function(){
    alert("hello world");
}
// object
var person={
    name:"Barack",
    age:"51",
    title:"44th President of USA"
}
// Symbol type
const sym1 = Symbol(4)
console.log(sym1);
const sym2 = Symbol(4);
console.log(sym2);
if(sym1==sym2){
    console.log("true")
}
else{
    console.log("false")
}