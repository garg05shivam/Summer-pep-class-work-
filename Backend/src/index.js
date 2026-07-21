// const express = require('express');
import express from "express";
import fs from "fs/promises";
import "dotenv/config";
import path from 'path';
import { fileURLToPath } from "url";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
// const fs = require('fs/promises');
// require('dotenv').config();
// const path = require('path');


const port = process.env.PORT;

const app = express();
app.use(express.json());

const __filename = fileURLToPath(import.meta.url);
const __dirname =  path.dirname(__filename);

const coursePath = path.join(__dirname, '../data/courses.json');
const userPath = path.join(__dirname, '../data/users.json')

// console.log('directory path',__dirname);
// console.log('file path',__filename);

app.get('/',(req, res) => {
    res.json({ message: 'Hello' });
    return;
})

app.post('/signup', async (req, res) => {
    // const data = req.body;
    try {
        const { firstName, lastName, email, password } = req.body;
        // console.log('Data: ', data);

        if (!firstName || !lastName || !email || !password) {
            res.json({ message: "All informations are required for signup"});
            return;
        }

        const users = JSON.parse(await fs.readFile( userPath, 'utf-8'));

        const existingUser = users.find(u => u.email === email);

        if (existingUser) {
            res.json({ message: " User with this email already exists"});
            return;
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = {
            id: users.length + 1,
            firstName,
            lastName,
            email,
            password: hashedPassword,
            role: "student",
            courses: []
        }

        users.push(newUser);

        const { password: _, ...userData } = newUser;

        await fs.writeFile(userPath, JSON.stringify(users, null, 2));
        res.json({
            message: "New User added successfully",
            data: userData
        });
        return;
    } catch(err) {
        console.log('Error');
        res.json({ message: "Unable to create new user, Please try again!"});
        return;
    }
    
})

app.post('/login', async (req, res) => {
   const { email, password } = req.body;
   if (!email || !password) {
    res.json({ message: 'Email and password both are required for Login!'});
    return;
   }

   const users = JSON.parse(await fs.readFile(userPath, 'utf-8'));

   const user = users.find(u => u.email === email);

   if (!user) {
    res.json({ message: "User does not exist" });
    return;
   }

   const isMatched = await bcrypt.compare(password, user.password);

   if (!isMatched) {
    res.json({ message: "Invalid credentials"});
    return;
   }

   const token = jwt.sign(
    {
        id: user.id,
        email: user.email,
        role: user.role
    },
    process.env.JWT_SECRET,
    { expiresIn: '7d' }
   )

   res.json({
    message: "Logged in successfully",
    token
   });
   return;
});

app.get('/courses',async (req, res) => {

    try {
        const courses = JSON.parse( await fs.readFile(coursePath, 'utf-8'));

        if (!courses) {
            res.json({ message: "No available course right now"});
            return;
        }

        res.json({
            message: "Courses fetched",
            courses
        });
        return;

    } catch(err) {
        console.log('error: ', err);
        res.json({ message: 'Error while fetching courses, try again!'});
        return;
    }
});

app.get('/my-courses', async (req, res) => {
    try {
        // Get token from Authorization header
        const authHeader = req.headers.authorization;

        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return res.json({
                message: "Authorization token is required"
            });
        }

        const token = authHeader.split(" ")[1];

        // Verify JWT
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Read users
        const users = JSON.parse(
            await fs.readFile(userPath, "utf-8")
        );

        const user = users.find(u => u.id === decoded.id);

        if (!user) {
            return res.json({
                message: "User not found"
            });
        }

        // Read courses
        const courses = JSON.parse(
            await fs.readFile(coursePath, "utf-8")
        );

        // Get enrolled courses
        const enrolledCourses = courses.filter(course =>
            user.courses.includes(course.id)
        );

        return res.json({
            message: "My courses fetched successfully",
            courses: enrolledCourses
        });

    } catch (err) {
        console.log(err);

        return res.json({
            message: "Invalid or expired token"
        });
    }
});


app.listen(port, () => {
    console.log(`App is running on port ${port}`)
})