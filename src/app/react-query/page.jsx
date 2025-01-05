"use client";

import { fetchData } from "@/api";
import { useQuery } from "@tanstack/react-query";
import React, { useEffect } from "react";

function ReactQueryPage() {
  const { data } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchData,
  });

  return (
    <div>
      <ul>
        {data?.map((data) => (
          <li className="border p-2 my-2 border-red-500" key={data.id}>{data.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default ReactQueryPage;
