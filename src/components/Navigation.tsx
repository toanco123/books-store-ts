import React from "react";
import { useState } from "react";

const Navigation = () => {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Dashboard", src: "dashboard" },
    { title: "Categories", src: "categories" },
    { title: "Saved", src: "saved" },
    { title: "Profile", src: "profile" },
    { title: "History", src: "history" },
    // { title: "Book Plans", src: "bookplans" },
    { title: "Preference", src: "preference" },
  ];
  return (
    <div className="flex fixed">
      <div
        className={` ${
          open ? "w-72" : "w-20 "
        } bg-[#F9F9F9] h-screen p-5  pt-8 relative duration-300`}
      >
        <img
          src="./assets/control.png"
          alt=""
          className={`absolute cursor-pointer -right-3 top-9 w-7
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <img
            src="./assets/logo.png"
            alt=""
            className={`cursor-pointer duration-500 text-base ${
              open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`text-black origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            Toan
          </h1>
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex  rounded-md p-2 py-3 cursor-pointer hover:bg-white text-sm items-center gap-x-4 text-black 
               ${index === 0 && "bg-white"} `}
            >
              <img
                src={`./assets/${Menu.src}.png`}
                alt=""
                className="w-5 h-5"
              />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {Menu.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
