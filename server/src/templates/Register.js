export const generateRegisterMail = ({ completeName }) => {
  return `<html lang="en">
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

      body {
        background: var(--green-100);
      }

      :root {
        --blue-50: #115968;
        --green-100: #e2f2d5;
        --green-200: #c8e6b0;
        --green-500: #86c15a;
        --white-100: #efefef;
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

      .wrapInfo {
        display: flex;
        flex-wrap: wrap;
        width: 90%;
        margin-left: 5%;
      }

      .ilustrationBox {
        flex-basis: 400px;
        flex-grow: 1;
        display: grid;
        place-content: center;
      }

      .ilustrationSignup {
        width: 100%;
        height: auto;
        filter: drop-shadow(0px 0px 10px #858585);
      }

      .centerBoxSuccess {
        display: grid;
        place-content: center;
        gap: 20px;
        flex-basis: 400px;
        flex-grow: 1;
      }

      .centerBoxSuccess h3 {
        font-weight: 500;
        color: var(--blue-50);
      }

      .centerPartSuccess {
        display: flex;
        flex-direction: row;
        gap: 5px;
      }

      .boxCheck {
        display: grid;
        place-content: center;
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
        margin-bottom: 1em;
      }

      @media screen and (min-width: 700px) {
        .ilustrationSignup {
          width: 500px;
          height: auto;
        }
      }
    </style>
  </head>
  <body>
    <main>
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
          following link: <a class="linkRank" href="">Smart Ranks</a>
        </p>
      </div>

      <div class="wrapInfo">
        <div class="ilustrationBox">
          <img
            class="ilustrationSignup"
            src="https://res.cloudinary.com/df2gu30lb/image/upload/v1718920897/characters/knklmvfecclknwwpaigo.png"
            alt="ilustration"
          />
        </div>

        <div class="centerBoxSuccess">
          <h3>Now you can:</h3>
          <div class="partSuccess">
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
              <p>
                Share your thoughts about our company, products, and services.
              </p>
            </div>
          </div>

          <div class="partSuccess">
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
          </div>

          <div class="partSuccess">
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
          </div>
        </div>
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
