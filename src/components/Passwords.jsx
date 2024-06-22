import Password from "./Password"
import "../assets/password.scss"

const Passwords = ({passwordInput, passwordInputTwo}) => {
  return (
    <div className="password__box">
      <Password passwordResult={passwordInput}/>
      <Password passwordResult={passwordInputTwo}/>
    </div>
  )
}

export default Passwords