import React, { useEffect, useState } from "react";
import axios from "axios";

//Dependecies
import { TwitterShareButton } from "react-twitter-embed";

//Components
import QuoteCard from "./QuoteCard";

let quotes;

export const Quotes = () => {
  const [randomQuote, setRandomQuote] = useState();

  const getRandomQuote = () => {
    setRandomQuote(quotes[Math.floor(Math.random() * quotes.length)]);
  };

  useEffect(() => {
    axios
      .get("https://favqs.com/api/quotes", {
        headers: {
          Authorization: "Bearer token=9115d6965de96743de5b2aef6f812957"
        }
      })
      .then(response => {
        quotes = response.data.quotes;

        getRandomQuote();
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="quote-card">
      {randomQuote ? (
        <QuoteCard quote={randomQuote.body} author={randomQuote.author} />
      ) : (
        <div />
      )}
      <button onClick={getRandomQuote}>New quote</button>
      <div className="twitter">
        <TwitterShareButton
          options={{ text: "#reactjs is awesome", via: "christina" }}
        />
      </div>
    </div>
  );
};
