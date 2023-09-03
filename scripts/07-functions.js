function function1() {
    showText = document.getElementById('show-text');

    showText.innerHTML = "3";
};

//return statements : These get value OUT of a function

function returner() {
    showText2 = document.getElementById('show-text2');


    return (
        showText2.innerHTML ="4"
    );      

};

function1(); 

returner();

   const additionScope = function1() + returner(); 
   //should return undefined and 4;
   showText3 = document.getElementById('show-text3');

    showText3.innerHTML = additionScope;

//parameters: These put values INTO a function

    function calcTax (cost, taxPercent = 0.1) {
        console.log (cost * taxPercent)
    }

    calcTax(2000, 0.2);
    calcTax(7000);
    
//Remaking Rock Paper Scissors Game to further utilise functions

randombtn = document.querySelectorAll("button");
output = document.getElementById("output");
output2 = document.getElementById("output2");

randombtn.forEach((button) => {
    button.addEventListener("click", function(){
        
        let myMove = this.id;
        
        pickComputerMove();
        playGame(myMove);
        
    });

    function pickComputerMove() {
        const randomNumber = Math.random();
        let computerMove = '';

        if(randomNumber >= 0 && randomNumber < 1/3){
            computerMove = "Rock";
        } else if (randomNumber >= 1/3 && randomNumber < 2/3){
            computerMove = "Paper";
        }else if (randomNumber >= 2/3 && randomNumber <= 1 ){
            computerMove = "Scissors";
        }

        return computerMove;
    }

    function playGame ( myMove) { 
        computerMove = pickComputerMove();
        result = '';

        if (computerMove === myMove) {
                result = "TIE!!!"
        } else if (computerMove === 'Rock') {
            if (myMove === 'Paper') {
                result = "You win!!!" 
            }else if (myMove === 'Scissors') {
                result = "You lose!!!"
            }
        } else if (computerMove === 'Paper') {
            if (myMove === 'Scissors') {
                result = "You win!!!" 
            }else if (myMove === 'Rock') {
                result = "You lose!!!"
            }
        } else if (computerMove === 'Scissors') {
            if (myMove === 'Rock') {
                result = "You win!!!" 
            }else if (myMove === 'Paper') {
                result = "You lose!!!"
            }
        }

        output.innerHTML = result + " You have picked " + myMove + " and the Computer has picked " + computerMove;
    }    

});