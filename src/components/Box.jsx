import { useState } from "react"
import "../assets/box.scss"
import Passwords from "./Passwords"

const Box = () => {

const [input, setInput] = useState("");
const [inputTwo, setInputTwo] = useState("");

const [dark, setDark] = useState(true);

let pattern = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!¡@#$%^&*()-_=+|[]{};:/?¿.,>"

let result = "";
let resultTwo = "";

function update() {
  for (let i=0; i < 15; i++) {

    let random = Math.floor(Math.random() * pattern.length);
    let randomTwo = Math.floor(Math.random() * pattern.length);

    result += pattern[random];
    resultTwo+= pattern[randomTwo];
  }
  
  setInput(result);
  setInputTwo(resultTwo);
}

  return (
    <section className={`${dark ? "box" : "box light"}`}>
      <div className="display">
        <span className={`${dark ? "" : "light"}`}>Dark mode</span>
        <label className="label toggle">
          <input type="checkbox" onChange={() => setDark(!dark)} checked={dark} className="toggle_input" />
          <div className="toggle-control"></div>
        </label>
      </div>
      <h2 className={`${dark ? "" : "light"}`}>Generate a <br/> <span>random password</span></h2>
      <p className={`${dark ? "" : "light"}`}>Never use an insecure password again.</p>
      <button onClick={update}>Generate passwords</button>
      <hr className={`${dark ? "" : "light"}`}/>
      <Passwords passwordInput={input}
                 passwordInputTwo={inputTwo}/>
    </section>
  )
}

export default Box