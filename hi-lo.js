var random=0; 
var count=0;


function randomNum(){
   random = Math.floor(Math.random()*100 +1); 
}

function guessNum(){
    var guess = document.getElementById("numInput").value;
    
    count++;
    document.getElementById("counter").innerHTML = count;
    document.getElementById("numInput").focus();
    document.getElementById("numInput").select();

    if(guess > random){
        document.getElementById("theIcon").className = "fas fa-arrow-down";
        document.body.style.backgroundColor = "red";
        document.getElementById("message").innerHTML = "Choose a number between 1 and "+ guess;
      
    }
    else if(guess < random){
        document.getElementById("theIcon").className = "fas fa-arrow-up";
        document.body.style.backgroundColor = "red";
        document.getElementById("message").innerHTML = "Choose a number between "+guess +" and 100";
    }
    else{
        document.getElementById("theIcon").className = "fas fa-check-circle";
        document.body.style.backgroundColor = "lightgreen";
        document.getElementById("theGuessing").style.display = "none";
        document.getElementById("congo").style.display = "block";
        document.getElementById("correctNum").innerHTML = random;
    }
}

