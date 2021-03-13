import nodemailer from "nodemailer";
import { google } from "googleapis";
import multer from "multer";

export const config = {
  api: {
    bodyParser: false,
  },
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

const upload = new multer().single("file");

export default async (req, res) => {
  upload(req, res, async function (err) {
    if (err instanceof multer.MulterError) {
      // A Multer error occurred when uploading.
      res.status(400).send(false);
    } else if (err) {
      // An unknown error occurred when uploading.
      res.status(400).send(false);
    } else {
      // Everything went fine.
      try {
        let result = await sendMail(req);
        res.status(200).send(result);
      } catch (error) {
        res.status(500).send(false);
      }
    }
  });
};

async function sendMail(req) {
  try {
    const accessToken = await oauth2Client.getAccessToken();

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
      subject: `${req.body.fullName} Nouveau client`,
      generateTextFromHTML: true,
      html: `<p>Nom complet: ${req.body.fullName}</p></br>
      <p>E-mail: ${req.body.email}</p></br></br>
      <h2>Message</h2></br>
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
    return false;
  }
}
