const express = require('express');

const app = express();

const students=[
    {id:1,name:"shivam",age:22,subject:"maths"},
    {id:2,name:"sachin",age:23,subject:"science"},
    {id:3,name:"saurabh",age:24,subject:"english"},
    {id:4,name:"shubham",age:25,subject:"history"},
    {id:5,name:"satyam",age:26,subject:"geography"},
    {id:6,name:"mohan",age:27,subject:"physics"},
    {id:7,name:"gorav",age:28,subject:"chemistry"},
    {id:8,name:"rohit",age:29,subject:"biology"},
    {id:9,name:"rahul",age:30,subject:"computer science"},
    {id:10,name:"ravi",age:31,subject:"art"}
]

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/login', (req, res) => {
    res.send('Login Page');
});

app.post('/login', (req, res) => {
    res.send('Login Form Submitted');
});

app.get('/students', (req, res) => {
    const id=parseInt(req.query.id);
    const student=students.find(s=>s.id===id);
    if(student){
        res.json(student);
    }else{
        res.status(404).send('Student not found');
    }
});
app.listen(3000, () => {
    console.log('Server is running at http://localhost:3000');
});


