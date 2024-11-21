"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useState, useEffect, useCallback } from "react";
import { debounce } from "lodash";

function Search() {
  const [data, setData] = useState(null);

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const getValue = searchParams.get("q");
    const fetchData = async () => {
      const response = await fetch(
        `https://api.duckduckgo.com/?q=${getValue}&format=json`
      );
      const result = await response.json();
      setData(result);
    };
    fetchData();
  }, [searchParams]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedSearch = useCallback(
    debounce((searchText) => {
      const params = new URLSearchParams(searchParams.toString());
      if (searchText) {
        params.set("q", searchText);
      } else {
        params.delete("q");
      }
      router.push(`${pathname}?${params.toString()}`);
    }, 1000),
    [searchParams, pathname, router]
  );

  const handleSearch = (searchText) => {
    debouncedSearch(searchText);
  };

  return (
    <div>
      <input
        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
        placeholder="Searching..."
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
        defaultValue={searchParams.get("q")?.toString()}
      />
      {data?.RelatedTopics.map((item, index) => {
        return (
          <div key={index} className="border border-blue-500">
            <h1 className="font-semibold">{item.Name}</h1>
            {item.Topics?.map((name, index) => (
              <li key={index}>{name.Text}</li>
            ))}
          </div>
        );
      })}
    </div>
  );
}

export default Search;
