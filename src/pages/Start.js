import React, { useEffect, useState } from "react";
import { getQuote } from "./start/api/api";

export const Start = () => {
  const [quote, setQuete] = useState(0);
  // const [intervalId, setIntervalId] = useState();

  //   useEffect(() => {
  //     if (isMounted.current) {
  //       doSomething(data);
  //     } else {
  //       isMounted.current = true;
  //     }
  //   }, [data]);
  // }

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     fetchData();
  //   }, 5000);
  //   return () => clearInterval(intervalId);
  // }, [quote, setQuete]);

  const fetchData = async () => {
    try {
      const quote = await getQuote();
      setQuete(quote);
    } catch (e) {
      throw Error("e", e);
    }
  };
  let intervalId;
  function toggleInterval() {
    if (!intervalId) {
      intervalId = setInterval(() => {
        fetchData();
      }, 1000);
    }
  }

  function stopInterval() {
    clearInterval(intervalId);
    console.log("hello", intervalId);
    intervalId = null;
  }

  return (
    <div>
      <p>{quote.quoteAuthor}</p>
      <h2>"{quote.quoteText}"</h2>
      <button onClick={toggleInterval}>Start</button>
      <button onClick={stopInterval}>Stop</button>
    </div>
  );
};
