export const generateRegisterMail = ({ completeName }) => {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registration Confirmation</title>
  </head>
  <body style="background-color: #e2f2d5; font-family: 'Roboto', sans-serif; font-weight: 300;">
    <main style="max-width: 600px; margin: 0 auto; padding: 20px; background-color: #ffffff; border-radius: 8px; box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.1);">
      <div style="width: 90%; margin-left: 5%;">
        <img src="https://i.ibb.co/WvWyTcf/cropped-Firma-2-removebg-preview.png" alt="logoSmart" style="width: 100px; height: auto;">
      </div>

      <div style="width: 90%; margin-left: 5%; margin-top: 20px;">
        <h3 style="font-weight: 500; color: #115968;">Hi, ${completeName}</h3>
        <p>
          We are delighted to confirm your registration in the <strong style="font-weight: 500;">Smart Talent Feedback System.</strong>
          Your feedback is valuable to us and will help us continuously improve our services. To access the feedback system, simply click on the following link:
          <a href="#" style="font-weight: 400; text-decoration: none; color: #86c15a;">Smart Ranks</a>
        </p>
      </div>

      <div style="display: flex; flex-wrap: wrap; width: 90%; margin-left: 5%; margin-top: 20px;">
        <div style="flex-basis: 50%; flex-grow: 1; display: grid; place-content: center;">
          <img src="https://res.cloudinary.com/df2gu30lb/image/upload/v1718920897/characters/knklmvfecclknwwpaigo.png" alt="illustration" style="width: 100%; height: auto; filter: drop-shadow(0px 0px 10px #858585);">
        </div>

        <div style="flex-basis: 50%; flex-grow: 1; display: grid; place-content: center;">
          <h3 style="font-weight: 500; color: #115968;">Now you can:</h3>
          <div style="display: flex; flex-direction: column; gap: 10px;">
            <div style="display: flex; gap: 5px; align-items: center;">
              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-check" width="23" height="23" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M5 12l5 5l10 -10"/>
              </svg>
              <p>Share your thoughts about our company, products, and services.</p>
            </div>
            
            <div style="display: flex; gap: 5px; align-items: center;">
              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-check" width="23" height="23" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M5 12l5 5l10 -10"/>
              </svg>
              <p>Rate your experience with Smart Talent.</p>
            </div>
            
            <div style="display: flex; gap: 5px; align-items: center;">
              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-check" width="23" height="23" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M5 12l5 5l10 -10"/>
              </svg>
              <p>Suggest improvements and new ideas.</p>
            </div>
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
