import { Check, ChevronDown, GitFork, Globe, Lock, Play, RefreshCcw, RotateCcw, Share2 } from "lucide-react";
import { useState } from "react";
import { FaPlay } from "react-icons/fa";

export function Summary() {

    const [privacyVisible, setPrivacyVisible] = useState(false)

    const [selectedPrivacy, setSelectedPrivacy] = useState("Private");

 


    return (
        <div className="bg-softGray rounded-lg p-7 lg:min-w-[390px]  lg:max-w-[400px]">

            <img className="w-16" src="https://assets.leetcode.com/favorite/default_favorite_cover.png" alt="" />

            <h2 className="text-2xl font-semibold mt-3">Favorite</h2>

            <div className="flex text-md mt-2">
                <span>{`Avish Madaan . 10 questions . `}</span>
                <div className="flex gap-1 items-center justify-between relative ">
                    {selectedPrivacy=== "Public"?(
  <Globe className="ml-2" size={18} />
                    ):(
                        <Lock className="ml-2" size={18} />
                    )}
                  
                  
                    <span className="">{selectedPrivacy}</span>
                   <div className=" 
                   ">
                    <ChevronDown className="cursor-pointer" onClick={()=> setPrivacyVisible(!privacyVisible)} />

                    {privacyVisible && (
                         <div className="border-[1px] border-opacity-10 border-white bg-softGray w-32 
                         absolute top-7 left-0  p-1 rounded-md transform ">
                             <h3 onClick={()=> {setSelectedPrivacy("Public"); setPrivacyVisible(false)}} className={`flex items-center justify-between hover:bg-lightGray cursor-pointer p-1 px-5 rounded-md ${selectedPrivacy === "Public"?"bg-lightGray":""}`}><Globe className="text-white" size={16} />Public </h3>

                             <h3 onClick={()=> {setSelectedPrivacy("Private"); setPrivacyVisible(false) }} className={` flex p-1 px-5 items-center justify-between hover:bg-lightGray cursor-pointer rounded-md mt-1 ${selectedPrivacy === "Private"?"bg-lightGray":""}`}><Lock className="text-white" size={16} />Private </h3>
                         </div>

                    )}
                   
                    
                    </div> 

                        
                </div>
            </div>

            <div className="text-black mt-2 flex items-center gap-2">
                <button className="bg-white rounded-3xl flex px-4 py-1 items-center font-semibold hover:bg-gray-300">
                   
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

                <RotateCcw className="text-gray-400 cursor-pointer hover:animate-spin" size={14} />
            </div>

            <div className="grid  grid-rows-3 md:grid-cols-[calc(70%-2%)_calc(30%-2%)] gap-[2%] gap-y-2 ">

                <div className="1st bg-lightGray row-span-3 p-5 text-center rounded-md shadow-md relative">

                    <div className="border-8 border-gray-200 h-[200px] w-[200px] rounded-full border-b-lightGray border-l-green-500 mx-auto  " ></div>

                    <div className="absolute  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <h1 className=""><span className="text-4xl font-bold ">2</span>/5</h1>

                        <h3 className="flex items-center justify-center gap-1 mt-1"><Check size="16" className="text-green-500" /> Solved</h3>
                    </div>
                    
                    
                    </div>

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