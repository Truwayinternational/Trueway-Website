const nodemailer = require('nodemailer');
require('dotenv').config();

const sendEmail = async (fromMail, toMail, subject, html) => {
    try {
        const mailTransporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            service: process.env.SMTP_SERVICE,
            port: Number(process.env.SMTP_PORT),
            secure: true,
            requireTLS: true,
            auth: {
                user: process.env.NODEMAILER_USER,
                pass: process.env.NODEMAILER_PASSWORD
            }
        });
        const message = {
            from: fromMail,
            to: toMail,
            subject: subject,
            html: html,
        };
        await mailTransporter.sendMail(message);
        return true;
    } catch (error) {
        console.log('Email sent failed',error.message);
        return false
    }
};

module.exports = sendEmail ;