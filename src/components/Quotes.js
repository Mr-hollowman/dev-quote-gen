import React from "react";

export default function Quotes({
  quoteText,
  quoteAuthor,
  quoteGenre,
  isAuthorPage,
  getRandomQuote,
}) {
  console.log(isAuthorPage, "author page");
  return (
    <div className="quote-container">
      <p className="quote">{quoteText}</p>
      {!isAuthorPage && (
        <div className="author" onClick={() => getRandomQuote(quoteAuthor)}>
          <div className="name-container">
            <span>{quoteAuthor}</span>
            <small>{quoteGenre}</small>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="white"
            className="bi bi-arrow-right"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
            />
          </svg>
        </div>
      )}
    </div>
  );
}
