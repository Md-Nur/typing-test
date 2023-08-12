// all word list that used to generate random word
const wordList = [
  "Hello",
  "World",
  "Testing",
  "Typing",
  "Practice",
  "Exercise",
  "Speed",
  "Accuracy",
  "Challenge",
  "Keyboard",
  "Monitor",
  "Elephant",
  "Butterfly",
  "Sunshine",
  "Beautiful",
  "Happiness",
  "Difficulty",
  "Generate",
  "Language",
  "Mountain",
  "Delicious",
  "Friendship",
  "Adventure",
  "Knowledge",
  "Universe",
  "Tomorrow",
  "Yesterday",
  "Journey",
  "Serenity",
  "Reflection",
  "Whimsical",
  "Celebrate",
  "Symphony",
  "Infinite",
  "Creation",
  "Ambition",
  "Wonder",
  "Enthusiasm",
  "Resilience",
  "Vibrant",
  "Innovation",
  "Passion",
  "Courage",
  "Blossom",
  "Inspiration",
  "Dream",
  "Harmony",
  "Serendipity",
  "Perspective",
  "Brilliant",
  "Opportunity",
  "Captivating",
  "Genuine",
  "Prosperity",
  "Radiant",
  "Tranquil",
  "Vibrant",
  "Exquisite",
  "Delightful",
  "Eloquent",
  "Freedom",
  "Gratitude",
  "Imagination",
  "Journey",
  "Kindness",
  "Laughter",
  "Motivation",
  "Nature",
  "Optimism",
  "Patience",
  "Quaint",
  "Radiate",
  "Spirit",
  "Thrive",
  "Unity",
  "Vision",
  "Wisdom",
  "Xenial",
  "Yearning",
  "Zeal",
  "Authentic",
  "Bliss",
  "Compassion",
  "Diversity",
  "Effervescent",
  "Flourish",
  "Graceful",
  "Humble",
  "Illuminate",
  "Jovial",
  "Kinship",
  "Luminous",
  "Majestic",
  "Nurture",
  "Oasis",
  "Precious",
  "Quixotic",
  "Radiant",
  "Stellar",
  "Tranquil",
  "The",
  "Quick",
  "Brown",
  "Fox",
  "Jumps",
  "Over",
  "Lazy",
  "Dog",
];

// Capture all the elements
const wordElement = document.getElementById("word");
const textElement = document.getElementById("inputText");
const timeElement = document.getElementById("time");
const scoreElement = document.getElementById("score");

// Initialize the variables
let initTime = 0;
let time;
let timing;
let correctWords = 0;
let incorrectWords = 0;

// Set the first word to start the test
wordElement.innerHTML =
  wordList[Math.floor(Math.random() * wordList.length)].toLowerCase();

// This function is called when the time is over and show the result to the user
const endGame = () => {
  alert("Game Over");
  textElement.value = "";

  //show the result to the user
  scoreElement.innerHTML = `Your typing speed is ${correctWords} WPM <br> Your accuracy is ${Math.floor(
    (correctWords / (correctWords + incorrectWords)) * 100
  )}% <br> correct words: ${correctWords} <br> incorrect words: ${incorrectWords}`;
  clearInterval(timing);
};


// This function count the correct and incorrect words
textElement.addEventListener("keydown", (e) => {
  if (initTime === 0) {
    initTime = new Date();
  }
  timing = setInterval(() => {
    time = Math.floor((new Date() - initTime) / 1000); // calculate the time in seconds
    if (time === 60) {
      // Chceck if the time is over
      endGame();
      timeElement.innerHTML = `Time Up!!`; // show the remaining time to the user in seconds
      return;
    } else if (time < 60) {
      timeElement.innerHTML = `Time remains ${60 - time} second`; // show the remaining time to the user in seconds
    }
  }, 1000);
  if (e.key === " " || e.key === "Enter") {
    if (textElement.value.trim() === wordElement.innerHTML) {
      // check if the word is correct
      correctWords++;
    } else {
      incorrectWords++; // if the word is incorrect
    }
    const newWord =
      wordList[Math.floor(Math.random() * wordList.length)].toLowerCase();
    wordElement.innerHTML = newWord;
    textElement.value = "";
  }
});
