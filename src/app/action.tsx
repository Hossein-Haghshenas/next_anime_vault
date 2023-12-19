"use server";

import AnimeCard, { AnimeProp } from "@/components/AnimeCard";

export const fetchAnime = async (page: number) => {
  // fetch data from api
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}?page=${page}&limit=8&order=popularity`);
  const data = await res.json();
  return data.map((item: AnimeProp, index: number) => <AnimeCard key={item.id} anime={item} index={index} />);
};
