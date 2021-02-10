import React from "react";
import snkr1 from "./image/shoe1.png";
import snkr2 from "./image/shoe2.png";
import snkr3 from "./image/shoe3.png";
import snkr4 from "./image/shoe4.jpg";
import snkr5 from "./image/shoe5.jpg";
import snkr6 from "./image/shoe6.jpg";

function Details() {
  return (
    <>
      <div className="px-3">
        <div className="flex flex-wrap gap-8 justify-center my-2 mx-2 overflow-hidden pb-6 pt-6 rounded-lg w-full">
          <div className="rounded bg-white border-gray-200 shadow-md overflow-hidden relative">
            <img
              src={snkr1}
              alt="snkr1"
              className="h-4/5 object-bottom object-cover w-full"
            />
            <div className="flex justify-center m-1 pt-8">
              <span className="font-bold">Senaker 1</span>
            </div>
            <div className="flex justify-center m-1">
              <span>Senaker 1</span>
            </div>
          </div>

          <div className="rounded bg-white border-gray-200 shadow-md overflow-hidden relative">
            <img
              src={snkr2}
              alt="snkr2"
              className="h-4/5 object-bottom object-cover w-full"
            />
            <div className="flex justify-center m-1 pt-8">
              <span className="font-bold">Senaker 2</span>
            </div>
            <div className="flex justify-center m-1 ">
              <span>Senaker 2</span>
            </div>
          </div>

          <div className="rounded bg-white border-gray-200 shadow-md overflow-hidden relative">
            <img
              src={snkr3}
              alt="snkr3"
              className="h-4/5 object-bottom object-cover w-full"
            />
            <div className="flex justify-center m-1 pt-8">
              <span className="font-bold">Senaker 3</span>
            </div>
            <div className="flex justify-center m-1">
              <span>Senaker 3</span>
            </div>
          </div>

          <div className="rounded bg-white border-gray-200 shadow-md overflow-hidden relative">
            <img
              src={snkr4}
              alt="snkr4"
              className="h-4/5 object-bottom object-cover w-full"
            />
            <div className="flex justify-center m-1 pt-8">
              <span className="font-bold">Senaker 4</span>
            </div>
            <div className="flex justify-center m-1">
              <span>Senaker 4</span>
            </div>
          </div>

          <div className="rounded bg-white border-gray-200 shadow-md overflow-hidden relative">
            <img
              src={snkr5}
              alt="snkr5"
              className="h-4/5 object-bottom object-cover w-full"
            />
            <div className="flex justify-center m-1 pt-8">
              <span className="font-bold">Senaker 5</span>
            </div>
            <div className="flex justify-center m-1">
              <span>Senaker 5</span>
            </div>
          </div>

          <div className="rounded bg-white border-gray-200 shadow-md overflow-hidden relative">
            <img
              src={snkr6}
              alt="snkr6"
              className="h-4/5 object-bottom object-cover w-full"
            />
            <div className="flex justify-center m-1 pt-8">
              <span className="font-bold">Senaker 6</span>
            </div>
            <div className="flex justify-center m-1">
              <span>Senaker 6</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="rounded-full py-2 m-3 uppercase text-xs font-bold cursor-pointer">
          Load more
        </div>
      </div>
    </>
  );
}

export default Details;
