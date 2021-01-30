require("dotenv").config();

module.exports = ({ env }) => ({
  email: {
    provider: "nodemailer",
    providerOptions: {
      host: env("SMTP_HOST", process.env.SMTP_HOST),
      port: env("SMTP_PORT", process.env.SMTP_PORT),
      auth: {
        user: env("SMTP_USERNAME", process.env.SMTP_USERNAME),
        pass: env("SMTP_PASSWORD", process.env.SMTP_PASSWORD),
      },
      tls: { rejectUnauthorized: false },
      // ... any custom nodemailer options
    },
    settings: {
      defaultFrom: process.env.SMTP_USERNAME,
      defaultReplyTo: process.env.SMTP_USERNAME,
    },
  },
});
