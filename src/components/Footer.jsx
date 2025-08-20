import { FaXTwitter,FaFacebookF,FaInstagram } from "react-icons/fa6";

function Footer() {
  return (
    <footer>
      <div className="container mx-auto  flex justify-between items-start py-20">
           
      <div className="flex flex-col gap-4 p-2.5">
            <h1 className="text-2xl text-gray-800 font-bold">Get In Touch</h1>
            <p className="text-gray-700">Lorem ipsum dolor sit amet</p>
            <div className="flex gap-3 mt-4 text-blue-500 text-lg ">
                <a href="" className="hover:text-blue-600"><FaXTwitter /></a>
                <a href=""className="hover:text-blue-600"><FaFacebookF /></a>
                <a href=""className="hover:text-blue-600"><FaInstagram /></a>
            </div>
           </div>

           <div className="flex flex-col gap-4 p-2.5">
            <h1 className="text-2xl text-gray-800 font-bold">Company info</h1>
            <a href="#"className="hover:text-blue-600 text-gray-700">About Us </a>
            <a href="#"className="hover:text-blue-600 text-gray-700">Carrier </a>
            <a href="#"className="hover:text-blue-600 text-gray-700">We are hiring </a>
            <a href="#"className="hover:text-blue-600 text-gray-700">Blog</a>
           </div>

           <div className="flex flex-col gap-4 p-2.5">
            <h1 className="text-2xl text-gray-800 font-bold">Features</h1>
            <a href="#"className="hover:text-blue-600 text-gray-700">Business Marketing </a>
            <a href="#"className="hover:text-blue-600 text-gray-700">User Analytic </a>
            <a href="#"className="hover:text-blue-600 text-gray-700">Live Chat </a>
            <a href="#"className="hover:text-blue-600 text-gray-700">Unlimited Support</a>
           </div>

           <div className="flex flex-col gap-4 p-2.5">
            <h1 className="text-2xl text-gray-800 font-bold">Resources</h1>
            <a href="#"className="hover:text-blue-600 text-gray-700">IOS & Android </a>
            <a href="#"className="hover:text-blue-600 text-gray-700">Witch a Demo </a>
            <a href="#"className="hover:text-blue-600 text-gray-700">Customers </a>
            <a href="#"className="hover:text-blue-600 text-gray-700">API</a>
           </div>
           
      </div>
      <p className="flex justify-center items-center p-2 text-gray-700"> &copy; 2025 Rihan. All rights reserved.
           </p>
    </footer>
  )
}

export default Footer


