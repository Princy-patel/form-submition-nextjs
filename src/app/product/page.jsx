"use client";

import Image from "next/image";
import { useSearchParams } from "next/navigation";
import React from "react";
import { useEffect, useState } from "react";

function Users() {
  const [data, setData] = useState(null);
  const [search, setSearch] = useState("");


  useEffect(() => {
    const fetchData = async function () {
      const response = await fetch(
        `https://fakestoreapi.com/products?sort=${search}`
      );
      const result = await response.json();
      setData(result);
    };
    fetchData();
  }, [search]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Product Page</h1>
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-2 border border-grey-300 rounded-lg"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data?.map((item) => (
          <div
            key={item.id}
            className="max-w-sm cursor-pointer rounded-lg overflow-hidden shadow-md m-4 p-4 bg-white transition-transform transform hover:scale-105"
          >
            <Image
              src={item.image}
              alt={item.title}
              className="w-full h-48 object-cover mb-4"
              width={200}
              height={200}
            />
            <div className="py-2">
              <h4 className="text-sm text-gray-600">
                <span className="font-semibold">Product ID: </span>
                <span className="text-red-00">{item.id}</span>
              </h4>
              <h2 className="text-xl font-semibold ">{item.title}</h2>
              <h3 className="text-lg font-normal">${item.price.toFixed(2)}</h3>
              <p className="text-gray-800 mt-2 text-sm">{item.description}</p>
              <div className="mt-4">
                <h4 className="text-sm">
                  <span className="font-semibold">Category: </span>
                  <span className="text-gray-700">{item.category}</span>
                </h4>
                <h4 className="text-sm">
                  <span className="font-semibold">Rating: </span>
                  <span className="text-gray-700">
                    {item.rating.rate} ({item.rating.count} reviews)
                  </span>
                </h4>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Users;
