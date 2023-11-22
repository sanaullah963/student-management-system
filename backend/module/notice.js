const mongoose = require("mongoose")

const noticSchema=mongoose.Schema({
  description:{
    type:String,
    require:[true,'description is requier']
  },
})
module.exports=mongoose.model('notice',noticSchema)