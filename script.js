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

const wordElement = document.getElementById("word");
const textElement = document.getElementById("inputText");
const timeElement = document.getElementById("time");
const scoreElement = document.getElementById("score");

// Init word
wordElement.innerHTML =
  wordList[Math.floor(Math.random() * wordList.length)].toLowerCase();
let initTime = 0;
let time;
let correctWords = 0;
let incorrectWords = 0;
textElement.addEventListener("input", (e) => {
  if (initTime === 0) {
    initTime = new Date();
  }
  const timing = setInterval(() => {
    time = Math.floor((new Date() - initTime) / 1000);
    timeElement.innerHTML = `Time remains ${60 - time} second`;
  }, 1000);

  if (time >= 60) {
    alert("Game Over");
    e.target.setAttribute("disabled", "disabled");
    e.target.value = "";
    scoreElement.innerHTML = `Your typing speed is ${correctWords} WPM`;
    clearInterval(timing);
    return;
  }
});

textElement.addEventListener("keydown", (e) => {
  if (e.key === " " || e.key === "Enter") {
    if (textElement.value.trim() === wordElement.innerHTML) {
      correctWords++;
    } else {
      incorrectWords++;
    }
    wordElement.innerHTML =
      wordList[Math.floor(Math.random() * wordList.length)].toLowerCase();
    textElement.value = "";
  }
});
