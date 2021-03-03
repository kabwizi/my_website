import nodemailer from "nodemailer";
import { google } from "googleapis";
import multer from "multer";

export const config = {
  api: {
    bodyParser: false,
  },
};

const upload = new multer().single("file");

export default async (req, res) => {
  upload(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      // A Multer error occurred when uploading.
      console.log("Multer err");
      res.end();
    } else if (err) {
      // An unknown error occurred when uploading.
      console.log("unknown err");
      res.end();
    }
    // Everything went fine.
    sendMail(req)
      .then((result) => {
        console.log("envoyé ", result);
        res.send(result);
      })
      .catch((error) => {
        console.log("error: ", console.error());
        res.send(result);
      });
  });
};

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRETE = process.env.CLIENT_SECRETE;
const REDIRECT_URL = process.env.REDIRECT_URL;
const REFRESH_TOKEN = process.env.REFRESH_TOKEN;
const oauth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRETE,
  REDIRECT_URL
);
oauth2Client.setCredentials({
  refresh_token: REFRESH_TOKEN,
});

async function sendMail(req) {
  try {
    const accessToken = oauth2Client.getAccessToken();
    const smtpTransport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: "kabwiziserge@gmail.com",
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRETE,
        refreshToken: REFRESH_TOKEN,
        accessToken: accessToken,
      },
    });

    let adminMailOptions = {
      from: req.body.email,
      to: "kabwiziserge@gmail.com",
      subject: req.body.subject,
      generateTextFromHTML: true,
      html: `<h1>${req.body.fullName}, Nouveau client</h1></br>
      <p>Nom complet: ${req.body.fullName}</p></br>
      <p>E-mail: ${req.body.email}</p></br>
      <h2>${req.body.fullName}, Nouveau client</h2></br>
      <p>${req.body.message}</p>`,
    };
    if (req.file) {
      adminMailOptions.attachments = [
        {
          filename: req.file.originalname,
          content: new Buffer.from(req.file.buffer),
        },
      ];
    }
    await smtpTransport.sendMail(adminMailOptions);

    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}
