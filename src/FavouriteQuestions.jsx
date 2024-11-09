import { Lock, PanelRightOpen } from "lucide-react";
import { useState } from "react";
import { Summary } from "./Summary";
import { Filter } from "./Filter";

export function FavouriteQuestions() {
  const [sideBarOpen, setSideBarOpen] = useState(true);

  return (
    <div className="flex ">
      <div
        className={`h-screen bg-softGray text-white transition-all
                 duration-300  ${sideBarOpen ? "w-1/4 min-w-[250px] " : "w-0"} border-r-2 border-lightGray`}
        id="sidebar"
      >
        {sideBarOpen && (
          <div className=" p-6">
            <div className="flex justify-between items-center " id="myList">
              <h1 className="text-white font-semibold">My Lists</h1>
              <PanelRightOpen className="cursor-pointer" size={20} onClick={() => setSideBarOpen(!sideBarOpen)} />
            </div>

            <h2 className="text-sm my-3  ">Created by me</h2>

            <div className="flex justify-between items-center bg-lightGray p-2 rounded-md w-full  my-5 cursor-pointer " id="lock">

                <img className="w-6 h-6 rounded-[3px] mr-2"  src="https://assets.leetcode.com/favorite/default_favorite_cover.png" alt="" />
                <span>Favorite</span>
                <Lock size={16} />

            </div>
          </div>
        )}
      </div>

      <div className="bg-softBlack text-white h-screen w-full p-3 flex flex-col md:flex-row justify-between pt-10 gap-10 px-10" id="right">

        <div className={`w-[3%] h-screen  `}>

        {!sideBarOpen && (
            <PanelRightOpen className="cursor-pointer border border-softGray p-2 w-10 h-10 rounded-md float-right  " size={28} onClick={() => setSideBarOpen(!sideBarOpen)} />

        )}
        </div>

        <div className="max-w-[35%]" id="left">
        <Summary ></Summary>
        </div>

        <div className="w-[65%]">
            <Filter></Filter>
        
        </div>
      </div>
    </div>
  );
}
