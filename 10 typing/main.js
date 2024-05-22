// Array Of Words
const words = [
    "Hello",
    "Programming",
    "Code",
    "Javascript",
    "Town",
    "Country",
    "Testing",
    "Youtube",
    "Linkedin",
    "Twitter",
    "Github",
    "Leetcode",
    "Internet",
    "Python",
    "Scala",
    "Destructuring",
    "Paradigm",
    "Styling",
    "Cascade",
    "Documentation",
    "Coding",
    "Funny",
    "Working",
    "Dependencies",
    "Task",
    "Runner",
    "Roles",
    "Test",
    "Rust",
    "Playing"
];

  // Setting Levels
const lvls = {
    "Easy": 5,
    "Normal": 3,
    "Hard": 2
};
let defaultLevelName = "Normal"; // Change Level From Here
let defaultLevelSeconds =  lvls[defaultLevelName];
// Default Level
let levels = document.querySelectorAll(".levels .lvl");
function clearActive() {
    levels.forEach(function (ele) {
        ele.classList.remove("active");
    });
}
for (let i = 0, n = levels.length; i < n; i++) {
    let current = levels[i];
    current.addEventListener("click", function() {
        defaultLevelName = this.innerHTML;
        defaultLevelSeconds = lvls[defaultLevelName];
        lvlNameSpan.innerHTML = defaultLevelName;
        secondsSpan.innerHTML = defaultLevelSeconds;
        timeLeftSpan.innerHTML = defaultLevelSeconds;
        clearActive();
        this.classList.add("active");
    });
}

// Catch Selectors
let startButton = document.querySelector(".start");
let lvlNameSpan = document.querySelector(".message .lvl");
let secondsSpan = document.querySelector(".message .seconds");
let theWord = document.querySelector(".the-word");
let upcomingWords = document.querySelector(".upcoming-words");
let input = document.querySelector(".input");
let timeLeftSpan = document.querySelector(".time span");
let scoreGot = document.querySelector(".score .got");
let scoreTotal = document.querySelector(".score .total");
let finishMessage = document.querySelector(".finish");

// Setting Level Name + Seconds + Score
lvlNameSpan.innerHTML = defaultLevelName;
secondsSpan.innerHTML = defaultLevelSeconds;
timeLeftSpan.innerHTML = defaultLevelSeconds;
scoreTotal.innerHTML = words.length;

// Disable Paste Event
input.onpaste = function () {
return false;
}
  // Start Game
startButton.onclick = function () {
    this.remove();
    input.focus();
    // Generate Word Function
    document.querySelector('.levels').style.display = 'none';
    genWords();
}

function genWords() {
    // Get Random Word From Array
    let randomWord = words[Math.floor(Math.random() * words.length)];
    // Get Word Index
    let wordIndex = words.indexOf(randomWord);
    // Remove WordFrom Array
    words.splice(wordIndex, 1);
    // Show The Random Word
    theWord.innerHTML = randomWord;
    // Empty Upcoming Words
    upcomingWords.innerHTML = '';
    // Generate Words
    for (let i = 0; i < words.length; i++) {
        // Create Div Element
        let div = document.createElement("div");
        let txt = document.createTextNode(words[i]);
        div.appendChild(txt);
        upcomingWords.appendChild(div);
    }
    // Call Start Play Function
    startPlay();
}

function startPlay() {
    timeLeftSpan.innerHTML = defaultLevelSeconds;
    let start = setInterval(() => {
        timeLeftSpan.innerHTML--;
        if (timeLeftSpan.innerHTML === "0") {
            // Stop Timer
            clearInterval(start);
            // Compare Words
            if (theWord.innerHTML.toLowerCase() === input.value.toLowerCase()) {
            // Empty Input Field
            input.value = '';
            // Increase Score
            scoreGot.innerHTML++;
            if (words.length > 0) {
                // Call Generate Word Function
                genWords();
            } else {
                let span = document.createElement("span");
                span.className = 'good';
                let spanText = document.createTextNode("Congratz");
                span.appendChild(spanText);
                finishMessage.appendChild(span);
                // Remove Upcoming Words Box
                upcomingWords.remove();
            }
            } else {
                let span = document.createElement("span");
                span.className = 'bad';
                let spanText = document.createTextNode("Game Over");
                span.appendChild(spanText);
                finishMessage.appendChild(span);
            }
        }
    }, 1000);
};