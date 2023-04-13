import { useState } from "react"
import axios from "axios"


const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleEmailChange = (e) => {
setEmail(e.target.value)
    }
const handlePasswordChange = (e) => {
    setPassword(e.target.value)
}



const handleSubmit = async (e) => {
    e.preventDefault()
    const response = await axios.post("http://localhost:7000/login", {
email,
password
    })
    console.log(response);
}

return (
    <div>
        <form onSubmit={handleSubmit}> 
          <input type="email" onChange={handleEmailChange} placeholder="Email"/>
          <input type="password" onChange={handlePasswordChange} placeholder="Password"/>
          <button>Login</button>
        </form>
    </div>
)
}
  export default Login