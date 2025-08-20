import { FaArrowRight } from "react-icons/fa";

const Header = () => {
  
  const links = [{name:'Home' ,url:'/'}, {name:'Product' ,url:'/product'},{name:'Pricing' ,url:'/pricing'},{name:'Contact' ,url:'/contact'},]
  return (

    
   
    <>
    <header id="header" className=" bg-gray-800 text-white ">
     <nav className=" container m-auto flex justify-between items-center p-4">
      <a href="#" className="text-3xl  font-semibold"> Rihan</a>

      <div className="flex gap-4 text-sm font-semibold ">
        {links.map((link)=>{
            return  <a href={link.url} className="hover:text-red-500 transition-all">{link.name}</a>
        })}
      </div>

      <div className="flex gap-4 items-center ">
        <button type="button"><a href="#">Login</a></button>
        <button type="button" className=" bg-red-500 py-1.5 px-2 rounded-sm  font-bold hover:bg-red-600 transition-colors" ><a href="#"> JOIN US<FaArrowRight className=" inline ml-1" />
        </a></button>
      </div>
     </nav>
    </header>
    </>
  )
}

export default Header





