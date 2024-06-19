import User from "../models/user.model.js"; // Import the User model
import transporter from "../controllers/mail.controllers.js"; // Import the mail transporter

/**
 * Sends an email notification when the status of feedback changes.
 * @param {string} userId - The ID of the user to notify.
 * @returns {Promise<boolean>} - Returns true if the email was sent successfully, false otherwise.
 */
export const MailByStatusFeedBack = async (userId) => {
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
                     <p>The status of your feedback has changed.</p>
                     <p>Thank you!</p>`;

    // Send the email using the transporter
    const data = await transporter.sendMail({
      from: `"Smart Talent" <${process.env.GOOGLE_EMAIL}>`, // Sender's email
      to: email, // Recipient's email
      subject: "The status of your feedback changed", // Email subject
      text: "The status of your feedback has changed. Thank you!", // Plain text version of the email
      html: content, // HTML version of the email
    });

    // Log the response from the email service
    console.log(data);

    return true; // Return true if the email was sent successfully
  } catch (error) {
    // Log any errors that occur
    console.log(error);
    return false; // Return false if there was an error
  }
};
