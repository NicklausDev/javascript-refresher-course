let three = 3;
        let calculation = 2 + 2;
        // console.log (calculation + three);

        let result = calculation + 2;
        //console.log (result);

        let message = "Hello Mate, Refreshing on JS I see";
        //console.log(message);

        three = 6;
        /* console.log (three)

        That just reassigned it, ha. 
        NB: Don't use let*/

        three = three + calculation;
        //console.log(three);

        //simple cart application to showcase JS variable manipulation

        let cart = 0;
        const counter = document.getElementById("counter");

        let show = document.getElementById("show");
        show.onclick = function(){
           //console.log("cart quantity:"+cart);
           counter.innerHTML = "cart quantity: "+cart;
        }

        let add = document.getElementById("add");
        add.onclick = function(){
            cart++; //(Same as beneath)
            /* similarly (cart--) subtracts one 
                (-= 2) subtracts 2 and reassignes the value
                (*= 2) multiplies 2 and reassignes the value
                (/= 2) divides 2 and reassignes the value
            */
            //cart += 1; (Same as beneath)
            //cart = cart + 1;
            // console.log("cart quantity:"+cart);
           counter.innerHTML = "cart quantity: "+cart;
        }

        let two = document.getElementById("two");
        two.addEventListener("click", function (){
            cart += 2;
            //cart = cart + 2;
            //console.log("cart quantity:"+cart);
            counter.innerHTML = "cart quantity: "+cart;
        });

        let triple = document.getElementById("triple");
        triple.addEventListener("click", function(){
            cart += 3;
            //cart = cart + 3;
            //console.log("cart quantity:"+cart);
            counter.innerHTML = "cart quantity: "+cart;
        });

        let reset = document.getElementById("reset")
        reset.addEventListener("click", function(){
            cart = cart - cart;
            //console.log("cart quantity:"+cart);
            counter.innerHTML = "cart quantity:"+cart;
        });

        // Three ways to create variables

        //let (allows change of value later)
        let nick = "Nicklaus";

        //const (doesn't allow change of value later)
        const age = 21;

        //var (has issues so we rarely use it in new js code)
        var birthDate = 2001;