import { Link } from "react-router-dom"

import Logo from "../Logo"
import { PrimaryBtn } from "../Buttons";

import "./header.css"

import { FaArrowRightLong } from "react-icons/fa6";

function Header() {
  return (
    <header className="header container">
        <Link className="skip-main outline" path="#" onClick={() => window.location.replace("#main")}>Skip to main content</Link>
        <Link to="/" className="header__logo outline">
              <Logo />
        </Link>
        <PrimaryBtn target="_blank" to="https://docs.google.com/forms/d/e/1FAIpQLSeDmUBWnEJgmPpBH-y7F0zCeYaxgxNG5bgl2FgJFkfDe33_Lw/viewform?usp=sf_link" text="Add a Resource" icon={<FaArrowRightLong />} />
    </header>
  )
}

export default Header
