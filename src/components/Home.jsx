
function Home() {
  return (
    <section id="home" className="bg-gray-800 py-20 ">
     <div className="container mx-auto flex flex-col justify-center items-center text-white w-1/3 text-center">
      <span className="text-red-500 font-bold text-xl mb-4"> Join Us</span>
      <h1 className=" text-6xl font-bold text-red-100 mb-12">Best Learning Opportunities</h1>
      <p className="mb-12 text-red-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos temporibus illum sint  Dignissimos temporibus illum sint </p>
      <div className="flex gap-4 items-center">
        <a href="#" className="border-2 border-transparent bg-red-500 py-1.5 px-4 rounded-sm font-medium hover:bg-gray-800 hover:text-red-500 hover:border-red-500 hover:border-2 transition-colors">Get Quote Now</a>
        <a href="#" className="border-2 border-red-500 bg-gray-800 py-1.5 px-4 rounded-sm font-medium text-red-500 hover:bg-red-500 hover:text-white transition-colors">Learn More</a>
      </div>
     </div>

    </section>
  )
}

export default Home