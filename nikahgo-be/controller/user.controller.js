const express = require("express");
const User = require("../model/user.model");
const asyncHandler = require("express-async-handler");

const register = asyncHandler(async (req, res) => {
    const { email } = req.body;

    if (!email) {
        res.status(400);
        throw new Error("All field are mandatory");
    }

    const userExist = await User.findOne({ email });

    if (userExist) {
        res.status(400);
        throw new Error("User already exist");
    }
    const user = await User.create({
        email
    });

    const userData = await User.findOne({ email });

    if (user) {
        res.status(200).json({ userData });
    } else {
        res.status(400);
        throw new Error("Failed to resgiter user");
    }

    res.status(200).json({ userData });
});

module.exports = { register };

