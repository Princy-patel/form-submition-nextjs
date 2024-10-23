"use client";

import { useData } from "@/context/DataContext";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

function UserPage() {
  const { data: contextData } = useData();
  const { id } = useParams();

  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${id}`
      );
      const result = await response.json();

      setData(result);
    };

    fetchData();
  }, [id]);

  return (
    <div>
      <h1>Title:{data?.title}</h1>
      <h1>UserId:{data?.userId}</h1>

      {contextData?.map((item) => (
        <p key={item.id}>
          <li>{item.title}</li>
        </p>
      ))}
    </div>
  );
}

export default UserPage;
