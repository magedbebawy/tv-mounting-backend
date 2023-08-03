const { sendEmail } = require("./sendemail/sendemail");
require('dotenv').config();


module.exports = (req, res) => {
    const data = req.body;

    const html = `
        <h1>New tv mounting app from ${data.name}</h1>
        <ul>
          <li><strong>Name: </strong/> ${data.name}</li>
          <li><strong>Email: </strong/> ${data.email}</li>
          <li><strong>Phone number: </strong/> ${data.phone}</li>
          <li><strong>TV size: </strong/> ${data.tvSize}</li>
          <li><strong>Bracket: </strong/> ${data.bracket}</li>
          <li><strong>Addons: </strong/> ${data.addons}</li>
          <li><strong>Time: </strong/> ${data.time}</li>
          <li><strong>Total: </strong>${data.total}</li>
        </ul>
    `

    const message = {
        from: data.email,
        to: process.env.EMAIL_ID,
        subject: 'New tv mounting appointment',
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

