export const generateRegisterMail = ({ completeName }) => {
  return `<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
      rel="stylesheet"
    />
    <title>Document</title>

    <style>
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
        height: 100%;
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

      .centerBoxSuccess {
        margin-top: 1em;
        display: flex;
        flex-direction: column;
        gap: 20px;
      }

      .titleCan {
        width: 90%;
        margin-left: 5%;
        margin-top: 1em;
        margin-bottom: 1em;
        font-weight: 500;
        color: var(--blue-50);
      }

      .centerPartSuccess {
        width: 90%;
        margin-left: 5%;
        margin-bottom: 10px;
        display: flex;
        flex-direction: row;
        gap: 5px;
      }

      .partSuccess {
        width: 90%;
        margin-left: 5%;
        display: flex;
        flex-direction: column;
        gap: 10px;
      }

      .boxCheck {
        display: grid;
        place-content: center;
      }

      .participateTitle {
        width: 90%;
        margin-left: 5%;
        margin-top: 30px;
        font-weight: 500;
        color: var(--blue-50);
      }

      .final {
        width: 90%;
        margin-left: 5%;
        margin-top: 2em;
        padding-bottom: 2em;
      }

      .textParticipate {
        width: 90%;
        margin-left: 5%;
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
          We are delighted to confirm your registration in the
          <strong class="nameCompany">Smart Talent Feedback System.</strong>
          Your feedback is valuable to us and will help us continuously improve
          our services. To access the feedback system, simply click on the
          following link:
          <a class="linkRank" href="https://smartranks.co/">Smart Ranks</a>
        </p>
      </div>

      <h3 class="titleCan">Now you can:</h3>

      <div class="centerPartSuccess">
        <div class="boxCheck">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-check"
            width="23"
            height="23"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#2c3e50"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M5 12l5 5l10 -10" />
          </svg>
        </div>
        <p>Share your thoughts about our company, products, and services.</p>
      </div>

      <div class="centerPartSuccess">
        <div class="boxCheck">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-check"
            width="23"
            height="23"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#2c3e50"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M5 12l5 5l10 -10" />
          </svg>
        </div>
        <p>Rate your experience with Smart Talent.</p>
      </div>

      <div class="centerPartSuccess">
        <div class="boxCheck">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-check"
            width="23"
            height="23"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#2c3e50"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M5 12l5 5l10 -10" />
          </svg>
        </div>
        <p>Suggest improvements and new ideas.</p>
      </div>


      <h3 class="participateTitle">Your participation is important to us.</h3>
      <p class="textParticipate">We thank you in advance for your time and feedback.</p>


      <p class="final">Sincerely, The Smart Talent Team</p>

    </main>
  </body>
</html>`;
};
