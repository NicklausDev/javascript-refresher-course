//booleans basically state whether a value is true or false 

       //the double equals operator (==) converts what it checks to the same type

       //console.log(5 == "5.00");

       //will return [true] even though it checks integer and string
       //the triple equals operator (===) checks even type thus is more secure since it won't be as flawed
       
       //console.log(5 === "5.00");

       //will return [false]

       condition = document.getElementById("condition");
       age = document.getElementById("age");
       age2 = document.getElementById("age2");
       
       //if-else statement

       if (false) {
           condition.innerHTML = "Condition is True";
       } else {
           condition.innerHTML = "Condition is False";
       }

       // if-else statement to allow or deny user to drive

       const legalAge = 18;
       const almostAge = 10;

       if ( legalAge >= 18) {
           age.innerHTML = "You're Allowed to Drive";
       } else {
           age.innerHTML = "You're Still too young to Drive";
       }

       //updating on why we don't use var : it's because it doesn't follow scope;

       //nested if-else statement

       if ( almostAge >= 18) {
           age2.innerHTML = "You're Allowed to Drive";

       } else if( almostAge >= 16) {
           age2.innerHTML = "You're Allowed to Drive, But under Supervision";

       } else {
           age2.innerHTML = "You're Still too young to Drive";
       }


       //Rock Paper Scissors Game to further utilise if-statements

       randombtn = document.querySelectorAll("button");
       output = document.getElementById("output");
       output2 = document.getElementById("output2");

       randombtn.forEach((button) => {
           button.addEventListener("click", function(){

               let myMove = this.id;
               
               const randomNumber = Math.random();
               let computerMove = '';

               if(randomNumber >= 0 && randomNumber < 1/3){
                   computerMove = "Rock";
               } else if (randomNumber >= 1/3 && randomNumber < 2/3){
                   computerMove = "Paper";
               }else if (randomNumber >= 2/3 && randomNumber <= 1 ){
                   computerMove = "Scissors";
               }

               if (computerMove === myMove) {
                   output.innerHTML = "TIE!!! You have picked " + myMove + " and the Computer has picked " + computerMove;
               } else if (computerMove === 'Rock') {
                   if (myMove === 'Paper') {
                       output.innerHTML = "You win!!! You have picked Paper and the Computer has picked Rock" 
                   }else if (myMove === 'Scissors') {
                       output.innerHTML = "You lose!!! You have picked Scissors and the Computer has picked Rock"
                   }
               } else if (computerMove === 'Paper') {
                   if (myMove === 'Scissors') {
                       output.innerHTML = "You win!!! You have picked Scissors and the Computer has picked Paper" 
                   }else if (myMove === 'Rock') {
                       output.innerHTML = "You lose!!! You have picked Rock and the Computer has picked Paper"
                   }
               } else if (computerMove === 'Scissors') {
                   if (myMove === 'Rock') {
                       output.innerHTML = "You win!!! You have picked Rock and the Computer has picked Scissors" 
                   }else if (myMove === 'Paper') {
                       output.innerHTML = "You lose!!! You have picked Paper and the Computer has picked Rock"
                   }
               }
           });
       });

       /*
           truthy and falsy values

           Falsy Values in JS = false, 0, NaN (Not a Number), undefined (doesn't have a value), null
           with these the condition always returns false

       */

      /* 
           Ternary Operator (?:). This is an if-else shotcut 
           (? - if, : - else)
           Advantage is we can save a ternary op in a variable 
      */

      const result = true ? 'truthy' : 'falsy';
      bool = document.getElementById("boolean");
      bool.innerHTML = result;