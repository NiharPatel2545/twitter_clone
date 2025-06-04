import User from "../models/User.js";
import bcrypt from "bcryptjs";

export const signup = async (req, res) => {
    try {
      const { fullName, username, email, password } = req.body;

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
      if(!emailRegex.test(email)){
        return res.status(400).json({ error: "Ivalid email format" });
      }

      const existingUser = await User.findOne({ username });
      if(existingUser){
        return res.status(400).json({ error: "Userame is already taken" })
      }

      const existingEmail = await User.findOne({ email });
      if(existingEmail){
        return res.status(400).json({ error: "Email is already taken" })
      }

      const salt = await bcrypt.genSalt(10);

    } catch (error) {
      
    }
}

export const login = async (req, res) => {
    res.json({
      data: "You hit the login endpoint",
    });
}

export const logout = async (req, res) => {
    res.json({
      data: "You hit the logout endpoint",
    });
}

//2:53:06