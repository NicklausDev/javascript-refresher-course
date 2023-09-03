      //I prolly overdid this one in previous lessons to the point I don't know what I'll note down in this class; basically kept using my css in all other projects.

        //!CLASS PROJECTS

        //You-Tube Button

        ytb = document.querySelector('.you-tube');

        ytb.onclick = function () {

            if (ytb.innerText === "Subscribe"){
                ytb.innerText = "Subscribed";
                ytb.classList.add('red');
            } else if (ytb.innerText === "Subscribed") {
                ytb.innerText = "Subscribe";
                ytb.classList.remove('red')
            }
        };

        // Amazon Shopping Calculator
        
        calcPrice = document.getElementById('calc-btn');
        displayPrice = document.getElementById('display-price');
        liveDisplayPrice = document.getElementById('live-display-price');
        
        calcPrice.onclick = function () {
            totalPrice();
        }
        
        
        function totalPrice () {

            let textPrice = Number(document.querySelector('#text-area').value);

            if (textPrice < 40) {
                textPrice = textPrice + 10;
                displayPrice.innerText = `Total Cost for your Purchase = Ksh. ${textPrice.toFixed(2)}`;
            } else {
                displayPrice.innerText = `Total Cost for your Purchase = Ksh. ${textPrice.toFixed(2)}`
            }

        }

        function readkey () {
           if (event.key === "Enter") {
            totalPrice();
           } 
        }

        //window object

        window.document
        window.console
        window.alert

        //JS adds it everytime we access these objects

        function readinput () {
            let textPrice2 = Number(document.querySelector('#text-area2').value);

            liveDisplayPrice.innerHTML = `Total Cost for your Purchase = Ksh. ${(textPrice2 + 10).toFixed(2)}`;
        }
        //NOTE - Done with Test Exercise