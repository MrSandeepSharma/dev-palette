import logoImg from "../../assets/logo-large.svg"
import logoSmallImg from "../../assets/logo-small.svg"

function Logo() {
  return (
    <picture>
      <source media="(min-width: 700px)" srcSet={logoImg} width="280.34" height="35" />
      <img src={logoSmallImg} alt="Dev Palette" width="35" height="35" />
    </picture>
  )
}

export default Logo
