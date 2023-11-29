const mongoose = require("mongoose")

const noticSchema=mongoose.Schema({
  description:{
    type:String,
    require:[true,'description is requier']
  },
  headline:{
    type:String,
    require:[true,'HeadLine is requier']
  },
  fullDate:{
    type:String,
    require:[true,'Date is requier']
  },
})
module.exports=mongoose.model('notice',noticSchema)