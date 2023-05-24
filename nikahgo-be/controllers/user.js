const asyncHandler = require("express-async-handler");
const express = require('express');
const User = require('../models/user');

const register = asyncHandler(async (req, res) => {
    const { username, email } = req.body;

    if (!username || !email) {
        res.status(400);
        throw new Error("All fields are mandatory!");
    }

    const userExist = await User.findOne({ email });

    if (userExist) {
        res.status(400);
        throw new Error("User already registered!");
    }

    const user = await User.create({
        username,
        email
    });

    if (user) {
        res.status(201).json({ user });
    } else {
        res.status(400);
        throw new Error("User data us not valid");
    }
    res.json({ message: "Register the user" });
});

const getUser = asyncHandler(async (req, res) => {
    const user = await User.find();

    if (user) {
        res.status(201).json({ user });
    } else {
        res.status(400);
        throw new Error("User not found!");
    }
});

module.exports = { register, getUser };