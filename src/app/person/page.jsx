"use client";

import Link from "next/link";
import React from "react";
import { useEffect, useState } from "react";

function Person() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async function () {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );
      const result = await response.json();
      setData(result);
    };

    fetchData();
  }, []);

  return (
    <div>
      {data &&
        data.map((item) => (
          <Link key={item.id} href={`/person/${item.id}`}>
            <li>{item.title}</li>
          </Link>
        ))}
    </div>
  );
}

export default Person;
