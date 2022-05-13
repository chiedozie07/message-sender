const express = require('express');
const twilioConfig = require('./twilioConfig.json');
// const client = require('twilio')(`${twilioConfig.Account_SID}, ${twilioConfig.Auth_Token}`);
const client = require('twilio')('AC473d434a59e2288894cac5c47fc9c9ad', '10b64705209bad12fa37aad5af377420');

console.log('TWILIO CONFIG VARIABLES ====>>>', twilioConfig);

const app = express();
const port = 5000;

app.get('/', (req, res) => {
  sendTextMessage();
    res.send(`
    <div style="text-align: center; padding-top: 40px;"}}>
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
  }).catch(error => { 
    res.status(500).send(error.message);
    console.log(error.message);
  });
};

app.listen(port, () => console.log(`Dispatch-Zee Message Sender Is Running On https://localhost:${port} Kindly View On Your Web Browser`));
