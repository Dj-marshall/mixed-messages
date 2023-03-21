// main function

let t = 1; // to be removed when completed 

const getMyQuotes = () => {
  console.log(`Today the weather will be ${weather}.`);
  console.log(quote());
  console.log(`Your task for today is to ${t}`);
  console.log("Todays lucky number is " + luckyNumber());
}

// random number (re-useable function)

const ranNum = (length) => {
  return Math.floor(Math.random() * length);
}

// weather (switch statement)

let weatherNum = ranNum(4);
let weather = "";

switch (weatherNum) {
  case 0 : 
    weather = "raining";
  break;
  case 1 :
    weather = "sunny";
  break;
  case 2 :
    weather = "windy";
  break;
  case 4 :
    weather = "snowing";
  break;
  default :
    weather = "clear";
}

// quote (loop array)
const quote = () => {

const quotes = ["Believe you can and you're halfway there.",
"Success is not final, failure is not fatal: it is the courage to continue that counts.",
"Don't watch the clock; do what it does. Keep going.",
"You are never too old to set another goal or to dream a new dream.",
"The only way to do great work is to love what you do.",
"Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
"The only person you are destined to become is the person you decide to be.",
"Happiness is not something ready-made. It comes from your own actions.",
"Success is liking yourself, liking what you do, and liking how you do it.",
"The best way to predict the future is to create it."]

return (quotes[ranNum(quotes.length)]);
}
// task (loop object)

// number (function)

function luckyNumber () {
  return Math.floor(Math.random() * 10);
}




getMyQuotes();