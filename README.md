# Update Checker for Asuswrt-Merlin Router Firmware

Checks [the Asuswrt-Merlin web page](https://www.asuswrt-merlin.net/) by screen scraping for new version and send Pushover notification. 

This script is a one time checker, so it needs to be scheduled to continuously check for updates. 

I wrote this since the built-in checker currently doesn't work. I [previously used that](https://www.henriksommerfeld.se/firmware-update-notifications-for-my-asus-router/) to send notifications, so this is a fragile (screen scraping) workaround that I'll keep updated as long as I use it myself.

## Prerequisites
* [Node](https://nodejs.org/en/) version specified in [`.nvmrc`](./.nvmrc)
* [Yarn](https://yarnpkg.com/)

## Configuration
Create a `.env` file in the root of the project folder with the following content:
```
PUSHOVER_TOKEN=Your access token, see (https://pushover.net/api)
PUSHOVER_USER=Pushover User ID (the user/group key (not e-mail address often referred to as USER_KEY)
```

## Installation
`yarn install`

## Running
`yarn start`