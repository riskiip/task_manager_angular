const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  title: {
    type: String,
    minlength: 1,
    trim: true,
    required: true,
  },
  _listId: {
    type: mongoose.Types.ObjectId,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false
  }
});

const Task = mongoose.model("Task", TaskSchema);

module.exports = { Task };
