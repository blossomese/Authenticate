const Registration = require("../model/regModel");
const { v4: uuidv4 } = require("uuid");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken")


const register = async (req, res) => {
const { firstname, lastname, age, email, address, password } = req.body;
if(!firstname){
    return res.status(404).send(`Firstname cannot be empty`)
}
if(!lastname){
    return res.status(404).send(`Lastname cannot be empty`)
} 
if(!age){
    return res.status(404).send(`Age cannot be empty`)
}
if(!email){
    return res.status(404).send(`Email cannot be empty`)
}
if(!address){
    return res.status(404).send(`Address cannot be empty`)
}
if(!password){
    return res.status(404).send(`Password cannot be empty`)
}
if(password.length < 6){
    return res.status(404).send(`Password cannot be less than 6`)
}
try{
const alreadyExist = await Registration.findOne({ where: {email}})
if(alreadyExist){
    return res.status(404).send('Email already exist')
}
const encryptedPassword = await bcrypt.hash(password, 10)
const newReg = await Registration.create({
    id: uuidv4(),
    firstname,
    lastname,
    age,
    email,
    address,
    password: encryptedPassword,
})
const token = jwt.sign({ id: newReg.id, email }, "secret_key" )
console.log(newReg);
return res.status(201).json({ message: `${newReg.firstname} ${newReg.lastname} created successfully`, token})
} 
catch (err) {
console.log(err);
}

}

module.exports = { register } 