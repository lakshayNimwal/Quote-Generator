// github api: https://jacintodesign.github.io/quotes-api/data/quotes.json

let apiQuotes = [];

// show new quote
function newQuote() {
      // pick random quote from api array
      const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
      console.log(quote);
      
}

async function getQuotes(){
     const apiUrl = 'https:jacintodesign.github.io/quotes-api/data/quotes.json';
     try {
      const quoteResponse = await fetch(apiUrl); // data fetching done here;
      apiQuotes = await quoteResponse.json(); // converting quotes into array;
      // console.log(apiQuotes[0]);
      newQuote();
      
     } catch (error) {
      // console.log(error)
     }


}

// on load 
getQuotes();