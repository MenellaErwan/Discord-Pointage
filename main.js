//Require
const config = require('./config.js');
const Discord = require('discord.js');
var schedule = require('node-schedule');

//Set objet,time,config
const {token,idbot,idchannel,manager,time} = config;
const client = new Discord.Client();
var d = new Date();

// Variable
var jour = d.getDate();
var mois = d.getMonth() + 1;
var splitTime = time.split(':');
var setHour = splitTime[0];
var setMinute = splitTime[1];

  client.on('ready',() => {
    client.user.setPresence({ game: { name: 'Created by BM' }, status: '@ErwanMenella' });
    var j =schedule.scheduleJob({hour: setHour,minute: setMinute}, function(){
    client.channels.get(idchannel).send(message);
  });
   
})
  
client.on('message',(message) => {
  if (message.channel.id==idchannel && message.author.id ==idbot) {
    message.react("📗")
    .then(message.react("📕"));
  }

})

client.on('messageReactionAdd',(reaction,user) => {
  if (reaction.message.channel.id==idchannel && reaction.message.author.id==idbot && user.id!==idbot && reaction.message.id==reaction.message.channel.lastMessageID ) {
    var username = user.id;
    if (reaction.emoji.name=="📗") {
      var status = "présent";
    }else var status = "absent";
    client.users.get(manager).send(`<@${username}> sera ${status}.`);
  }
})

client.login(token);