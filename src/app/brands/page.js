import React from "react";

async function BrandPage() {
  const response = await fetch("http://localhost:3000/data", {
    cache: "no-store",
  });
  const result = await response.json();

  return (
    <div>
      {result.map((product) => {
        return (
          <div key={product.product_id}>
            <h1>
              <b className="text-red-500">Product Name: </b>
              {product.product_name}
            </h1>
            <h3>
              <p>
                <b className="text-red-500">Description: </b>
                {product.product_id}
              </p>
            </h3>
            <p>
              <b className="text-red-500">Description: </b>
              {product.description}
            </p>
            <br />
          </div>
        );
      })}
    </div>
  );
}

export default BrandPage;
