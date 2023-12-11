const multer = require('multer');
const path = require('path')

// Multer (file upload setup)
//creating multer instance based on destination folder
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, `uploads`);
    },
    filename: (req, file, cb) => {
        const originalname = path.parse(file.originalname);
        cb(null, `image_${Date.now()}${originalname.ext}`);
    },
});
const upload = multer({ storage: storage });

module.exports = upload;