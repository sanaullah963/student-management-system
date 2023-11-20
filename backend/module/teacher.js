const mongoose = require("mongoose");

const teacherSchema = mongoose.Schema({
  name: {
    type: String,
    require: [true, "name is requier"],
  },
  technology: {
    type: String,
    require: [true, "technology is requier"],
  },
  designation: {
    type: String,
    require: [true, "designation is requier"],
  },
  address: {
    type: String,
    require: [true, "address is requier"],
  },
  number: {
    type: String,
    require: [true, "number is requier"],
  },
  secendNuber: {
    type: String,
    require: [true, "secendNuber is requier"],
  },
});

module.exports = mongoose.model("Teacher", teacherSchema);
