const generateFeedback = ({ feedbackId, completeName }) => {
  return `
    <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      @import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");

      * {
        margin: 0;
        padding: 0;
        font-family: "Roboto", sans-serif;
        font-weight: 300;
        font-style: normal;
      }

      :root {
        --blue-50: #115968;
        --green-100: #e2f2d5;
        --green-200: #c8e6b0;
        --green-500: #86c15a;
        --white-100: #efefef;
      }

      .mainMail {
        min-height: 100dvh;
        width: 100%;
        background: var(--green-100);
      }

      .headerLogo {
        width: 90%;
        margin-left: 5%;
      }

      .logoSmart {
        width: 100px;
        height: auto;
      }

      .boxIntroduction {
        width: 90%;
        margin-left: 5%;
        margin-bottom: 1em;
      }

      .greeting {
        font-weight: 500;
        color: var(--blue-50);
        margin-bottom: 1em;
      }

      .nameCompany {
        font-weight: 500;
      }

      .linkRank {
        font-weight: 400;
        text-decoration: none;
        color: var(--green-500);
      }

      .wrapInfo {
        display: flex;
        flex-direction: column;
        width: 90%;
        margin-left: 5%;
      }

      .centerBoxSuccess {
        display: flex;
        flex-direction: column;
        gap: 20px;
      }

      .preFinalPreview {
        width: 90%;
        margin-left: 5%;
        margin-top: 30px;
        display: flex;
        flex-direction: column;
        gap: 5px;
      }

      .preFinalPreview h3 {
        font-weight: 500;
        color: var(--blue-50);
      }

      .final {
        width: 90%;
        margin-left: 5%;
        margin-top: 2em;
        padding-bottom: 2em;
      }

      @media screen and (max-width: 700px) {
        .ilustrationSignup {
          width: 100%;
          height: auto;
        }

        .centerBoxSuccess {
          flex-basis: 0;
        }

        .ilustrationBox {
          justify-content: flex-start;
        }

        .mainMail {
          width: 100%;
        }
      }
    </style>
  </head>
  <body>
    <main class="mainMail">
      <div class="headerLogo">
        <img
          src="https://i.ibb.co/WvWyTcf/cropped-Firma-2-removebg-preview.png"
          alt="logoSmart"
          class="logoSmart"
        />
      </div>

      <div class="boxIntroduction">
        <h3 class="greeting">Hi, ${completeName}</h3>
        <p>
          We would like to sincerely thank you for taking the time to provide us
          with your valuable feedback through our application. Your opinion is
          essential to us and helps us to keep improving.
        </p>

        <p>You can follow the status of your feedback <a class="linkRank" href="http://localhost:3000/feedback/${feedbackId}">here</a></p>
      </div>

      <div class="preFinalPreview">
        <h3>Your participation is important to us.</h3>
        <p>We thank you in advance for your time and feedback.</p>
      </div>

      <div class="final">
        <p>Sincerely, The Smart Talent Team</p>
      </div>
    </main>
  </body>
</html>
    `;
};
