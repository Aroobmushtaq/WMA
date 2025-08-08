import { MailtrapClient } from "mailtrap";
import dotenv from "dotenv";

dotenv.config();   

const TOKEN = process.env.mailtrap_api_key;
if (!TOKEN) {
  throw new Error("Mailtrap API token is not set in the environment variables.");
}

const client = new MailtrapClient({
  token: TOKEN,
});

async function sendEmail(to, subject, text) {
  try {
    const response = await client.send({
      from: "Your Name <your_verified_email@yourdomain.com>", // Must be verified in Mailtrap
      to: [{ email: to }],
      subject: subject,
      text: text,
    });
    console.log("Email sent successfully:", response);
  } catch (error) {
    console.error("Error sending email:", error);
  }
}

// Example usage:
sendEmail("recipient@example.com", "Test subject", "Hello from Mailtrap!");
