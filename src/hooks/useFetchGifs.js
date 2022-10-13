import { useEffect, useState } from "react";
// const API_KEY = import.meta.env.VITE_APY_KEY;
const API_KEY = 'weN6bJr6wq0BYTuTXHjgUwroXq22xSVz';


export const useFetchGifs = (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&limit=10&q=${category}`;
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then(({ data }) => {
        setLoading(false);
        setData(data);
      });
  }, []);

  return (
    {
      isLoading,
      data
    }
  )
}
