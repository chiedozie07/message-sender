const express = require('express');
require('dotenv').config();
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(`${accountSid}`, `${authToken}`);

//server
const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
  sendTextMessage();
    res.send(`
    <div style="text-align: center; padding-top: 40px;">
      <h1 style="color: purple">Hellooo World, welcome to Dispatch-Zee Message Sender</h1>
      <p>We offer a very robost services which enables and enhances easy communication between riders and package senders by instant text messaging</p>
    </div>
    `);
});

//message sender
function sendTextMessage() {
  client.messages
  .create({
     body: 'Hello Chiedozie, Welcome to Dispatch-Zee Message Sender!',
     from: '+17407593853',
     to: '+2348062951764'
   })
  .then(message => {
    console.log(message.sid);
    console.log('Congratulations!!!\nYour message was successfully sent.');
  }).catch(error => console.log(error.message));
};

app.listen(port, () => console.log(`Dispatch-Zee Message Sender Server Is Running On https://localhost:${port} Kindly View On Your Web Browser`));
