
const dotenv = require('dotenv');
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
     body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
     from: '+17407593853',
     to: '+15558675310'
   })
  .then(message => console.log(message.sid));
console.log('Hello Chiedozie!\nWelcome to Dispatch-Zee SMS messaging platform');

//TWILIO CREDENTIALS
// const account_SID = 'AC473d434a59e2288894cac5c47fc9c9ad';
// const auth_Token = '1447849cdc214f9d8028440f673ddf52';