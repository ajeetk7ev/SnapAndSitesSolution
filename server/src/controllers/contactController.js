import Contact from '../models/Contact.js';
import * as Brevo from '@getbrevo/brevo';
import dotenv from 'dotenv';

dotenv.config();

let apiInstance = new Brevo.TransactionalEmailsApi();
if (process.env.BREVO_API_KEY) {
    let apiKey = apiInstance.authentications['apiKey'];
    apiKey.apiKey = process.env.BREVO_API_KEY;
}

export const submitContact = async (req, res) => {
    try {
        const { name, email, subject, message } = req.body;

        if (!name || !email || !subject || !message) {
            return res.status(400).json({
                success: false,
                message: 'All fields are required'
            });
        }

        const newContact = new Contact({ name, email, subject, message });
        await newContact.save();

        // Send Email using Brevo
        if (process.env.BREVO_API_KEY) {
            const sendSmtpEmail = new Brevo.SendSmtpEmail();
            sendSmtpEmail.subject = `New Contact Inquiry: ${subject}`;
            sendSmtpEmail.htmlContent = `
                <h3>New Contact Inquiry</h3>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Subject:</strong> ${subject}</p>
                <p><strong>Message:</strong> ${message}</p>
            `;
            sendSmtpEmail.sender = { name: "AppAndSites", email: process.env.FROM_EMAIL || 'no-reply@appandsites.com' };
            sendSmtpEmail.to = [{ email: process.env.TO_EMAIL || 'admin@appandsites.com' }];
            sendSmtpEmail.replyTo = { email: email, name: name };

            await apiInstance.sendTransacEmail(sendSmtpEmail);
        }

        res.status(201).json({
            success: true,
            message: 'Inquiry submitted successfully'
        });
    } catch (error) {
        console.error('Contact submission error:', error);
        res.status(500).json({
            success: false,
            message: 'Internal server error'
        });
    }
};
