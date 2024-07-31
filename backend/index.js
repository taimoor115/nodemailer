const nodemailer = require("nodemailer");
require("dotenv").config();

const path = require("path");

const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.email",
  port: 587,
  secure: false, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});

const mailOptions = {
  from: {
    name: "Taimoor Hussain",
    address: process.env.EMAIL,
  },
  to: [
    "ghayoorhussain701@gmail.com",
    "bsf2106690@ue.edu.pk",
    "taimoorhussain985@gmail.com",
  ],
  subject: "Practice nodemailer",
  text: "Hey there...",
  attachments: [
    {
      filename: "processArgs.png",
      path: path.join(__dirname, "processArgs.png"),
      contentType: "image/png",
    },
  ],
};

const sendMail = async (transporter, mailOptions) => {
  try {
    await transporter.sendMail(mailOptions);
    console.log("email send successfull");
  } catch (error) {
    console.log(error);
  }
};

sendMail(transporter, mailOptions);
