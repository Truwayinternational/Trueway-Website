const mongoose = require("mongoose")
const blogSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    image:{
        type:String,
        
    },
    content:{
        type:String,
        required:true
    },
    metaTitle:{
        type:String
    },
    metaDescription:{
        type:String
    }

}, {
    timestamps:true
})


const BlogModel = mongoose.model('blog', blogSchema)
module.exports = BlogModel