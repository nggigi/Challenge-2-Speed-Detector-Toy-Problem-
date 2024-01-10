let messageEl= document.getElementById("message-el")
let speedEl= document.getElementById("speed-el")


function carSpeed(){
    let speedValue=speedEl.value
    let demeritPoints =Math.floor((speedValue-70)/5)
    
    if(speedValue<70){
     messageEl.innerHTML="The Speed is Ok"
    } 
    else if (demeritPoints>=12){
        messageEl.innerHTML="license Suspended"
       }
       else{
        messageEl.innerHTML=demeritPoints 
    }
}
     
