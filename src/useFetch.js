import { useEffect, useState } from "react";

const useFetch = (url) => {
  //this is a custom hook, therefore it needs to start with use...
  //not a component?!?

  const [data, setData] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortContr = new AbortController();
    setTimeout(() => {
      fetch(url, { signal: abortContr.signal })
        .then((resp) => {
          if (!resp.ok) {
            throw Error("Could not fetch data");
          }
          return resp.json();
        })
        .then((dataFetch) => {
          setData(dataFetch);
          setLoaded(true);
          setError(null);
        })
        .catch((err) => {
          if (err.name === "AbortError") {
            console.log("Fetch aborted");
          } else {
            setLoaded(true);
            setError(err.message);
          }
        });
    }, 700);

    return () => abortContr.abort();
  }, [url]);

  return {
    //returning as object of my custom hook
    data,
    loaded,
    error,
  };
};

export default useFetch;
