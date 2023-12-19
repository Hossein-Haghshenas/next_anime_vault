"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
// api handler function
import { fetchAnime } from "@/app/action";
// anime card and anime type
import AnimeCard, { AnimeProp } from "./AnimeCard";

const LoadMore = () => {
  const [data, setData] = useState<AnimeProp[]>([]);
  const [page, setPage] = useState(2);

  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      fetchAnime(page).then((res) => {
        setPage((prev) => ++prev);
        setData([...data, ...res]);
      });
    }
  }, [inView, page, data]);

  return (
    <>
      {/* anime card */}
      <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
        {data.map((item: AnimeProp, index: number) => (
          <AnimeCard key={item.id} anime={item} index={index} />
        ))}
      </section>

      {/* spinner */}
      <section className="flex justify-center items-center w-full">
        <div ref={ref}>
          <Image src="./spinner.svg" alt="spinner" width={56} height={56} className="object-contain" />
        </div>
      </section>
    </>
  );
};

export default LoadMore;
