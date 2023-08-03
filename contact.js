const { sendEmail } = require("./sendemail/sendemail");
require('dotenv').config();

module.exports = (req, res) => {
    const data = req.body;

    const html = `
        <h1>Message from ${data.name}</h1>
        <ul>
          <li><strong>Name: </strong/> ${data.name}</li>
          <li><strong>Email: </strong/> ${data.email}</li>
          <li><strong>Phone number: </strong/> ${data.phone}</li>
          <li><strong>Message: </strong/> ${data.message}</li>
        </ul>
    `

    const message = {
        from: data.email,
        to: process.env.EMAIL_ID,
        subject: 'Message for tv mounting',
        html: html
    };

    sendEmail(message, (response) => {
        console.log(response);
        if(response.error) {
            res.send( {
                statusCode: 500,
                message: 'Server error',
                error: response.message
            });
        } else {
            res.send( {
                statusCode: 200,
                message: response.message,
                error: null
            });
        }
    });
};

