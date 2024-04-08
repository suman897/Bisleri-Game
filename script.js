let timeLeft = 30; // Initial time limit
let intervalId;

function startGame() {
    var functionsArray = [countdown(4),gameMechanics]
    functionsArray.forEach(function(func,index) {
        setTimeout(func,(index) * 4500); // Execute each function after (index * 1000) milliseconds
        console.log('executed function')
    });
}

function countdown(number) {
    var countdownElement = document.getElementById("number1");
    countdownElement.textContent = number;
    document.getElementById("content").style.visibility = 'hidden';
    document.getElementById("countdown1").style.visibility = 'visible';
    document.getElementById("stopwatchContainer").style.visibility = 'visible';
    setTimeout(function() {
        number--;
        if (number >= 1) {
            triggerAnimation()
            countdown(number); // Recursive call to continue countdown
        } else {
            // Display "Start" after countdown completes
            setTimeout(function() {
                triggerAnimation()
                countdownElement.textContent = "Start";
            }, 10); // Delay before displaying "Start" (1000 milliseconds = 1 second)
        }
    }, 1000); // Delay between each number (1000 milliseconds = 1 second)
}

function gameMechanics(){
    document.getElementById("countdown1").style.visibility = 'hidden';
    document.getElementById("start-btn").disabled = true; // Disable start button
    intervalId = setInterval(updateTimer, 1000); // Start countdown timer
    document.addEventListener("keydown", fillBottle); // Listen for keyboard input
    if (timeLeft === -1 ) {
        clearInterval(intervalId); // Stop the timer when time runs out
        document.removeEventListener("keydown", fillBottle); // Remove event listener
        alert("Time's up! Game over.");
        document.getElementById("countdown").textContent = timeLeft+1;
    } else if (fillTop === bottleTop && timeLeft > 0){
        clearInterval(intervalId); // Stop the timer when time runs out
        document.removeEventListener("keydown", fillBottle); // Remove event listener
        document.getElementById("stopwatchContainer").style.visibility = 'hidden';
        document.getElementById("winnerContainer").style.visibility = 'visible';
        alert("Congratulations amit you won");
    }
}

function updateTimer() {
    timeLeft--;
    document.getElementById("countdown").textContent = timeLeft;
    if (timeLeft === -1 ) {
        clearInterval(intervalId); // Stop the timer when time runs out
        document.removeEventListener("keydown", fillBottle); // Remove event listener
        document.getElementById("countdown").textContent = timeLeft+1;
        document.getElementById("stopwatchContainer").style.visibility = 'hidden';
        document.getElementById("fill").style.visibility = 'hidden';
        document.getElementById("winnerContainer").style.visibility = 'visible';
        var userName = document.getElementById("userName").value;
        document.getElementById("greetingMessage").innerHTML = "Try Again " + userName;
        refreshPageAfterDelay()
    }
}

function fillBottle(event) {
    const fill = document.getElementById("fill");
    const bottleHeight = document.getElementById("bottle").offsetHeight;
    const bottleTop = document.getElementById("bottle").getBoundingClientRect().top;
    const fillTop = fill.getBoundingClientRect().top;
    const fillHeight = fill.offsetHeight;
    
    // Check if the top of the fill is within the bottle
    if (fillTop >= bottleTop) {
        fill.style.height = `${fillHeight + 1}px`; // Increase height gradually
    }

    if (fillTop === bottleTop && timeLeft > 0){ // MAIN WINNING PAGE CODE CONDITION
        clearInterval(intervalId); // Stop the timer when time runs out
        document.removeEventListener("keydown", fillBottle); // Remove event listener
        document.getElementById("stopwatchContainer").style.visibility = 'hidden';
        document.getElementById("fill").style.visibility = 'hidden';
        document.getElementById("winnerContainer").style.visibility = 'visible';
        var userName = document.getElementById("userName").value;
        document.getElementById("greetingMessage").innerHTML = "Congratulations!!! " + userName + " you won";
        refreshPageAfterDelay()
    }
}

// Function to refresh the page after 5 seconds
function refreshPageAfterDelay() {
    setTimeout(refreshPage, 5000); // Refresh after 5000 milliseconds (5 seconds)
}
// Function to refresh the page
function refreshPage() {
    location.reload();
}

function triggerAnimation() {
    var targetElement = document.getElementById("countdown1");
    targetElement.classList.remove("element"); // Remove the class to reset the animation
    void targetElement.offsetWidth; // Trigger reflow to restart the animation
    targetElement.classList.add("element"); // Add the class to start the animation
}

function stopAnimation() {
    var targetElement = document.getElementById("targetElement");
    targetElement.classList.remove("element"); // Remove the class to stop the animation
}