import User from '../models/auth.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';


export const signup = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(409).json({ message: "User already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 12);
        const newUser = new User({
            name,
            email,
            password: hashedPassword
        });

        await newUser.save();

        const token = jwt.sign(
            { email: newUser.email, id: newUser._id },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        );

        res.status(200).json({ result: newUser, token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Something went wrong", error: error.message });
    }
};

export const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const existingUser = await User.findOne({email});
        if(!existingUser) {
            return res.status(404).json({message: "User does not exist"});
        }

        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);
        if(!isPasswordCorrect) {
            return res.status(400).json({message: "Invalid credentials"});
        }

        const token = jwt.sign({
            email: existingUser.email,
            id: existingUser._id,
        }, process.env.JWT_SECRET, {expiresIn: "1h"});
        res.status(200).json({result: existingUser, token});
    } catch (error) {
        res.status(500).json("Something went wrong...");
    }
};