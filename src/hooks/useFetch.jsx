import { useEffect, useState } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);

  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setIsPending(true);
      try {
        const req = await fetch(url);
        if (!req.ok) {
          throw new Error("Something went wrong..");
        }
        const data = await req.json();
        setData(data);
        setError(null);
        setIsPending(false);
      } catch (err) {
        console.log(err.message);
        setError(err.message);
        setIsPending(false);
      }
    };
    getData();
  }, [url]);
  return { data, isPending, error };
}

export { useFetch };
