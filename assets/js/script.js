// TODO: Declare any global variables we need

/*


-Add variable for heads

-Add a variable for tails

-Add a varibale for total number of flips

-Add a button to flip coin

-Display Result of flip

-Count the number of heads

-Percentage of times on heads

-Count the number of Tails

-Percentage of times on Tails

-Clear all Results button
*/

let heads = 0;
let tails = 0;
let totalFlips = 0;

let coin = 'heads'

const flipButton = document.querySelector("#flip-button");
flipButton.addEventListener("click" , function(){
    console.log("Flip Button Clicked")
    if (coin === 'heads') {
        heads = heads + 1
    }
})

