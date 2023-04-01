import React, { useState } from "react";

export default function Quote() {
  const [quote, setQuote] = useState('This element will change!');
  const [timer, setTimer] = useState('');
  
  const getData = () => {
    fetch("https://type.fit/api/quotes") /* it's an arr of objects, turn it to json */
    .then(response => response.json())
    .then(data => {
      // console.log(data.length);
      let randomNum = Math.floor(Math.random() * data.length);
      setQuote(data[randomNum].text);
    })
  };
  return (
    <div className="quote-container">
      <h2>{quote}</h2>

      <button onClick={getData}>Click Me and Be Inspired!</button>
    
    </div>
  );
}

// quote works!