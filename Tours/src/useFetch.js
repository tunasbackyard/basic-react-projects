import { useEffect } from "react";
import { useGlobalContext } from "./context";

const useFetch = (url) => {
  const { stopLoading, setData } = useGlobalContext();
  async function fetchData(url) {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
      stopLoading(false);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchData(url);
  }, [url]);
};

export default useFetch;
