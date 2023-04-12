import { useState } from "react";
import axios from "axios";

const Registration = () => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };
  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };


const handleSubmit = async (e) => {
    e.preventDefault()
    const response = await axios.post('http://localhost:7000/register', {
        firstname,
        lastname,
        age,
        email,
        address,
        password
    })
    console.log(response);
}



  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleFirstNameChange}
          placeholder="firstname"
        />
        <input
          type="text"
          onChange={handleLastNameChange}
          placeholder="lastname"
        />
        <input type="text" onChange={handleAgeChange} placeholder="age" />
        <input type="email" onChange={handleEmailChange} placeholder="email" />
        <input
          type="text"
          onChange={handleAddressChange}
          placeholder="address"
        />
        <input
          type="password"
          onChange={handlePasswordChange}
          placeholder="password"
        />
        <button>Register</button>
      </form>
    </div>
  );
};

export default Registration;
