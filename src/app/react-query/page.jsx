"use client";

import { fetchData } from "@/api";
import { useQuery } from "@tanstack/react-query";
import React, { useEffect } from "react";

function ReactQueryPage() {
  // useQuery: fetches and reads data (get requests) from an API and automatically caches the result
  // useMutation: used for creating, updating or deleting data (POST, PUT, DELETE requests) and allows triggering manual side effects. 
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchData,
    refetchOnMount: true,
  });

  if (isPending) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return (
      <div className="text-red-500">
        {error.message} || Something went wrong
      </div>
    );
  }

  return (
    <div>
      <ul>
        {data?.map((data) => (
          <li className="border p-2 my-2 border-red-500" key={data.id}>
            {data.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ReactQueryPage;
