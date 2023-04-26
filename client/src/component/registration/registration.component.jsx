import { useState } from "react";
import axios from "axios";

const Registration = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    age: "",
    email: "",
    address: "",
    password: "",
  });
  

  const handleChange = (e) => {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [e.target.name]: e.target.value,
      };
    });
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post("http://localhost:7000/register", {
      firstname,
      lastname,
      age,
      email,
      address,
      password,
    });
    console.log(response);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleChange}
          placeholder="firstname"
          name="firstname"
        />
        <input
          type="text"
          onChange={handleChange}
          placeholder="lastname"
          name="lastname"
        />
        <input 
        type="text"
         onChange={handleChange} 
         placeholder="age"
         name="age"
          />
        <input 
        type="email"
         onChange={handleChange} 
         placeholder="email" 
         name="email"
         />
        <input
          type="text"
          onChange={handleChange}
          placeholder="address"
          name="address"
        />
        <input
          type="password"
          onChange={handleChange}
          placeholder="password"
          name="password"
        />
        <button>Register</button>
      </form>
    </div>
  );
};

export default Registration;
