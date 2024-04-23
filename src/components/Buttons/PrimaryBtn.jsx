import { Link } from "react-router-dom"

import "./buttons.css"

function PrimaryBtn({ type="link", icon="", path="", text="", className="", ...rest }) {
  return (
    type === "link" 
    ? <Link className={`btn-primary flex-container outline ${className}`} to={path} {...rest}>
        {icon}
        {text}
      </Link> 
    : <button className={`btn-primary flex-container outline ${className}`} {...rest}>
        {icon}
        {text}
      </button>
  )
}

export default PrimaryBtn