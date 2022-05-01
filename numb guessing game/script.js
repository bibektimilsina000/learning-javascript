let numb =Math.floor( Math.random()*10)+1;



document.getElementById("button").onclick=function(){
    guess = document.getElementById("input").value;
    let intguess = parseInt(guess,10);

    if (numb == intguess) {


        
        window.alert("congrats you win");
        
    }else if(numb<intguess){
        window.alert("inter smaller number")
    }
    
    else{
        window.alert("enter larger number");
        
    }
}