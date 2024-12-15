import User from '../models/auth.js';
import bcrypt from 'bcryptjs';


export const signup = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(404).json({ message: "User already exist" });
        }

        const hashedPassword = await bcrypt.hash(password, 12);
        const newUser = await User.create({
            name,
            email,
            password: hashedPassword
        });
        res.status(200).json({ result: newUser });
    } catch (error) {
        res.status(500).json("something went wrong...");
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
            res.status(400).json({message: "Invalid credentials"});
        }

        res.status(200).json({result: existingUser});
    } catch (error) {
        res.status(500).json("Something went wrong...");
    }
};