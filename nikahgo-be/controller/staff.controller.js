const express = require("express");
const Staff = require("../model/staff.model");
const asyncHandler = require("express-async-handler");

const registerStaff = asyncHandler(async (req, res) => {
    const { staffName, staffGender, staffPhone, staffEmail, staffRole } = req.body;

    // Check if staff already exists based on email
    const exist = await Staff.findOne({ staffEmail });

    if (exist) {
        res.status(400);
        throw new Error("Staff already exists");
    }

    // Create a new staff document
    const newStaff = await Staff.create({
        staffName,
        staffGender,
        staffPhone,
        staffEmail,
        staffRole,
    });

    // Get staff data based on email
    const data = await Staff.findOne({ staffEmail });

    if (newStaff) {
        res.status(200).json({ data });
    } else {
        res.status(400);
        throw new Error("Failed to register staff");
    }
});

const getStaffUpdate = asyncHandler(async (req, res) => {

    const email = req.params.email;

    const profileData = req.body;

    try {
        const staffs = await Staff.findOneAndUpdate({ "staffEmail": email }, profileData, { upsert: true, new: true });

        if (staffs) {
            res.status(200).json(staffs);
        } else {
            res.status(404);
            throw new Error("User not found");
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

const getStaffByEmail = asyncHandler(async (req, res) => {
    const email = req.params.email;

    try {
        const result = await Staff.findOne({ "staffEmail": email });

        if (result) {
            res.status(200).json(result);
        }
    } catch (err) {
        throw new Error(err);
    }

})



module.exports = { registerStaff, getStaffUpdate, getStaffByEmail }