import { useState } from "react"
import axios from "axios"


const Login = () => {
return (
    <div>
        <form>
          <input type="email" placeholder="Email"/>
          <input type="password" placeholder="Password"/>
        </form>
    </div>
)
}
  export default Login