import React from "react";

const QuoteCard = props => {
  return (
    <div>
      <h2>{props.quote}</h2>
      <h4> by {props.author}</h4>
    </div>
  );
};

export default QuoteCard;
