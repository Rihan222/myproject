import SectionHeader from "./SectionHeader"

function Reviews() {


    const reviews =[{stars:'★★★★★' , name:'Gamal Mahmoud', description:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla accusamus asperiores velit aliquam eaque dolore, laborum tempora ex a nisi Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla accusamus asperiores velit aliquam eaque dolore, laborum tempora ex a nisi' , skils:"Software Engineer",image:"./public/4.jpg"},

        {stars:'★★★★☆' , name:'Omar Hadla', description:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla accusamus asperiores velit aliquam eaque dolore, laborum tempora ex a nisi Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla accusamus asperiores velit aliquam eaque dolore, laborum tempora ex a nisi' , skils:"Devloper",image:"./public/6.jpg"},

        {stars:'★★★☆☆' , name:'Islam Tarek', description:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla accusamus asperiores velit aliquam eaque dolore, laborum tempora ex a nisi Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla accusamus asperiores velit aliquam eaque dolore, laborum tempora ex a nisi' , skils:"Designer",image:"./public/5.jpg"}
    ]
  return (
    <section className="container mx-auto">
      <div >
    <SectionHeader title={'Each and every client is important'} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. At nostrum qui ipsam labore illum praesentium, sed voluptas? Eius, officiis ducimus.Lorem ipsum dolor sit amet, consectetur adipisicing elit. At nostrum qui ipsam labore illum praesentium, sed voluptas? Eius, officiis ducimus."}/>
      </div>

       <div className="flex justify-between items-center gap-4 p-4 mb-10">
          {reviews.map((item)=>{
            return <div className=" w-1/4 p-2 flex flex-col justify-center items-center">
                <span className="text-amber-500 text-3xl mb-3">{item.stars}</span>
                <p className="text-center text-gray-600"> {item.description}</p>
                <div className="flex items-center gap-2 mt-5">
                    <img src={item.image} alt="img"  className="w-11 h-11 rounded-full"/>
                    <div className="ml-2">
                        <h3 className="text-blue-500 font-medium text-xl">{item.name}</h3>
                        <h2 className=" font-medium text-gray-800">{item.skils}</h2>
                    </div>
                </div>
            </div>
          })}

       </div>

    </section>
  )
}

export default Reviews