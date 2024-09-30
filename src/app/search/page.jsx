import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import React from "react";
import SearchBar from "./components/SearchBar";
import RestaurantCart from "./components/RestaurantCart";

function SearchPage() {
  return (
    <main className="bg-gray-100 min-h-screen w-screen">
      <main className="max-w-screen-2xl m-auto bg-white">
        <Navbar />
        <Header />
        <div className="flex py-4 m-auto w-2/3 justify-between items-start">
          <SearchBar />
          <div className="w-5/6">
            <RestaurantCart />
          </div>
        </div>
      </main>
    </main>
  );
}

export default SearchPage;
