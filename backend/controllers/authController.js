const User = require("../models/User");
const jwt = require("jsonwbtoken");
const bcrypt = require("bcryptjs");

//Generate jwt token
const generateToken = (id) =>{
    return jwt.sign({ id }, process.env.JWT_SECRET, {expires:'1h'});
}

//Register user
exports.registerUser = async(req,res)=>{
    const { fullName, username, email, password, profileImageUrl } = req.body;

    //Validation: check for missing fields
    if(!username || !email || !password || !fullName){
        return res.status(400).json({ message: "All fields are required" })
    }

    //Validation: check username format
    //Allow alphanumeric and hyphens only
    const usernameRegex = /^[a-zA-Z0-9-]+$/;
    if(!usernameRegex.test(username)){
        return res.status(400).json({
            message: "Invalid username. Only alphanumeric and / are allowed. No spaces"
        })
    }
        //check if username already exists
    try{
        const existingUser = await User.findOne({ email });
        if(existingUser){
            return res.status(400).json({ message: "Email already in use" })
        }

        //check if username already exists
        const existingUsername = await User.findOne({ username });
        if(existingUsername){
            return res
            .status(400)
            .json({ message: "Username not available" })
        }

        const user = await User.create({
            fullName,
            email,
            password,
            username,
            profileImageUrl,
        });
        res.status(201).json({
            id: user._id,
            user,
            token: generateToken(user.id),
        })
    } catch(err){
        res
         .status(500)
         .json({ message: "Error registering user", error: err.message })
    }
}