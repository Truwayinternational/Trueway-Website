const AdminModel = require("../models/AdminModel");
const jwt = require('jsonwebtoken')


module.exports = async (req, res, next) => {
    try {
        if (!req.headers.authorization || !req.headers.authorization.startsWith('Bearer')) {
            throw Error('Authorisation required')
        }
        let token = req.headers.authorization.split(' ')[1];
        if (!token || token === 'null') {
            throw Error('User token required')
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const admin = await AdminModel.findById(decoded.id, { password: 0 });
        if (!admin) {
            throw Error('admin not exists');
        }
        req.adminId = admin?._id.toString();
        req.token = token
        next();
    } catch (error) {
        console.log("admin auth middleware",error);
        res.status(error.status || 500).json({
            success: false,
            message: "authorisation failed "
        });
    }
}