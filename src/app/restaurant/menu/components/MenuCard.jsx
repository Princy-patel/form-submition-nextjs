import React from "react";

function MenuCard() {
  return (
    <main className="bg-white mt-5">
      <div>
        <div className="mt-4 pb-1 mb-1">
          <h1 className="font-bold text-4xl">Menu</h1>
        </div>
        <div className="flex flex-wrap justify-between">
          <div className=" border rounded p-3 w-[49%] mb-3">
            <h3 className="font-bold text-lg">Surf and Turf</h3>
            <p className="font-light mt-1 text-sm">
              A well done steak with lobster and rice
            </p>
            <p className="mt-7">$80.00</p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default MenuCard;
