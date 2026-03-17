function calculateResult(){
    let nos=document.getElementById("subject").value;
    let total =0;
    for(let i=1;i<=nos;i++){
        let marks =parseFloat(prompt("entermarks for subjects"+i));
        total=total+marks;
    }
    let average=total/nos;
    let grade;
    let result;
    if(average>=90){
        grade="A+";
    }
    else if(average>=75){
        grade="A";

    }
    else if(average>=60){
        grade="B";

    }
    else{
        grade="C";
    }
    if(average>=40){
        result="pass";
    }
    else{
        result="fail";
    }
    document.getElementById("result").innerHTML="Total:"+total+"<br>"+"average:"+average+"<br>"+"Grade:"+grade+"<br>"+
    "result:"+result;
    

}