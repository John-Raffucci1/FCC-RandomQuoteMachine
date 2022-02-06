import "./QuoteWrapper.css";
import react from "react";

const QuoteWrapper = () => {
  const TwitterLink = `https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=%22The%20best%20revenge%20is%20massive%20success.%22%20Frank%20Sinatra`;

  const [quoteStore, setQuoteStore] = react.useState([]);

  const [quote, setQuote] = react.useState(
    "Nearly all men can stand adversity, but if you want to test a man's character, give him power."
  );
  const [author, setAuthor] = react.useState("Abraham Lincoln");

  const getQuoteData = async () => {
    const request = await fetch(
      "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
    );
    const response = await request.json();
    console.log(response);
    setQuoteStore(response.quotes);
  };

  const getRandomQuote = () => {
    const randomNumber = Math.floor(Math.random() * quoteStore.length);
    setAuthor(quoteStore[randomNumber].author);
    setQuote(quoteStore[randomNumber].quote);
  };

  react.useEffect(() => {
    getQuoteData();
  }, []);

  return (
    <wrapper id="quote-box">
      <div id="wrapper-div">
        <h1 id="text">{quote}</h1>
        <h2 id="author">- {author}</h2>
        <div id="button-wrapper">
          <a href={TwitterLink} target="_blank" id="tweet-quote">
            <img id="twitter-img" src="/Twitter.png" />
          </a>
          <button id="new-quote" onClick={getRandomQuote}>
            New Quote
          </button>
        </div>
      </div>
    </wrapper>
  );
};

export default QuoteWrapper;
