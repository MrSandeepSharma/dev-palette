import { Link } from "react-router-dom"

import "./buttons.css"

function SecondaryBtn({ type="link", icon="", className="", path="", text="", ...rest }) {
  return (
    type === "link" 
    ? <Link className={`btn-secondary flex-container outline ${className}`} to={path} {...rest}>
        {icon}
        {text}
      </Link> 
    : <button className={`btn-secondary flex-container outline ${className}`} {...rest}>
        {icon}
        {text}
      </button>
  )
}

export default SecondaryBtn