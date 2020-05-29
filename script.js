const quotes = [
  {
    name:'Vijay',
    quote:'Tough times dont last, tough people do.'
  },
  {
    name:'Rajinikanth',
    quote:'Move in silence, only speak when its time to say checkmate.'
  }
  ,
  {
    name:'Ajith Kumar',
    quote:'Love your haters, theyre your biggest fans.'
  },
  {
    name:'Surya',
    quote:'Smiling is one of the good gestures.'
  }
  ,
  {
    name:'Danush',
    quote:'A smooth life has never made a strong person.'
  }

]

const quoteBtn = document.querySelector('#quoteBtn');
const quoteAuthor = document.querySelector
('#quoteAuthor');
const  quote = document.querySelector('#quote');

quoteBtn.addEventListener('click', displayQuote);

function displayQuote (){

let number = Math.floor(Math.random()*quotes.length);
quoteAuthor.innerHTML = quotes[number].name;
quote.innerHTML = quotes[number].quote;
}

// const simpleQuotes = [
//   {
//     name:'author number 2',
//     quote:'quote number 2' 
//   },
//   { 
//     name:'author number 2',
//     quote:'quote number 2'
//   }
// ]