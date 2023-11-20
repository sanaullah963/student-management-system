const mongoose = require("mongoose");
const studentSchema = mongoose.Schema({
  name: {
    type: String,
    require: [true, "name are requier"],
  },
  roll: {
    type: String,
    require: [true, "roll are requier"],
  },
  technology: {
    type: String,
    require: [true, "technology are requier"],
  },
  fName: {
    type: String,
    require: [true, "father name are requier"],
  },
  mName: {
    type: String,
    require: [true, "mother name are requier"],
  },
  address: {
    type: String,
    require: [true, "address name are requier"],
  },
  dateOfBirth: {
    type: String,
    require: [true, "birth date is are requier"],
  },
  number: {
    type: String,
    require: [true, "phone are requier"],
  },
  secendNuber: {
    type: String,
    require: [true, "phone are requier"],
  },
  guardian: {
    type: String,
    require: [true, "Guardian phone number are requier"],
  },
  section: {
    type: String,
    require: [true, "section are requier"],
  },
  // stdImage: {
  //   type: String,
  //   require: [true, "image are requier"],
  // },
});

module.exports = mongoose.model('Student',studentSchema);