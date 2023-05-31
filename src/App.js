import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
export default function App() {
  const [data, setData] = useState(false);
  const [error, setError] = useState(null);
  const getRandomQuote = () => {
    axios("https://quote-garden.onrender.com/api/v3/quotes/random")
      .then((res) => setData(res.data.data))
      .catch((err) => setError(err.message));
  };
  useEffect(() => {
    getRandomQuote();
  }, []);
  console.log(data);
  return (
    <div className="app-container">
      <div className="quote-container">
        <div className="quote">{data && data[0].quoteText}</div>
      </div>
    </div>
  );
}
