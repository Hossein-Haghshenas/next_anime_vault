"use server";

export const fetchAnime = async (page: number) => {
  // fetch data from api
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}?page=${page}&limit=8&order=popularity`);
  const data = await res.json();
  return data;
};
