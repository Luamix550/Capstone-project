import transporter from "../config/NodeMailer.js";
import User from "../models/user.model.js"; // Import the User model
/**
 * Sends an email notification when the status of feedback changes.
 * @param {string} userId - The ID of the user to notify.
 * @returns {Promise<boolean>} - Returns true if the email was sent successfully, false otherwise.
 */
export const mailByStatusFeedBack = async (userId) => {
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