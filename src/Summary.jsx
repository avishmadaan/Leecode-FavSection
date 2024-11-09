import { ChevronDown, GitFork, Lock, Play, RefreshCcw, RotateCcw, Share2 } from "lucide-react";
import { FaPlay } from "react-icons/fa";

export function Summary() {

    return (
        <div className="bg-softGray rounded-lg p-7  w-[400px]">

            <img className="w-16" src="https://assets.leetcode.com/favorite/default_favorite_cover.png" alt="" />

            <h2 className="text-2xl font-semibold mt-3">Favorite</h2>

            <div className="flex text-md mt-2">
                <span>{`Avish Madaan . 10 questions . `}</span>
                <div className="flex gap-1 items-center justify-between ">
                    <Lock className="ml-2" size={18} />
                    <span className="">{`Private`}</span>
                    <ChevronDown />
                </div>
            </div>

            <div className="text-black mt-2 flex items-center gap-2">
                <button className="bg-white rounded-3xl flex px-4 py-1 items-center font-semibold">
                   
                    <FaPlay className="mr-2 " size={12} />
                    Practice
                </button>

                <button className="bg-lightGray  rounded-full   p-3  font-semibold">
                   
                   <GitFork className="mx-auto text-white" size={12} />
                   
               </button>
            </div>

            <div className="my-5 h-[2px] rounded-xl bg-lightGray w-full"></div>

            <div className="flex justify-between items-center
            my-3 ">
                <span className="">Progress</span>

                <RotateCcw className="text-gray-400 " size={14} />
            </div>

            <div className="grid  grid-rows-3 grid-cols-[calc(70%-2%)_calc(30%-2%)] gap-[2%] gap-y-2">

                <div className="1st bg-lightGray row-span-3 p-5 text-center rounded-md shadow-md"> 19/19</div>

                <div className="bg-lightGray rounded-md p-2 flex flex-col items-center justify-center shadow-md ">
                    <p className="text-sky-500">Easy</p>
                    <p className="text-xs ">11/11</p>
                </div>

                <div className="bg-lightGray rounded-md p-2 flex flex-col items-center justify-center shadow-md">
                    <p className="text-orange-300">Med.</p>
                    <p className="text-xs ">7/7</p>
                </div>

                <div className="bg-lightGray rounded-md p-2 flex flex-col items-center justify-center shadow-md">
                    <p className="text-red-500">Hard</p>
                    <p className="text-xs ">1/1</p>
                </div>


            </div>

        </div>
    )
}