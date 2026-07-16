const express = require('express');

const app = express();

const students = [
    { id: 1, name: 'Tom', age: 22, course: 'mern' },
    { id: 2, name: 'John', age: 24, course: 'python'  },
    { id: 3, name: 'Harry', age: 23, course: 'cpp'  },
    { id: 4, name: 'John', age: 26, course: 'java' }
]

app.get('/', (req, res) => {
    res.send('Response from server');
});

app.get('/login', (req, res) => {
    // res.status(201);
    res.send('Response from Login route')
})

app.get('/student/:id', (req, res) => {
    const id = Number(req.params.id);
    // console.log('Id is: ',typeof(id));
    const student = students.find(s => s.id === id);
    if (student) {
        res.json({
            success: true,
            data: student
        })
        return;
    }
    res.json({
        success: false,
        message: 'Data does not exist'
    });
    return;
})

app.get('/student/:name/course/:course', (req, res) => {
    const name = req.params.name;
    const course = req.params.course;

    const student = students.find(s => s.name === name && s.course === course);
    if (student) {
        res.json({
            success: true,
            data: student
        })
        return;
    }
    res.json({
        success: false,
        message: 'Data does not exist'
    });
    return;
})
app.post('/student', (req, res) => {
    const { name, age, course } = req.body;

    if (!name || !age || !course) {
        return res.status(400).json({
            success: false,
            message: 'Name, age and course are required'
        });
    }

    const newStudent = {
        id: students.length ? students[students.length - 1].id + 1 : 1,
        name,
        age: Number(age),
        course
    };

    students.push(newStudent);

    res.status(201).json({
        success: true,
        message: 'Student added successfully',
        data: newStudent
    });
});

app.get('/students', (req, res) => {
    res.json({
        success: true,
        count: students.length,
        data: students
    });
});
app.put('/student/:id', (req, res) => {
    const id = Number(req.params.id);
    const studentIndex = students.findIndex(s => s.id === id);
    
    if (studentIndex === -1) {
        return res.status(404).json({
            success: false,
            message: 'Data does not exist'
        });
    }
    
    const { name, age, course } = req.body;
});

app.patch('/student/:id', (req, res) => {
    const id = Number(req.params.id);
    const studentIndex = students.findIndex(s => s.id === id);

    if (studentIndex === -1) {
        return res.status(404).json({
            success: false,
            message: 'Data does not exist'
        });
    }

    const { name, age, course } = req.body;

    students[studentIndex] = {
        ...students[studentIndex],
        name: name || students[studentIndex].name,
        age: age ? Number(age) : students[studentIndex].age,
        course: course || students[studentIndex].course
    };

    res.json({
        success: true,
        message: 'Student updated successfully',
        data: students[studentIndex]
    });
});

app.delete('/student/:id', (req, res) => {
    const id = Number(req.params.id);
    const student = students.find(s => s.id === id);

    if (!student) {
        return res.status(404).json({
            success: false,
            message: 'Data does not exist'
        });
    }

    students = students.filter(s => s.id !== id);

    res.json({
        success: true,
        message: 'Student deleted successfully',
        data: student
    });
});

// app.post('/login', (req, res) => {
//     res.status(202);
//     res.send({ success: true, message: 'Logged in'});
// })

// app.get('')

app.post('/login', (req, res) => {
    res.status(201).json({ success: true, message: 'Logged in'});
})

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});