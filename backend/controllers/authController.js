const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

//Generate jwt token
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '1h' });
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

//Login user
exports.loginUser = async(req,res)=>{
    const {  email, password } = req.body;

    //Validation: check for missing fields
    if( !email || !password ){
        return res.status(400).json({ message: "All fields are required" })
    }

    try{
        const user = await User.findOne({ email });
        if(!User || !(await user.comparePassword(password))){
            return res.status(400).json({ message: "All fields are required" })
        }
        res
        .status(200)
        .json({
            id: user._id,
            user: {
                ...user.toObject(),
                totalPollsCreated: 0,
                totalPollsVotes: 0,
                totalPollsBookmarked: 0,
            },
            token: generateToken(user._id),
        })

    } catch(err){
        res
        .status(500)
        .json({ message: "Error registering user", error: err.message })
    }
}

//Get user info
exports.getUserInfo = async(req,res)=>{
    try{
        const user = await User.findById(req.user.id).select("-password");
        if(!user){
            return res.status(400).json({ message: "User not found" });
        }

        //Add the new attributes to the response 
        const userInfo = {
            ...user.toObject(),
            totalPollsCreated: 0,
            totalPollsBookmarked: 0,
            totalPollsVotes: 0,
        }
        res.status(200).json(userInfo)

    }catch(err){
        res
        .status(500)
        .json({ message: "Error registering user", error: err.message })
    }
}