// Import the nodemailer module. Nodemailer is a module for Node.js to send emails.
import nodemailer from "nodemailer";

// Get the email and password from environment variables.
// These are typically set in a .env file or through the hosting environment.
const email = process.env.GOOGLE_EMAIL; // Your Gmail email address
const pass = process.env.GOOGLE_APP_KEY; // Your Gmail app-specific password

/**
 * The transporter object configured with Gmail service.
 * This transporter is used to send emails through the specified Gmail account.
 *
 * Usage:
 * transporter.sendMail(mailOptions, callback);
 */
const transporter = nodemailer.createTransport({
  // Specify the email service to use. In this case, we're using Gmail.
  service: "gmail",
  // Define the authentication credentials.
  auth: {
    user: email, // The Gmail email address to send from
    pass, // The app-specific password for the Gmail account
  },
});

export default transporter;
