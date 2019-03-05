//Require
const config = require('./config.js');
const Discord = require('discord.js');
var schedule = require('node-schedule');
const moment = require('moment')

// Set objet,time,config
const {token,idbot,idchannel,manager,captain,mentionid,time} = config;
const client = new Discord.Client();


// Variable
var splitTime = time.split(':');
var setHour = splitTime[0];
var setMinute = splitTime[1];

  client.on('ready',() => {
    client.user.setPresence({ game: { name: 'Created by BM' }, status: '@ErwanMenella' });
    var j =schedule.scheduleJob({hour: setHour,minute: setMinute}, function()
  {
    var jour = moment().date();
    var mois = moment().month()+1;
    var m = mois.toString();
    if (m.length = 1)
    {
        var zero = "0";
        mois = zero.concat(m)
    }
    var j = jour.toString();
    if (j.length = 1)
    {
        var zero = "0";
        jour = zero.concat(m)
    }
    client.channels.get(idchannel).send(`<@&${mentionid}> Pointage du ${jour}/${mois} pour les entraînements globaux de 20h à 23h.`);
  });
   
})
  
client.on('message',(message) => {
  if (message.channel.id==idchannel && message.author.id ==idbot) {
    message.react("📗").then(message.react("📕"));
  }

})

client.on('messageReactionAdd',(reaction,user) => {
  if (reaction.message.channel.id==idchannel && reaction.message.author.id==idbot && user.id!==idbot && reaction.message.id==reaction.message.channel.lastMessageID ) {
    var username = user.id;
    if (reaction.emoji.name=="📗") {
      var status = "présent";
    }else var status = "absent";
    client.users.get(manager).send(`<@${username}> sera ${status}.`);
    client.users.get(captain).send(`<@${username}> sera ${status}.`);
  }
})

client.login(token);