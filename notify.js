import dotenv from 'dotenv';
import rp from 'request-promise';

export function sendPushoverNotification(message) {
  dotenv.config();
  var options = {
    method: 'POST',
    uri: 'https://api.pushover.net/1/messages.json',
    body: {
      token: `${process.env.PUSHOVER_TOKEN}`,
      user: `${process.env.PUSHOVER_USER}`,
      message: message
    },
    json: true
  };

  rp(options)
    .then(function (parsedBody) {
      console.log(`Pushover notification sent: ${message}`);
    })
    .catch(function (err) {
      console.error(err);
    });
  }