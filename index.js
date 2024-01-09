// Function to roll the dice
function rollDice() {
    // Get the number of dice from the input field
    const numOfDice = document.getElementById("number-of-dice").value;

    // Get the elements to display the dice result
    const displayDice = document.getElementById("display-dice");
    const diceValue = document.getElementById("dice-value");

    // Call the function to generate random dice values
    generateRandomDice(numOfDice, displayDice, diceValue);
}

// Function to generate random dice values and display them
function generateRandomDice(numOfDice, displayDice, diceValue) {
    // Define constants for the minimum and maximum dice values, and an array to store dice images
    const minValue = 1, maxValue = 6, diceImages = [];

    // Variable to store the sum of dice values
    let sum = 0;

    // Generate random number for each dice
    for (let i = 0; i < numOfDice; i++) {
        const randomNumber = Math.floor((Math.random() * maxValue) + minValue);

        // Call a function to generate the dice image and add it to the array
        generateDiceImage(randomNumber, diceImages);

        // Add the current dice value to the sum
        sum += randomNumber;
    }

    // Display the generated dice images
    displayDice.innerHTML = diceImages.join("");

    // Display the total value of the dice thrown
    diceValue.textContent = `Total value of dice thrown: ${sum}`;
}

// Function to generate HTML for a dice image and add it to the array
function generateDiceImage(randomNumber, diceImages) {
    // Create HTML for the dice image and push it to the array
    let diceImage = `<img src="Dice-${randomNumber}.png">`;
    diceImages.push(diceImage);
}
