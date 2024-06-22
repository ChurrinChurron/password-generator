import Passwords from "./Passwords"
import "../assets/password.scss"

const Password = ({passwordResult}) => {
  return (
    <div className="password__result">
      <p>{passwordResult}</p>
    </div>
  )
}

export default Password