
// eslint-disable-next-line no-unused-vars
function SectionHeader( {title, description}) {
  return (
    <div className="mt-3.5">
        <div className="container mx-auto pt-28 px-4 pb-10">

        <span className="text-blue-500 text-sm">Practice Advise </span>
        <h1 className="text-4xl font-bold my-3 text-gray-900">{title}</h1>
        <p className="mb-3 text-gray-800" >{ description}</p>
        </div>
        
    </div>
  )
}

export default SectionHeader