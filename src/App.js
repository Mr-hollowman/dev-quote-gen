import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Quotes from "./components/Quotes";
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
      {data && data.map((item)=><Quotes quoteAuthor={item.quoteAuthor} quoteGenre={item.quoteGenre} quoteText={item.quoteText} />)}
    </div>
  );
}
