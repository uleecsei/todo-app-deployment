const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const todoSchema = new Schema({
    id: {
        type: Number,
        required: true,
    },
    userId: {
        type: Number,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    completed: {
        type: Boolean,
        required: true,
    }
});

const Todo = mongoose.model('Todo', todoSchema);
module.exports = Todo;
