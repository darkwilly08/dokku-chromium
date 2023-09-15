import axios from 'axios';
import { generatePdf } from 'html-pdf-node';
import EnvVars from '../config/EnvVars';

const pdfAxios = axios.create({
  baseURL: EnvVars.chromeUrl,
});

const mockedContent = `<body>
<style>
    html { -webkit-print-color-adjust: exact; }
    * {
        margin: 0;
        box-sizing: border-box;
        font-family: 'Roboto';
        z-index: 3;
    }

    .slide {
        box-sizing: border-box;
        width: 1280px;
        height: 720px;
        margin: auto;
        padding: 64px;
        position: relative;
        border: 1px solid #242424;
        overflow: hidden;
        background-color: #15415e30;
    }

    .background {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: url("https://user-praesens.vercel.app/_next/static/media/background.2aece783.png") !important;
        background-position: center;
        background-size: cover;
        opacity: .15;
        z-index: 1;
    }

    h1 {
        font-size: 64px;
        margin-bottom: 16px;
        font-weight: 700;
    }

    h2 {
        font-size: 42px;
        font-weight: 500;
    }

    h3 {
        font-size: 32px;
        font-weight: 500;
    }

    h4 {
        font-size: 24px;
        font-weight: 300;
    }

    h5 {
        font-size: 24px;
        font-weight: 500;
    }

    h6 {
        font-size: 20px;
        font-weight: 400;
    }

    .header {
        display: flex;
        width: 100%;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 48px;
    }

    .main-slide {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
    }

    .slide img {
        position: absolute;
        bottom: 32px;
        right: 64px;
        height: 64px;
        width: auto;
    }

    .info-slide .body {
        padding-top: 64px;
    }

    .info-slide .body p {
        font-size: 32px;
        line-height: 32px;
        font-weight: 500;
        margin-bottom: 16px;
        white-space: pre-wrap;
        text-align: center;
    }

    .reportSlide .body {
        padding-top: 64px;
    }

    .reportSlide .body .cards {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        margin-top: 36px;
    }

    .reportSlide .body .card {
        width: 31%;
        border-radius: 12px;
        border: 1px solid #242424;
        padding: 24px;
        text-align: center;
        box-shadow: 4px 4px 12px #24242430
    }

    .reportSlide .body .card p {
        margin-top: 20px;
        text-align: left;
        font-weight: 300;
        font-size: 16px;
    }

    .reportSlide .body .card h6 {
        margin-bottom: 20px;
    }

    .last-slide .body p {
        text-align: left;
        font-size: 24px;
        font-weight: 500;
        margin-bottom: 12px;
        white-space: pre-wrap;
    }

    .last-slide .contact p {
        margin-top: 12px;
    }
</style>
 <div class="slide main-slide">
 <h1>Syngenta Seeds - Salud emocional</h1>
 <h2>Syngenta</h2>
 <img src="https://praesens.apps.techinside.cloud/public/logo.png" alt="Praesens">
 <div class="background"></div>
</div><div class="slide info-slide">
 <div class="header">
 <h3>Syngenta Seeds - Salud emocional</h3>
 <h4>Syngenta</h4>
</div>
 <div class="body">
     <p></p>
     <img src="https://praesens.apps.techinside.cloud/public/logo.png" alt="Praesens">
     <div class="background"></div>
 </div>

</div><div class="slide reportSlide">
 <div class="header">
 <h3>Syngenta Seeds - Salud emocional</h3>
 <h4>Syngenta</h4>
</div>

 <div class="body">
     <h4>Cristina Bornatici - cristina.bornatici@syngenta.com</h4>
     <div class="cards">
         <div class="card" style="background-color: #FFF2CF !important; color: #836A27;">
 <h6>Riesgo de trastorno de ansiedad</h6>
 <h5>Riesgo moderado</h5>
 <p></p>
</div><div class="card" style="background-color: #FFF2CF !important; color: #836A27;">
 <h6>Riesgo de trastorno de ánimo</h6>
 <h5>Riesgo moderado</h5>
 <p></p>
</div><div class="card" style="background-color: #FFF2CF !important; color: #836A27;">
 <h6>Resiliencia</h6>
 <h5>Resiliencia media</h5>
 <p></p>
</div>
     </div>
     <img src="https://praesens.apps.techinside.cloud/public/logo.png" alt="Praesens">
     <div class="background"></div>
 </div>
</div><div class="slide last-slide">
 <div class="header">
 <h3>Syngenta Seeds - Salud emocional</h3>
 <h4>Syngenta</h4>
</div>
 <div class="body">
     <p></p>
     <div class="contact">
     <h3>Contacto</h3>
     <p></p>
 </div>
 <img src="https://praesens.apps.techinside.cloud/public/logo.png" alt="Praesens">
 <div class="background"></div>
 </div>
</div>

</body>`;

export const generate = () =>
  pdfAxios
    .post<ArrayBuffer>(
      '/pdf',
      {
        html: mockedContent,
        options: {
          printBackground: true,
          width: 1280,
          height: 720,
        },
      },
      { responseType: 'arraybuffer' },
    )
    .then((res) => res);
// Si preferis devolver base64, te aumenta el peso 33%, no lo veo necesario
// .then(res => Buffer.from(res.data, 'binary').toString('base64'))
