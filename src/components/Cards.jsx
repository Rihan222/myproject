import { IoMdPhotos } from "react-icons/io";
import { AiFillProfile } from "react-icons/ai";

import { CiMap } from "react-icons/ci";

function Cards() {

    const cards = [
        { icon: <CiMap />, title: "Library", spa: "Books", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum inventore obcaecati dolor totam a illum.",color:"bg-red-200 text-red-300 text-6xl" },
        { icon: <IoMdPhotos />, title: "Anaysis", spa: "Market", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum inventore obcaecati dolor totam a illum." ,color:"bg-green-200 text-green-300 text-6xl"},
        { icon: <AiFillProfile />, title: "Online Courses", spa: "50 +", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum inventore obcaecati dolor totam a illum." ,color:"bg-blue-200 text-blue-300 text-6xl"},
      ];
      
      return (
        <>
          <div className="bg-gray-800 pb-14">
            <div className="container mx-auto flex justify-between items-center gap-4 p-4 bg-gray-800">
              {cards.map((card, index) => (
                <div key={index} className="flex flex-col justify-center w-1/3 bg-white p-7 rounded-md">
                  <div className={`p-3 rounded-md mb-3 w-20 h-20 flex items-center justify-center ${card.color}`} >
                    {card.icon}
                  </div>
                  <h1 className="text-4xl font-bold pb-4 mb-3">
                    <span className="border-b-2 border-b-red-500 pb-2">{card.spa}</span> {card.title}
                  </h1>
                  <p>{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </>
      );
}

export default Cards