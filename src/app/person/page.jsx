"use client";

import { useData } from "@/context/DataContext";
import Link from "next/link";
import React, { useEffect } from "react";
import useSWR, { mutate } from "swr";

function Person() {
  const { setData } = useData();
  const fetcher = (url) => fetch(url).then((response) => response.json());

  const { data, error, isLoading } = useSWR(
    "https://jsonplaceholder.typicode.com/todos",
    fetcher
    // call the API every 1000ms
    // { refreshInterval: 1000 }
  );

  useEffect(() => {
    if (data) {
      setData(data);
    }
  }, [data, setData]);

  if (error) {
    return <div>Data failed to load</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  // call on every click
  const handleMutate = () => {
    mutate("https://jsonplaceholder.typicode.com/todos");
  };

  return (
    <div>
      <button
        onClick={handleMutate}
        className=" bg-[#DC2626] text-white p-1 px-4 rounded"
      >
        Fetch
      </button>

      {data?.map((item) => (
        <Link key={item.id} href={`/person/${item.id}`}>
          <li>{item.title}</li>
        </Link>
      ))}
    </div>
  );
}

export default Person;
