const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
const cors = require("cors")

const app = express();
app.use(cors())


app.use(express.json());
app.use("/", router);
app.listen(8080, () => console.log("Server is running on port "));

const contactEmail = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "tvm@truewayinternational.com",
    pass: "lxnnzoumsodpcaty",
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

router.post("/contact", (req, res) => {
  const name = req.body.name;
  const number = req.body.number;
  const email = req.body.email;
  const message = req.body.message;
  const mail = {
    from: email,
    to: "tvm@truewayinternational.com",
    subject: "Trueway Website Contact Form Submission ",
    html: `
            <p>Name: ${name}</p>
            <p>Number: ${number}</p>
            <p>Email: ${email}</p>
            <p>Message: ${message}</p>
        `,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json({ status: "ERROR" });
    } else {
      res.json({ status: "Form submitted successfully" });
    }
  });
});
