import transporter from "../config/NodeMailer.js";
import User from "../models/user.model.js"; // Import the User model
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
                        <li>Title: ${feedback.title}</li>
                        <li>Description: ${feedback.description}</li>
                        <li>New Status: ${feedback.status}</li>
                     </ul>
                     <p>If you have any questions, feel free to reply to this email or visit our support page at <a href="https://smartranks.co/">Smart Rank</a>.</p>
                     <p>Thank you for helping us improve.</p>
                     <p>Best regards,</p>
                     <p>The Smart Talent Feedback System Team</p>
                     <p>Smart Talent</p>`
                     

    // Send the email using the transporter
    const data = await transporter.sendMail({
      from: `"Smart Talent" <${process.env.GOOGLE_EMAIL}>`, // Sender's email
      to: email, // Recipient's email
      subject: "Your Feedback Has Been Successfully Submitted", // Email subject
      text: "The status of your feedback has changed. Thank you!", // Plain text version of the email
      html: content, // HTML version of the email
    });

    // Log the response from the email service
    console.log('Message send:', data.messageId);

    return true; // Return true if the email was sent successfully
  } catch (error) {
    // Log any errors that occur
    console.error('Error sending email:', error);
    return false; // Return false if there was an error
  }
};

export const sendMailRegisterUser = async (user) => {
  try {
    const { name, lastname, email } = user;
    const content = `<p><strong>Dear ${name} ${lastname}</strong>,</p>
                  <p>We are delighted to confirm your registration in the <strong>Smart Talent Feedback System.</strong><br>
                  Your feedback is valuable to us and will help us continuously improve our services.<br>
                  To access the feedback system, simply click on the following link:</p>
                  [Link to feedback system]
                  <br>
                  <p>On this link you can:<br></p>
                  <ul>
                    <li>Share your thoughts about our company, products, and services.</li>
                    <li>Rate your experience with Smart Talent.</li>
                    <li>Suggest improvements and new ideas.</li>
                  </ul>
                  <p>Your participation is important to us.</p>
                  <p>We thank you in advance for your time and feedback.</p>
                  <p>Sincerely,</p>
                  <p>The Smart Talent Team</p>`
                  
    const data = await transporter.sendMail({
    from: `"Smart Talent" <${process.env.GOOGLE_EMAIL}>`,
    to: email,
    subject: "Welcome to Smart Talent",
    html: `
          <html>
            <head>
              <link rel="preconnect" href="https://fonts.googleapis.com">
              <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
              <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
              <style>
                body {
                  font-family: "Montserrat", sans-serif;
                }

                p {
                  color: #000;
                }

                ul li {
                  color: #000;
                }
                img {
                  width: 130px;
                  height: 100px;
                }
              </style>
            </head>
            <body>
              ${content}
              <br>
              <img src="https://i.ibb.co/WvWyTcf/cropped-Firma-2-removebg-preview.png" alt="imagenSmart"/>
            </body>
          </html>`,
        });
    console.log('Message send:', data.messageId);
    transporter.close();
    return true;
  }
  catch (error) {
    console.error('Error sending email:', error);
    return false;
  }
}


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
    const content = `<p>Dear ${name} ${lastname},</p>
                    <p>We are writing to inform you about an update regarding your feedback submitted to the Smart Talent Feedback System.</p>
                    <p>Here are the updated details:</p>
                    <ul>
                      <li>Title: ${feedback.title}</li>
                      <li>Description: ${feedback.description}</li>
                      <li>New Status: ${feedback.status}</li>
                      <li>Modification date: ${date}</li>
                    </ul>
                    <p>If you have any questions or need further assistance, please don't hesitate to reply to this email or visit our support page at <a href="https://smartranks.co/">Smart Rank</a>.</p>
                    <p>Thank you for your valuable feedback and continued support.</p>
                    <p>Best regards,</p>
                    <p>The Smart Talent Feedback System Team</p>
                    <p>Smart Talent</p>`
                     

    // Send the email using the transporter
    const data = await transporter.sendMail({
      from: `"Smart Talent" <${process.env.GOOGLE_EMAIL}>`, // Sender's email
      to: email, // Recipient's email
      subject: `Update on Your Feedback: ${feedback.title}`, // Email subject
      text: "The status of your feedback has changed. Thank you!", // Plain text version of the email
      html: content, // HTML version of the email
    });

    // Log the response from the email service
    console.log('Message send:', data.messageId);

    return true; // Return true if the email was sent successfully
  } catch (error) {
    // Log any errors that occur
    console.error('Error sending email:', error);
    return false; // Return false if there was an error
  }
};