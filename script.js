const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const author = document.getElementById('author');
const telegramBtn = document.getElementById('telegram');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');
const quoteMark1 = document.getElementById('quote text')

// Show Loading
function loading() {
  quoteMark1.hidden = true;
  author.hidden = true;
  quoteText.hidden = true;
  loader.hidden = false;
}

// Hide Loading
function complete() {
    if (!loader.hidden) {
      quoteMark1.hidden = false;
  author.hidden = false;
  quoteText.hidden = false;
  loader.hidden = true;
    }
}


function newQuote()  {
  loading();

  // Pick  a random quote from Squotes
  const quote = stethemQuotes[Math.floor(Math.random() * stethemQuotes.length)];
  console.log(quote);
  // Reduse size of long quote

  //Show the quote
  quoteText.innerText  = quote.text;
  if(quote.text.length > 100) {quoteText.classList.add('long-quote')}
  else{
    quoteText.classList.remove('long-quote')
 //Stop Loader, Show Quote

  }
  complete();
}

// Send Telegram msg

function telegramQuote() {
  const tgquote = quoteText.innerText;
  const author = "Джейсон Стетхем"
  const telegramUrl = `https://t.me/nulevii`;
  window.open(telegramUrl, '_blank');
}


// Event listeners

newQuoteBtn.addEventListener('click', newQuote);
telegramBtn.addEventListener('click', telegramQuote);

newQuote();



