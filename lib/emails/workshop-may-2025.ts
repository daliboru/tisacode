export const workshopMay2025EmailHTML = (name: string) => {
  return `
    <!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Entrepreneurship First Principles Workshop - Registration Confirmed</title>
  <style>
    body {
      font-family: 'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
      line-height: 1.6;
      color: #333;
      margin: 0;
      padding: 0;
      background-color: #f9f9f9;
    }
    .container {
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
      background-color: #ffffff;
    }
    .content {
      padding: 30px 20px;
    }
    .button {
      display: inline-block;
      color: white;
      text-decoration: none;
      padding: 12px 24px;
      border-radius: 6px;
      font-weight: bold;
      margin-top: 20px;
      text-align: center;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);\
      transition: background-color 0.3s ease;
    }
    .footer {
      padding: 20px;
      text-align: center;
      font-size: 12px;
      color: #666;
    }
    h1 {
      color: #333;
      font-size: 24px;
      margin-bottom: 20px;
    }
  </style>
</head>
<body>
  <div class="container">
    <div>
      <img src="https://tisacode.com/images/logo.webp" alt="Tisacode Logo" style="height: 48px; margin-bottom: 12px;" />
    </div>
    
    <div class="content">
      <h1>Your Workshop Registration is Confirmed!</h1>
      
      <p>${name ? `Hi ${name},` : 'Hi there,'}</p>
      
      <p>Thank you for registering for our <strong>Entrepreneurship First Principles Workshop</strong>. We're excited to have you join us on May 15th for this interactive session where we'll explore the fundamental principles of entrepreneurship.</p>
      
      <p><strong>Workshop Details:</strong></p>
      <ul>
        <li>Date: May 15th, 2025</li>
        <li>Time: 5pm CET (8am PT)</li>
        <li>Format: 1-hour workshop + Q&A</li>
        <li>Topics: First principles thinking, finding your edge, lean methodology, and more</li>
      </ul>
      
      <p style="margin-top: 30px;">We'll send you a reminder with the meeting link closer to the date. If you have any questions in the meantime, feel free to reply to this email.</p>
      
      <p>Looking forward to seeing you there!</p>
      
      <p>Best regards,<br>
      The Tisacode Team</p>
    </div>
    
    <div class="footer">
      <p>© 2025 Tisacode. All rights reserved.</p>
      <p>You're receiving this email because you registered for our workshop.</p>
    </div>
  </div>
</body>
</html>
  `
}

export const workshopMay2025PlainText = (name: string) => {
  return `
        ENTREPRENEURSHIP FIRST PRINCIPLES WORKSHOP - REGISTRATION CONFIRMED
        -----------------------------------------------------------

        Hi ${name},

        Thank you for registering for our Entrepreneurship First Principles Workshop. We're excited to have you join us on May 15th for this interactive session where we'll explore the fundamental principles of entrepreneurship.

        WORKSHOP DETAILS:
        - Date: May 15th, 2025
        - Time: 5pm CET (8am PT)
        - Format: 1-hour workshop + Q&A
        - Topics: First principles thinking, finding your edge, lean methodology, and more

        We'll send you a reminder with the meeting link closer to the date. If you have any questions in the meantime, feel free to reply to this email.

        Looking forward to seeing you there!

        Best regards,
        The Tisacode Team

        -----------------------------------------------------------
        © 2025 Tisacode. All rights reserved.
        You're receiving this email because you registered for our workshop.
    `
}
