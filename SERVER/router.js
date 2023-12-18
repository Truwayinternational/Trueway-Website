const express = require("express");
const BlogModel = require("./models/BlogModel");
const sendEmail = require("./sendEmail");
const AdminModel = require("./models/AdminModel");
const router = express.Router()
const bcrypt = require('bcrypt');
const upload = require("./fileUpload");
const auth = require('./middlewars/auth')


const fs = require('fs').promises
const jwt = require('jsonwebtoken')



// contact form submission into Gmail
router.post("/contact", async (req, res) => {
  try {
    const {name, number, email, message} = req.body
    const toMail = "tvm@truewayinternational.com"
    const subject = "Trueway Website Contact Form Submission"
    const html = `
          <p>NAME : ${name}</p>
          <p>PHONE NUMBER : ${number}</p>
          <p>EMAIL ADDRESS : ${email}</p>
          <p>MESSAGE : ${message}</p>
        `
    const success = await sendEmail(email, toMail, subject, html)
        if (success) {
        res.json({ status: "Form submitted successfully" }); 
        } else {
          res.json({ status: "ERROR" });
        }
  } catch (error) {
    console.log(error)
    
  }
}) 


// form submission from main home page (Form-2)
router.post("/", async (req, res) => {
  try {
    const {name, number, email, subject, message} = req.body
    const toMail = "tvm@truewayinternational.com"
    const formSubject = "Trueway Website Services Enquiry Form Submission"
    const html = `
          <p>NAME : ${name}</p>
          <p>PHONE NUMBER : ${number}</p>
          <p>EMAIL ADDRESS : ${email}</p>
          <p>SUBJECT : ${subject}</p>
          <p>MESSAGE : ${message}</p>
        `
    const success = await sendEmail(email, toMail, formSubject, html)
        if (success) {
        res.json({ status: "Form submitted successfully" }); 
        } else {
          res.json({ status: "ERROR" });
        }
  } catch (error) {
    console.log(error)
    
  }
}) 



// BLOG Router
// blog form page here
router.post("/add-blog",auth, async (req, res) => {
  try {
    const {title, content, uploaded, metaTitle, metaDescription} = req.body
    const newBlog = await BlogModel.create({
      title: title,
      content: content,
      image: uploaded,
      metaTitle: metaTitle,
      metaDescription: metaDescription
    })
    res.json({message: "blog added successfully"})
  } catch (error) {
    console.log(error)
  }
})


// admin login 
router.post("/admin", async (req, res) => {
  try {
    const {email, password} = req.body
    const admin = await AdminModel.findOne({
      email:email
    })
    if (!admin) {
      throw Error("Admin not found");
    }

    const auth = await bcrypt.compare(password, admin.password)

    if (!auth) {
      throw { status: 401, message: 'Incorrect password.' };
    }

    const token = jwt.sign({id:admin._id},process.env.JWT_SECRET,{})
    
    res.json({id:admin._id, token:token, email:admin.email })
  } catch (error) {
    console.log(error)
    res.status(error.status || 500).json({
      name: error.name || 'Internal Server Error',
      message: error.message || 'Something went wrong on the server.',
      stack: error.stack
  });
  }
})


// verify admin for navigate
router.get("/verify",auth, async (req, res) => {
  try {
    const adminId = req.adminId
      const admin = await AdminModel.findById(adminId, {
        password:0
      })
      if (!admin) {
        // throw Error("Admin not found");
        res.json(null)
      }
      res.json({id:admin._id, token:req.token, email:admin.email, success:true })

  } catch (error) {
    console.log(error)
  }
})


// admin blogs 
router.get("/admin/blogs",auth, async (req, res) => {
  try {
    const blogs = await BlogModel.find({})
    res.json(blogs)
  } catch (error) {
    console.log(error)
  }
})

// admin single blog 
router.get("/admin/blogs/:blogId",auth, async (req, res) => {
  try {
    const blog = await BlogModel.findById(req.params.blogId)
    res.json(blog)
  } catch (error) {
    console.log(error)
  }
})

// admin edit blog
router.put("/admin/blogs/:blogId",auth, async (req, res) => {
  try {
    const {title, content, uploaded, metaTitle, metaDescription} = req.body
    const blog = await BlogModel.findByIdAndUpdate(req.params.blogId, {
      $set:{
        title: title,
        content: content,
        image: uploaded,
        metaTitle: metaTitle,
        metaDescription: metaDescription
      }
    })
    res.json(blog)
  } catch (error) {
    console.log(error)
  }
})


// admin delete blog
router.delete("/admin/blogs/:blogId",auth, async (req, res) => {
  try {
    const blog = await BlogModel.findByIdAndDelete(req.params.blogId)
    const imagePath = `./uploads/${blog.image}`;
    // Check if the file exists
    await fs.access(imagePath);
    // Delete the file
    await fs.unlink(imagePath);
    res.json(blog)
  } catch (error) {
    console.log(error)
  }
})


// image upload
router.post("/upload",auth, upload.single('image'), async (req, res) => {
  try {
    const file = req.file
    res.json(file)
  } catch (error) {
    console.log(error)
  }
})

// image deleted
router.delete("/delete-image/:filename",auth, async (req, res) => {
  try {
    const filename = req.params.filename
    // Specify the path where your images are stored
    const imagePath = `./uploads/${filename}`;
    // Check if the file exists
    await fs.access(imagePath);
    // Delete the file
    await fs.unlink(imagePath);

    res.status(200).json({ message: 'Image deleted successfully.' });
  } catch (error) {
    console.log(error)
  }
})



// single blog user side
router.get("/blogs/:blogId", async (req, res) => {
  try {
    const blog = await BlogModel.findById(req.params.blogId)
    res.json(blog)
  } catch (error) {
    console.log(error)
  }
})

// search single blog
  router.get("/blogs", async (req, res) => {
    try {
      const search = req.query.search || ""
      const limit = req.query.limit
      const blogs = await BlogModel
        .find({
          title: { $regex: search, $options: 'i' }         
      }).sort({ createdAt: -1 }).limit(limit)
      res.json(blogs)
    } catch (error) {
      console.log(error)
    }
  })



module.exports = router