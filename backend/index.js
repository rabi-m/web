const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/notes', { useNewUrlParser: true });

const noteSchema = new mongoose.Schema({ content: String });
const Note = mongoose.model('Note', noteSchema);

app.get('/notes', async (req, res) => {
    const notes = await Note.find();
    res.json(notes);
});

app.post('/notes', async (req, res) => {
    const note = new Note({ content: req.body.content });
    await note.save();
    res.status(201).json(note);
});

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});

