import Head from "next/head";
import Image from "next/image";
import localFont from "next/font/local";
import styles from "@/styles/Home.module.css";
import { Card } from "@/components/card/Card";
import { useEffect, useState } from "react";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

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

  console.log({cards})

  return (
    <>
      {cards.map(card => <Card {...card}/>)}
    </>
  );
}
