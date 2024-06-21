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
    </head>
    <body style="background-color: #e2f2d5; font-family: 'Roboto', sans-serif; font-weight: 300;">
      <main style="max-width: 600px; margin: 0 auto; padding: 20px; background-color: #ffffff; border-radius: 8px; box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.1);">
        <div style="width: 90%; margin-left: 5%;">
          <img src="https://i.ibb.co/WvWyTcf/cropped-Firma-2-removebg-preview.png" alt="logoSmart" style="width: 100px; height: auto;">
        </div>
  
        <div style="width: 90%; margin-left: 5%; margin-top: 20px;">
          <h3 style="font-weight: 500; color: #115968;">Hi, ${completeName}</h3>
          <p>Your feedback tagged with <strong>${feedbackTitle}</strong> has changed its status:</p>
        </div>
  
        <div style="display: flex; flex-wrap: wrap; width: 90%; margin-left: 5%; margin-top: 20px;">
          <div style="flex-basis: 50%; flex-grow: 1; display: grid; place-content: center;">
            <img src="https://res.cloudinary.com/df2gu30lb/image/upload/v1718984464/characters/ihiqtywa0eynxzie8mmt.png" alt="illustration" style="width: auto; height: auto; filter: drop-shadow(0px 0px 10px #858585);">
          </div>
  
          <div style="flex-basis: 50%; flex-grow: 1; display: flex; align-items: center; padding-left: 20px;">
            <div style="width: 100%;">
              <h2 style="font-weight: 400; color: #115968; margin-bottom: 5px;">Status</h2>
              <p style="margin-top: 0;">${newStatus}</p>
              <h2 style="font-weight: 400; color: #115968; margin-bottom: 5px;">Modification Date</h2>
              <p style="margin-top: 0;">${date}</p>
            </div>
          </div>
        </div>
  
        <div style="width: 90%; margin-left: 5%; margin-top: 20px;">
          <h3 style="font-weight: 500; color: #115968;">Your participation is important to us.</h3>
          <p>We thank you in advance for your time and feedback.</p>
        </div>
  
        <div style="width: 90%; margin-left: 5%; margin-top: 20px; margin-bottom: 20px;">
          <p>Sincerely, The Smart Talent Team</p>
        </div>
      </main>
    </body>
    </html>
  `;
};
