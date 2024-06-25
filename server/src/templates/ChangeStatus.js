export const generateChangeStatusMail = ({
  completeName,
  newStatus,
  feedbackTitle,
  date
}) => {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Change Status Notification</title>
      <style>
        body {
          background-color: #e2f2d5;
          font-family: 'Roboto', sans-serif;
          font-weight: 300;
          margin: 0;
          padding: 0;
        }
        .container {
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
          background-color: #ffffff;
          border-radius: 8px;
          box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.1);
        }
        .header {
          display: flex;
          justify-content: center;
          margin-bottom: 20px;
        }
        .header img {
          width: 100px;
          height: auto;
        }
        .content {
          margin-left: 5%;
          margin-top: 20px;
        }
        .greeting {
          font-weight: 500;
          color: #115968;
        }
        .status-info {
          display: flex;
          margin-top: 20px;
        }
        .status-info img {
          width: 50%;
          height: auto;
          filter: drop-shadow(0px 0px 10px #858585);
        }
        .status-details {
          flex-grow: 1;
          padding-left: 20px;
        }
        .status-details h2 {
          font-weight: 100;
          color: #115968;
          margin-bottom: 5px;
        }
        .footer {
          margin-top: 20px;
          color: #115968;
        }
      </style>
    </head>
    <body>
      <main class="container">
        <div class="header">
          <img src="https://i.ibb.co/WvWyTcf/cropped-Firma-2-removebg-preview.png" alt="logoSmart">
        </div>
  
        <div class="content">
          <h3 class="greeting">Hi, ${completeName}</h3>
          <p>Your feedback tagged with <strong>${feedbackTitle}</strong> has changed its status:</p>
  
          <div class="status-info">
            <div class="status-details">
              <h2>Status</h2>
              <p>${newStatus}</p>
              <h2>Modification Date</h2>
              <p>${date}</p>
            </div>
          </div>
  
          <div>
            <h3 class="greeting">Your participation is important to us.</h3>
            <p>We thank you in advance for your time and feedback.</p>
          </div>
  
          <div class="footer">
            <p>Sincerely, The Smart Talent Team</p>
          </div>
        </div>
      </main>
    </body>
    </html>
  `;
};
