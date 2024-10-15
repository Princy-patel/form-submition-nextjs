"use client";

import Link from "next/link";
import React from "react";
import useSWR from "swr";

function Person() {
  const fetcher = (url) => fetch(url).then((response) => response.json());

  const { data, error, isLoading } = useSWR(
    "https://jsonplaceholder.typicode.com/todos",
    fetcher
  );

  if (error) {
    return <div>Data failed to load</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {data?.map((item) => (
        <Link key={item.id} href={`/person/${item.id}`}>
          <li>{item.title}</li>
        </Link>
      ))}
    </div>
  );
}

export default Person;
