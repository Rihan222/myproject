

const Button = ({text ,onclick}) => {

  return (
    <button type="button" onClick={onclick} className="p-1 m-1 hover:bg-blue-500 border-2"> {text}</button>
  )
}

export default Button