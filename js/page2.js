document.getElementById("third-div-but").onclick = function(){
var x = document.getElementById("third-div");

if(x.style.display =="flex"){
x.style.display ="none";				
}		
else{
x.style.display ="flex";		
}		
}




document.getElementById("fourth-div-but").onclick = function(){
var x = document.getElementById("fourth-div");

if(x.style.display =="flex"){
x.style.display ="none";				
}		
else{
x.style.display ="flex";		
}		
}





/* use this function to go to any other page*/
function goto(x){
window.location = x;		
}

