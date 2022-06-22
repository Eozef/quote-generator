import React, { useEffect, useRef, useState } from "react";
import { getQuote } from "./start/api/api";

export const Start = () => {
  const [quote, setQuete] = useState(0);
  const isMounted = useRef(false);


  useEffect(() => {
    if (isMounted.current) {
      doSomething(data);
    } else {
      isMounted.current = true;
    }
  }, [data]);
}

  useEffect(() => {
    const intervalId = setInterval(() => {
      fetchData();
    }, 5000);
    return () => clearInterval(intervalId);
  }, [quote, setQuete]);

  const fetchData = async () => {
    try {
      const quote = await getQuote();
      setQuete(quote);
    } catch (e) {
      throw Error("e", e);
    }
  };

  return (
    <div>
      <p>{quote.quoteAuthor}</p>
      <h2>"{quote.quoteText}"</h2>
      <button disabled={quote} onClick={fetchData}>
        New quote
      </button>
    </div>
  );
};
