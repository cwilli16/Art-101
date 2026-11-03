
/* THE SWAMP LANDS: JavaScript Data Layer */

// 1. A variable describing the environment
let environmentTitle = "The Swamp Lands";

let environmentMood = "mysterious, strange, and unpredictable";

// 2. An array listing elements of the environment
let environmentElements = [
    "thick swamp water",
    "twisted trees",
    "strange creatures",
    "hidden ruins",
    "unexplained noises"
];

// 3. An object describing the Gigglegoon
let mainCreature = {
    name: "Gigglegoon",
    type: "swamp ruler",
    mood: "unpredictable",
    habitat: "the deepest part of the swamp",
    isDangerous: true,
    favoritePlace: environmentElements[3]
};

// 4. An array of warnings
let swampWarnings = [
    "Do not trust every sound you hear.",
    "Some things in the water are not plants.",
    "The swamp does not always lead you where you expect."
];

// 5. A variable to count discoveries
let discoveryCount = 0;


// BUTTON 1: Reveal the environment title and mood
$("#title-button").click(function () {

    let message = "<h3>" + environmentTitle + "</h3>";

    message = message +
        "<p>The mood of this place is " + environmentMood + ".</p>";

    $("#environment-output").html(message);
});


// BUTTON 2: Reveal the environment elements
$("#elements-button").click(function () {

    let message = "<h3>Things Found in the Swamp</h3>";

    message = message + "<ul>";

    for (let i = 0; i < environmentElements.length; i++) {
        message = message + "<li>" + environmentElements[i] + "</li>";
    }

    message = message + "</ul>";

    $("#environment-output").html(message);
});


// BUTTON 3: Reveal information about the Gigglegoon
$("#creature-button").click(function () {

    let message = "<h3>" + mainCreature.name + "</h3>";

    message = message + "<p>Type: " + mainCreature.type + "</p>";

    message = message + "<p>Mood: " + mainCreature.mood + "</p>";

    message = message + "<p>Habitat: " + mainCreature.habitat + "</p>";

    message = message + "<p>Favorite place: " +
        mainCreature.favoritePlace + "</p>";

    message = message + "<p>Dangerous: " +
        mainCreature.isDangerous + "</p>";

    $("#environment-output").html(message);
});


// BUTTON 4: Reveal a warning
$("#warning-button").click(function () {

    let randomPosition = Math.floor(
        Math.random() * swampWarnings.length
    );

    let currentWarning = swampWarnings[randomPosition];

    let message = "<h3>Swamp Warning</h3>";

    message = message + "<p>" + currentWarning + "</p>";

    $("#environment-output").html(message);
});


// BUTTON 5: Count discoveries
$("#discovery-button").click(function () {

    discoveryCount = discoveryCount + 1;

    let message = "<h3>Swamp Discoveries</h3>";

    message = message + "<p>You have explored " +
        discoveryCount + " times.</p>";

    message = message +
        "<p>The swamp reveals something new with every visit.</p>";

    $("#environment-output").html(message);

    console.log("Discoveries:", discoveryCount);
});


$("#tree-button").click(function () {

    let treeInfo = {
        name: "Swamp Tree",
        type: "native vegetation",
        location: "the swamp",
        condition: "old and weathered"
    };

    let message = "<h3>" + treeInfo.name + "</h3>";

    message += "<p>Type: " + treeInfo.type + "</p>";
    message += "<p>Location: " + treeInfo.location + "</p>";
    message += "<p>Condition: " + treeInfo.condition + "</p>";

    $("#environment-output").html(message);
});


// TASK 2 - FULL ENVIRONMENT DAY AND NIGHT

function changeEnvironment(timeOfDay) {

    if (timeOfDay == "day") {

        $("body").removeClass("night");
        $("body").addClass("day");

        $("#time-output").html(
            "<p>The sun rises over the Swamp Lands. " +
            "The trees become visible, the water reflects the sunlight, " +
            "and the Gigglegoon awakens.</p>"
        );

        $(".atmosphere-label").html("THE SWAMP AWAKES");

    }

    else if (timeOfDay == "night") {

        $("body").removeClass("day");
        $("body").addClass("night");

        $("#time-output").html(
            "<p>Night returns to the Swamp Lands. " +
            "The moon illuminates the water, shadows stretch across the trees, " +
            "and strange creatures begin to stir.</p>"
        );

        $(".atmosphere-label").html("THE WATERS REMEMBER");

    }

}

// DAY BUTTON
$("#day-button").click(function() {
    changeEnvironment("day");
});

// NIGHT BUTTON
$("#night-button").click(function() {
    changeEnvironment("night");
});