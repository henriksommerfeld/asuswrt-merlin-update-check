import dotenv from 'dotenv';
import axios from 'axios';

export function sendPushoverNotification(message) {
  dotenv.config();
  axios
    .post('https://api.pushover.net/1/messages.json', {
      token: `${process.env.PUSHOVER_TOKEN}`,
      user: `${process.env.PUSHOVER_USER}`,
      message: message,
    })
    .then(() => {
      console.log(`Pushover notification sent: ${message}`);
    })
    .catch(err => {
      console.error(err);
    });
}
