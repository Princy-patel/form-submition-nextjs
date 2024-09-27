"use client";

import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

function UserPage() {
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
      <h1>Title:{data && data.title}</h1>
      <h1>UserId:{data && data.userId}</h1>
    </div>
  );
}

export default UserPage;
