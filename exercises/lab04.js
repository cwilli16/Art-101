
let count = 0;

// Information about my button creature
let buttonCreature = {
    name: "Wonton Fox",
    species: "Bladed quadrupedal",
    favoriteFood: "Non-picky carnivore",
    moods: [
        "sleepy",
        "agitated",
        "glowing",
        "angry",
        "excited",
        "chaotic"
    ]
};

// Run this code whenever the button is clicked
$("#needy-button").click(function () {

    // Count the clicks
    count = count + 1;

    // Find the position of the current mood
    let arrayPosition = count - 1;

    // Get a mood from the array inside the object
    let currentMood = buttonCreature.moods[arrayPosition];

    // Create a message using the stored data
    let message = "<p>You clicked me " + count + " times.</p>";

    message = message + "<p>My current mood is " + currentMood + ".</p>";
    message = message + "<p>My name is " + buttonCreature.name + ".</p>";
    message = message + "<p>I am a " + buttonCreature.species + ".</p>";
    message = message + "<p>My favorite food is " + buttonCreature.favoriteFood + ".</p>";

    // Display the message on the webpage
    $("#output").html(message);

    // Log the values in the browser console
    console.log(count);
    console.log(arrayPosition);
    console.log(currentMood);
});
