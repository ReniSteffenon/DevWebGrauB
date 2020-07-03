const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Task = new Schema(
    {
        description: { type: String, required: true },
        done: { type: Boolean, required: true },
    },
    { timestamps: true },
)

module.exports = mongoose.model('tasks', Task)
