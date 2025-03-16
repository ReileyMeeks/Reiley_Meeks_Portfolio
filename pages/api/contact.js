// JavaScript version of the contact API endpoint with mailgun-js
import FormData from 'form-data';
import Mailgun from 'mailgun.js';

export default async function handler(req, res) {
  // Only allow POST method
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const data = req.body;
    
    // Validate the data
    if (!data.from_name || !data.from_email || !data.contact_reason || !data.message) {
      return res.status(400).json({ message: 'Missing required fields' });
    }
    
    // Simple email validation
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(data.from_email)) {
      return res.status(400).json({ message: 'Invalid email address' });
    }

    // Get environment variables with error checking
    const apiKey = process.env.MAILGUN_API_KEY;
    if (!apiKey) {
      console.error('MAILGUN_API_KEY is not defined in environment variables');
      return res.status(500).json({ message: 'Server configuration error: Missing API key' });
    }
    
    const sender = process.env.MAILGUN_SENDER;
    const recipient = process.env.MAILGUN_RECIPIENT;
    
    if (!sender || !recipient) {
      console.error('Sender or recipient email is missing');
      return res.status(500).json({ message: 'Server configuration error: Missing sender or recipient' });
    }

    console.log('Using Mailgun with API Key:', apiKey.substring(0, 8) + '...');
    
    // Initialize Mailgun client using the example format
    const mailgun = new Mailgun(FormData);
    const client = mailgun.client({ 
      username: 'api', 
      key: apiKey
    });
    
    // Extract domain from sender email if possible
    const domain = sender.split('@')[1];
    console.log('Using domain extracted from sender email:', domain);
    
    console.log('Sending email with the following configuration:', {
      sender,
      recipient,
      subject: `New Contact Form Submission: ${data.contact_reason}`,
    });

    // Create the email payload according to example
    const messageData = {
      from: sender,
      to: recipient,
      subject: `New Contact Form Submission: ${data.contact_reason}`,
      text: `
Name: ${data.from_name}
Email: ${data.from_email}
Reason: ${data.contact_reason}

Message:
${data.message}

This email was sent from the contact form on your website.
      `,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${data.from_name}</p>
        <p><strong>Email:</strong> ${data.from_email}</p>
        <p><strong>Reason:</strong> ${data.contact_reason}</p>
        <h3>Message:</h3>
        <p>${data.message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p><small>This email was sent from the contact form on your website.</small></p>
      `,
    };

    // Send email using the example approach
    try {
      console.log('Attempting to send email via Mailgun...');
      const response = await client.messages.create(domain, messageData);
      console.log('Email sent successfully:', response);
      
      // Return success response
      return res.status(200).json({ 
        message: 'Email sent successfully',
        id: response.id
      });
    } catch (mailgunError) {
      console.error('Mailgun error:', mailgunError);
      
      // Additional troubleshooting information
      if (mailgunError.status) {
        console.error('Status code:', mailgunError.status);
      }
      if (mailgunError.details) {
        console.error('Error details:', mailgunError.details);
      }
      
      return res.status(500).json({ 
        message: 'Failed to send email through Mailgun',
        error: mailgunError?.message || String(mailgunError),
        details: mailgunError?.details || 'No additional details'
      });
    }
  } catch (error) {
    console.error('General error:', error);
    
    return res.status(500).json({ 
      message: 'Failed to send email',
      error: error?.message || String(error)
    });
  }
} 