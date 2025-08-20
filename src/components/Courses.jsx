import SectionHeader from "./SectionHeader"
import { FaStar } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import { SlArrowRight } from "react-icons/sl";




function courses() {
  const course = [{ img: '/1.jpg', spa: "Graphic", title: "UI & UX Desgin", rating: "4.5", desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At nostrum qui ipsam labore illum praesentium, sed voluptas? Eius, officiis ducimus.Lorem ipsum dolor sit amet, consectetur adipisicing elit. At nostrum qui ipsam labore illum praesentium, sed voluptas? Eius, officiis ducimus.", sales: "80", price: " $11.99", oldprice: "$4.99", duration: "2h 30m", lessons: "64 Lessons" }

    , { img: '/2.png', spa: "Graphic", title: "UI & UX Desgin", rating: "4.5", desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At nostrum qui ipsam labore illum praesentium, sed voluptas? Eius, officiis ducimus.Lorem ipsum dolor sit amet, consectetur adipisicing elit. At nostrum qui ipsam labore illum praesentium, sed voluptas? Eius, officiis ducimus.", sales: "80", price: " $11.99", oldprice: "$4.99", duration: "2h 30m", lessons: "64 Lessons" }

    , { img: '/3.png', spa: "Graphic", title: "UI & UX Desgin", rating: "4.5", desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At nostrum qui ipsam labore illum praesentium, sed voluptas? Eius, officiis ducimus.Lorem ipsum dolor sit amet, consectetur adipisicing elit. At nostrum qui ipsam labore illum praesentium, sed voluptas? Eius, officiis ducimus.", sales: "80", price: " $11.99", oldprice: "$4.99", duration: "2h 30m", lessons: "64 Lessons" }
  ]

  return (
    <section>
      <div>
        <SectionHeader title='Make Online education acessible' description='  Lorem ipsum dolor sit amet, consectetur adipisicing elit. At nostrum qui ipsam labore illum praesentium, sed voluptas? Eius, officiis ducimus.Lorem ipsum dolor sit amet, consectetur adipisicing elit. At nostrum qui ipsam labore illum praesentium, sed voluptas? Eius, officiis ducimus.' />

        <div className="container mx-auto flex justify-between items-center p-4 gap-4 mb-10">


          {course.map((item) => {
            return <div className="bg-white p-4 w-1/3">
              <div className="">
                <img src={item.img} alt="img" className=" rounded-md mb-5 h-55 min-w-full object-cover " />
              </div>

              <div className="px-4">

                <div className="flex justify-between items-center mb-3 ">
                  <span className="text-sm text-blue-500 font-bold">{item.spa}</span>
                  <span className=" bg-gray-800 rounded-4xl px-1.5 py-0.5 text-white flex items-center gap-1.5"><FaStar className=" text-amber-400" />
                    {item.rating}</span>
                </div>
                <h2 className=" text-gray-800 font-bold mb-3 text-xl">{item.title}</h2>
                <p className=" text-gray-600 mb-3">{item.desc}</p>
                <div className="flex gap-2.5 font-medium mb-3">
                  <span className="text-gray-500 line-through"> {item.price}</span>
                  <span className="text-green-400">{item.oldprice}</span>
                </div>
                <div className=" flex gap-2.5 text-gray-600 mb-5">
                  <span className="flex items-center gap-1"> <FaClock className="text-blue-400" />{item.duration}</span>
                  <span className="flex items-center gap-1"> < FaBookOpen className="text-blue-400" />
                    {item.lessons}</span>
                </div>
                <button type="button"> <a href="#" className="border border-blue-500 rounded-full py-2 px-4 text-blue-500 flex gap-2 items-center hover:bg-blue-500 hover:text-white transition-colors"> Learn More <SlArrowRight />
                </a></button>
              </div>



            </div>
          })}

        </div>


      </div>
    </section>
  )
}

export default courses