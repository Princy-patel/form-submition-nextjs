import React from "react";
import RestaurantNavbar from "../components/RestaurantNavbar";
import MenuCard from "./components/MenuCard";

function RestaurantMenuPage() {
  return (
    <div className="bg-white w-[100%] rounded p-3 shadow">
      <RestaurantNavbar />
      <MenuCard />
    </div>
  );
}

export default RestaurantMenuPage;
