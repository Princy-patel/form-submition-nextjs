"use client";

import React, { useEffect, useState } from "react";

function AllBrands() {
  const [data, setData] = useState(null);
  const [image, setImage] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3000/data");
      const result = await response.json();
      setData(result);
    };

    fetchData();
  }, []);

  const addMoreProduct = async () => {
    const formData = new FormData();
    formData.append("product_name", "hello");
    formData.append("product_id", "P014"); // Ensure this ID is unique
    formData.append("description", "Hello Princy here");

    // Append image if it exists
    if (image) {
      formData.append("image", image);
    }

    try {
      const response = await fetch("http://localhost:3000/data", {
        method: "POST",
        body: formData, // No need to set Content-Type header
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const newProduct = await response.json();

      alert("Post request sent");
    } catch (error) {
      console.error("Error in post request:", error);
    }
  };

  return (
    <div>
      {data?.map((data) => {
        return (
          <div key={data.product_id}>
            <h1>
              <b className="text-red-500">Product Name: </b>
              {data.product_name}
            </h1>
            <h3>
              <p>
                <b className="text-red-500">Description: </b>
                {data.product_id}
              </p>
            </h3>
            <p>
              <b className="text-red-500">Description: </b>
              {data.description}
            </p>
            <br />
          </div>
        );
      })}

      <input
        type="file"
        name="image"
        id="image"
        onChange={(e) => setImage(e.target.files[0])}
      />
      <button onClick={addMoreProduct}>Add More</button>
    </div>
  );
}

export default AllBrands;
