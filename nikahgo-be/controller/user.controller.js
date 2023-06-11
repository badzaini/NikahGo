const express = require("express");
const User = require("../model/user.model");
const asyncHandler = require("express-async-handler");

const register = asyncHandler(async (req, res) => {
    const { email, name, ic, phone, gender } = req.body;

    if (!email || !name || !ic || !phone || !gender) {
        res.status(400);
        throw new Error("All field are mandatory");
    }

    const userExist = await User.findOne({ email });

    if (userExist) {
        res.status(400);
        throw new Error("User already exist");
    }
    const user = await User.create({
        email,
        name,
        ic,
        phone,
        gender
    });

    const userData = await User.findOne({ email });

    if (user) {
        res.status(200).json({ userData });
    } else {
        res.status(400);
        throw new Error("Failed to register user");
    }

    res.status(200).json({ userData });
});

const login = asyncHandler(async (req, res) => {
    const email = req.params.email;

    if (!email) {
        res.status(400);
        throw Error("All fields are mandatory!");
    }
    const user = await User.findOne({ "email": email });

    if (user) {
        res.status(200).json({ user });
    } else {
        res.status(400).json({ message: "User not found" });
    }

    res.status(200).json({ user });
});

const getAllUsers = asyncHandler(async (req, res) => {
    const users = await User.find();

    if (users) {
        res.status(200).json(users);
    } else {
        res.status(404);
        throw new Error("No users found");
    }
});

const updateProfile = asyncHandler(async (req, res) => {
    const ic = req.params.ic;
    const profileData = req.body;

    try {
        const users = await User.findOneAndUpdate(ic, profileData, { new: true });

        if (users) {
            res.status(200).json(users);
        } else {
            res.status(404);
            throw new Error("User not found");
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = { register, login, getAllUsers, updateProfile };

