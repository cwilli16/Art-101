
// Create a function that asks the user to guess a number
function askNumber(whatNumber) {

    // Ask the user for a number
    let userNumber = prompt("Guess 1-10?");

    // Check if the user's answer is correct
    if (userNumber == whatNumber) {

        $("#output").html("You got it!");

    }

    // If the answer is incorrect
    else {

        $("#output").html("Noooooope");

    }
}


// Select the button and listen for a click
$("#good-button").click(function () {

    // Run the function with 5 as the correct answer
    askNumber(5);

});
