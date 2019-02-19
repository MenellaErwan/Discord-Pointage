# Discord-Pointage

## Required
Created application on [Discord Dev](https://discordapp.com/developers/applications/) and Node.js is required.

## Installation

Dowload bot.
```
git clone https://github.com/thebm13/Discord-Pointage.git
```
## Configuration

Open config.js and modify.
```js
const config = {
token: 'TOKEN', // token of bot
idbot: 'ID BOT', //ID client
idchannel: 'ID CHANNEl', // ID channel where Pointage run
manager: 'ID USER', // ID user for alert
time: '09:30' //Format HH:MM
};
module.exports = config;
```
## Run
```
node ./main.js
```
