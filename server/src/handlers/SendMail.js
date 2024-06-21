import transporter from "../config/NodeMailer.js";
import User from "../models/user.model.js"; // Import the User model

// Import Templates email
import { generateChangeStatusMail } from "../templates/ChangeStatus.js";
import { generateRegisterMail } from "../templates/Register.js";

/**
 * Sends an email notification when the status of feedback changes.
 * @param {string} userId - The ID of the user to notify.
 * @returns {Promise<boolean>} - Returns true if the email was sent successfully, false otherwise.
 */
export const mailByCreatedFeedBack = async (userId, feedback) => {
  try {
    // Fetch the user's details by their ID, selecting only name, lastname, and email fields
    const detailUser = await User.findById(
      userId,
      "name lastname email"
    ).lean();

    // Check if the user exists
    if (!detailUser) {
      throw new Error("User not found"); // Throw an error if the user is not found
    }

    // Destructure the user's name, lastname, and email
    const { name, lastname, email } = detailUser;

    // Create the content of the email
    const content = `<p>Dear ${name} ${lastname},</p>
                     <p>Thank you for submitting your feedback to the Smart Talent Feedback System. We are pleased to confirm that your feedback has been successfully posted.</p>
                     <p>Your input is valuable to us and helps improve our services.</p>
                     <ul>
                      <h1>Feedback Details:</h1>
                        <li>Modification date: ${date}</li>
                        <li>Title: ${feedback.title}</li>
                        <li>New Status: ${feedback.status}</li>
                     </ul>
                     <p>If you have any questions, feel free to reply to this email or visit our support page at <a href="https://smartranks.co/">Smart Rank</a>.</p>
                     <p>Thank you for helping us improve.</p>
                     <p>Best regards,</p>
                     <p>The Smart Talent Feedback System Team</p>
                     <p>Smart Talent</p>`;

    // Send the email using the transporter
    const data = await transporter.sendMail({
      from: `"Smart Talent" <${process.env.GOOGLE_EMAIL}>`, // Sender's email
      to: email, // Recipient's email
      subject: "Subject: Your Feedback Has Been Successfully Submitted", // Email subject
      text: "The status of your feedback has changed. Thank you!", // Plain text version of the email
      html: content, // HTML version of the email
    });

    // Log the response from the email service
    console.log("Message send:", data.messageId);

    return true; // Return true if the email was sent successfully
  } catch (error) {
    // Log any errors that occur
    console.error("Error sending email:", error);
    return false; // Return false if there was an error
  }
};

export const sendMailRegisterUser = async (user) => {
  try {
    const { name, lastname, email } = user;

    const content = generateRegisterMail({
      completeName: `${name} ${lastname}`,
    });

    const data = await transporter.sendMail({
      from: `"Smart Talent" <${process.env.GOOGLE_EMAIL}>`,
      to: email,
      subject: "Welcome to Smart Talent",
      html: content,
    });
    console.log("Message send:", data.messageId);
    transporter.close();
    return true;
  } catch (error) {
    console.error("Error sending email:", error);
    return false;
  }
};

export const mailByStatusFeedBack = async (userId, date, feedback) => {
  try {
    // Fetch the user's details by their ID, selecting only name, lastname, and email fields
    const detailUser = await User.findById(
      userId,
      "name lastname email"
    ).lean();

    // Check if the user exists
    if (!detailUser) {
      throw new Error("User not found"); // Throw an error if the user is not found
    }

    // Destructure the user's name, lastname, and email
    const { name, lastname, email } = detailUser;

    // Create the content of the email
    const content = generateChangeStatusMail({
      completeName: `${name} ${lastname}`,
      feedbackId: feedback.title,
      newStatus: "",
    });

    // Send the email using the transporter
    const data = await transporter.sendMail({
      from: `"Smart Talent" <${process.env.GOOGLE_EMAIL}>`, // Sender's email
      to: email, // Recipient's email
      subject: `Update on Your Feedback: ${feedback.title}`, // Email subject
      text: "The status of your feedback has changed. Thank you!", // Plain text version of the email
      html: content, // HTML version of the email
    });

    // Log the response from the email service
    console.log("Message send:", data.messageId);

    return true; // Return true if the email was sent successfully
  } catch (error) {
    // Log any errors that occur
    console.error("Error sending email:", error);
    return false; // Return false if there was an error
  }
};
