import { Card } from "@/components/card/Card";
import { useEffect, useState } from "react";

export default function Home() {
  const [cards, setCards] = useState([])

  const page = 1;
  const limit = 1;

  useEffect(() => {
    const fetchCardData = async () => {
     try {
      const response = await fetch(`http://localhost:3000/api/dummy?page=${page}&limit=${limit}`); // http://localhost:3000/api/dummy?page=1&limit=1

      if (response.ok) {
        const foo = await response.json();
        setCards(foo.data); 
      } else {
        console.error('Failed to fetch data');
      }
     } catch (error) {
      console.log({error})
     }
    };

    fetchCardData();
  }, []);

  // console.log({cards})

  return (
    <>
      {cards.map(card => <Card {...card}/>)}
    </>
  );
}
