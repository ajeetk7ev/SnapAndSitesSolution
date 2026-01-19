import Contact from '../models/Contact.js';
import sgMail from '@sendgrid/mail';
import dotenv from 'dotenv';

dotenv.config();

if (process.env.SENDGRID_API_KEY) {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
}

export const submitContact = async (req, res) => {
    try {
        const { name, email, subject, message } = req.body;

        if (!name || !email || !subject || !message) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        const newContact = new Contact({ name, email, subject, message });
        await newContact.save();

        // Send Email
        if (process.env.SENDGRID_API_KEY) {
            const msg = {
                to: process.env.TO_EMAIL || 'admin@appandsites.com',
                from: process.env.FROM_EMAIL || 'no-reply@appandsites.com',
                subject: `New Contact Inquiry: ${subject}`,
                text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
                html: `
                    <h3>New Contact Inquiry</h3>
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Subject:</strong> ${subject}</p>
                    <p><strong>Message:</strong> ${message}</p>
                `,
            };

            await sgMail.send(msg);
        }

        res.status(201).json({ message: 'Inquiry submitted successfully' });
    } catch (error) {
        console.error('Contact submission error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
