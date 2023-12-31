function greeting() {
    //console.log('hello');
}

greeting();

const func1 = function() {
    //console.log('hello 2');
};

console.log(func1);

func1();

const obj1 = {
    num: 2,
    fun: function(){
       // console.log('hello-3');
    }
};

obj1.fun();

function display(param) {
    //console.log(param);
}

display(2);

function run(param) {
    param()
}

run( function() {
    //console.log('hello-4')
});

//!SECTION Practical Examples

setTimeout( function () {
   //console.log('Timed-out');
}, 3000);

//SECTION - ASYNCHRONOUS CODE

console.log('next line');

/* setInterval( function() {
    console.log('interval')
}, 3000);*/

//Looping Through an Array

[
    'make dinner',
    'wash dishes',
    'watch youtube'
].forEach(
    function(value, index) {

        if (value === 'wash dishes') {
           return; 
        }
        
        console.log(index);
        console.log(value);
    }
);

//!SECTION CLASS PROJECTS

//Modified Rock Paper Scissors game to further utilise what learnt in class

randombtn = document.querySelectorAll(".random");
output = document.getElementById("output");
output2 = document.getElementById("output2");
scoreline = document.getElementById("scoreline");

let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    draws: 0
} ;

function scorelinePrint () {
    scoreline.innerHTML=`
        Wins : ${score.wins}, Losses : ${score.losses},
        Draws : ${score.draws}`;
}

scorelinePrint();

/*
if (!score ## means ( === null )) {
   score = { 
    wins: 0,
    losses: 0,
    draws: 0
   }
}
*/

let autoPlayBtn = document.getElementById('AutoPlay');

autoPlayBtn.onclick = function () {
    autoPlay();
};

function autoPlay(computerMove) {
    setInterval(function() {
        const playerMove = ComputerMove = computerMove;
        playGame(playerMove);
    }, 1000);
}

randombtn.forEach((button) => {
    button.addEventListener("click", function(){
        
        let myMove = this.id;

        if(this.id === 'Reset'){
            score.draws=0;
            score.losses=0;
            score.wins=0;
        } else if (this.id === 'AutoPlay'){
            
        }
        
        pickComputerMove();
        playGame(myMove);
        
    });

    let autoPlayBtn = document.getElementById('AutoPlay');

    autoPlayBtn.onclick = function () {
        autoPlay();
    };

    let isAutoPlaying = false; 
    let intervalId; 

    document.body.addEventListener('keydown', (event) => {
        if (event.key === 'r') {
            playGame('Rock');
        } else if (event.key === 'p') {
            playGame('Paper');
        } else if (event.key === 's') {
            playGame('Scissors');
        }
    });

    function autoPlay(computerMove) {
       // const autoPlay = () => {  }


        if (!isAutoPlaying) {
            intervalId = setInterval(() => {
                const playerMove = pickComputerMove();
                playGame(playerMove);
            }, 1000);
            
            isAutoPlaying = true;

        } else {
            clearInterval(intervalId);
            isAutoPlaying = false;
        }
    }

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

        if (result ===  "You win!!!") {
            score.wins += 1;
        } else if (result === "You lose!!!") {
            score.losses +=1;
        } else if (result === "TIE!!!") {
            score.draws += 1;
        }

        localStorage.setItem(
            'score', JSON.stringify(score)
        );

        output.innerHTML = `${result}. You have picked ${myMove} and the Computer has picked ${computerMove}.`

        if (myMove === 'Reset') {
            output.innerHTML = "Scores Have Been Reset"   
        };

        scorelinePrint();
    }    

});


//!SECTION  ADVANCED 2ND CLASS


const regularFunction = function(param, param2) {
    console.log('hi');

    return 5;
}

const arrowFunction = (param, param2) => {
    console.log('hello');

    return 6;
}
arrowFunction();
regularFunction();

const oneParam = param => {
   console.log(param + 1); 
};
oneParam(25);

const oneLine = () => 2 + 3;
console.log(oneLine());

const object2 = {
    method: () => {

    },
    method() {}
}

const btnElement = document.querySelector('.clickable');

const eventListener = () => {
    btnElement.innerHTML = "Clicked";
}

btnElement.addEventListener('click', eventListener);

btnElement.removeEventListener('click', eventListener );

btnElement.addEventListener('click', () => {
    console.log("Clicked");
});

//!SECTION FILTER ARRAY METHOD

console.log([1, -3, 5].filter((value, index) => {

    /*
    if (value >= 0) {
        return true;
    } else {
        return false;
    }
    */

    return value >= 0;
}));

//!SECTION  MAP ARRAY METHOD

console.log([1, 1, 3].map((value, index) => {
    return value * 2;
}));

console.log([1, 1, 3].map(value => value * 2 ));

//SECTION - END