import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import React from "react";
import RestaurantNavbar from "../components/RestaurantNavbar";
import RestaurantTitle from "../components/RestaurantTitle";
import RestaurantRating from "../components/RestaurantRating";
import RestaurantDescription from "../components/RestaurantDescription";
import RestaurantImage from "../components/RestaurantImage";
import RestaurantCard from "../components/RestaurantCard";

function RestaurantDetailsPage() {
  return (
    <main className="bg-gray-100 min-h-screen w-screen">
      <main className="max-w-screen-2xl m-auto bg-white">
        <Navbar />
        <Header />
        <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11">
          <div className="bg-white w-[70%] rounded p-3 shadow">
            <RestaurantNavbar />
            <RestaurantTitle />
            <RestaurantRating />
            <RestaurantDescription />
            <RestaurantImage />
            <div>
              <h1 className="font-bold text-3xl mt-10 mb-7 borber-b pb-5">
                What 100 people are saying
              </h1>
              <div>
                <RestaurantCard />
              </div>
            </div>
          </div>
          <div className="w-[27%] relative text-reg">
            <div className="fixed w-[15%] bg-white rounded p-3 shadow">
              <div className="text-center border-b pb-2 font-bold">
                <h4 className="mr-7 text-lg">Make a Reservation</h4>
              </div>
              <div className="my-3 flex flex-col">
                <label htmlFor="">Party size</label>
                <select name="" className="py-3 border-b font-light" id="">
                  <option value="">1 person</option>
                  <option value="">2 people</option>
                </select>
              </div>
              <div className="flex justify-between">
                <div className="flex flex-col w-[48%]">
                  <label htmlFor="">Date</label>
                  <input
                    type="text"
                    className="py-3 border-b font-light w-28"
                  />
                </div>
                <div className="flex flex-col w-[48%]">
                  <label htmlFor="">Time</label>
                  <select name="" id="" className="py-3 border-b font-light">
                    <option value="">7:30 AM</option>
                    <option value="">9:30 AM</option>
                  </select>
                </div>
              </div>
              <div className="mt-5">
                <button className="bg-red-600 rounded w-full px-4 text-white font-bold h-16">
                  Find a Time
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </main>
  );
}

export default RestaurantDetailsPage;
