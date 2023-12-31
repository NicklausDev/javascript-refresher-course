 //object

 const product = {

    //properties and value

    name: 'Socks',
    price: 1090,
    'delivery-time': "1 Day",
    rating: {
        stars: 4.5,
        count: 87
    },
    fun: function function1() {
      //console.log('function inside object');  
    }
};

/*
console.log(product);
console.log(product.name);
console.log(product.price);
*/

//calling function

product.fun(); //this is a method (object + function)

//Accessing objects via Dot Notation
product.name = "Cotton Socks";
//console.log(product);

//Accessing objects via Bracket Notaion
//console.log(product['delivery-time']);

//Accessing nested objects
//console.log(product.rating.stars);

// add value
product.newProperty = true;
//console.log(product);

//delete value
delete product.newProperty;
//console.log(product);


//BUILT-IN OBJECTS
//*JSON and localStorage

//JSON Obj helps convert Javascript Obj to JSON

//Convert product object to JSON

//console.log (JSON.stringify(product));

//Convert JSON to product object

const objSytringify = JSON.stringify(product);
const objParsing = JSON.parse(objSytringify);

//console.log(objParsing);

//localStorage:

//values with properties and methods (Auto-Boxing)

console.log('hello'.length);
console.log('hello'.toUpperCase());

const object1 = {
    message: 'hello'
};

//Copy by Reference
const object2 = object1;

object1.message = "Good Job";
console.log(object2);

// Comparing variables

const object3 = {
    message: "Good job"
};

console.log(object3 === object1);
//returns false despite having same values since the variables are just a reference
console.log(object2 === object1);
//returns true since the variables are referencing the point to the same memory

//shortcuts

const object4 = {
    message: "Good job",
    price: 799
};

//!DESTRUCTURING

// const message = object4.message;
const { message, price } = object4;
//destructures the object by taking out the property of the message and saving it in the variable.
console.log(message);
console.log(price);

//!SHORTHAND PROPERTY

const object5 = {
   // message: message
    message
};

console.log(object5);

//!SHORTHAND METHOD

const object6 = {
   // message: message
    message,
    /* method: function functionM() {
        console.log('method');
    } */
    method() {
        console.log('method');
    }
};

console.log(object6);
object6.method();

//Remaking Rock Paper Scissors Game to further utilise objects

randombtn = document.querySelectorAll("button");
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

randombtn.forEach((button) => {
    button.addEventListener("click", function(){
        
        let myMove = this.id;

        if(this.id === 'Reset'){
            score.draws=0;
            score.losses=0;
            score.wins=0;
        }
        
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

//create an object

const testProduct = {
    name: 'basketball',
    price: 2095
};

testProductShow = document.getElementById('product');

testProductShow.innerHTML = `${testProduct.name} , ${testProduct.price}`;

//increase the price by 500

testProduct.price = testProduct.price + 500;

testProductPrice = document.getElementById('price');
testProductPrice.innerHTML = `${testProduct.price}`;

//using bracket notation add delivery-time

testProduct['delivery-time'] = "2 days";

testProductDelivery = document.getElementById('delivery');
testProductDelivery.innerHTML = `${testProduct.name} , ${testProduct.price}, ${testProduct['delivery-time']}`;

//compare price

testProductCompare = document.getElementById('cheaper');

const testProduct2 = {
    name: 'volleyball',
    price: 1450
};

function comparePrice() {
    if (testProduct.price < testProduct2.price) {
        result = testProduct.name;
    } else {
        result = testProduct2.name;
    }

     testProductCompare.innerHTML =`${result} is cheaper`;
}

comparePrice();