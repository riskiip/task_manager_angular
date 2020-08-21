const mongoose = require("mongoose");

const ListSchema = new mongoose.Schema({
  title: {
    type: String,
    minlength: 1,
    trim: true,
    required: true,
  },
});

const List = mongoose.model("List", ListSchema);

module.exports = { List };
