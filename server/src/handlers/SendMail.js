import transporter from "../config/NodeMailer.js";
import User from "../models/user.model.js"; // Import the User model

// Import Templates email
import { generateChangeStatusMail } from "../templates/ChangeStatus.js";
import { generateRegisterMail } from "../templates/Register.js";
import { generateFeedback } from "../templates/createFeedback.js";

/**
 * Sends an email notification when the status of feedback changes.
 * @param {string} userId - The ID of the user to notify.
 * @returns {Promise<boolean>} - Returns true if the email was sent successfully, false otherwise.
 */
export const mailByCreatedFeedBack = async (userId, feedbackId) => {
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
    const content = generateFeedback({
      feedbackId: feedbackId,
      completeName: `${name} ${lastname}`,
    });

    // Send the email using the transporter
    const data = await transporter.sendMail({
      from: `"Smart Talent" <${process.env.GOOGLE_EMAIL}>`, // Sender's email
      to: email, // Recipient's email
      subject: "Your Feedback Has Been Successfully Submitted", // Email subject
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
    if (!detailUser) throw new Error("User not found"); // Throw an error if the user is not found

    // Destructure the user's name, lastname, and email
    const { name, lastname, email } = detailUser;

    // Create the content of the email
    const content = generateChangeStatusMail({
      completeName: `${name} ${lastname}`,
      feedbackTitle: feedback.title,
      newStatus: feedback.status,
      date: date,
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
