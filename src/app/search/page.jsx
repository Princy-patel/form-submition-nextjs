import React from "react";
import RestaurantCart from "./components/RestaurantCart";
import SideBar from "./components/SideBar";

function SearchPage() {
  return (
    <>
      <SideBar />
      <div className="w-5/6">
        <RestaurantCart />
      </div>
    </>
  );
}

export default SearchPage;
