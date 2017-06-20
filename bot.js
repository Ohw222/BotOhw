// Discord.js -> à telecharger
var Discord = require("discord.js");
//require("node-opus");
require("opusscript");

// autoReconnect is enabed
var bot = new Discord.Client({autoReconnect: true});
var input = message.content.toUpperCase


// Set the prefix
let prefix = "/";

// Ready? Set? Go!
bot.on('ready', () => {

  bot.user.setStatus("dnd"); //dnd , online , ldle
  bot.user.setGame("In Dev");
  console.log("Newston ! Le bot est en ligne");
});


bot.on("message", msg => {

      // Command /help
     if (input === prefix + "HELP") {
      msg.channel.sendMessage("```List of commands : \n\n /version  -> Version du bot  \n /help -> toutes les commandes  \n /profil -> votre profil  \n salut -> première commande  \n    ```");
      console.log("Command executed: /help")
    }
    // Command /version
    if (input === prefix + "VESRION") {
      msg.channel.sendMessage("``` Bot Discord Basic - Version 1.0 \n Creator : Thomas Bnt | @Hyprimort#9520  Modification large par OHW\n GitHub :https://github.com/thomasbnt/bot-discord-basic-js");
      console.log("Command executed : /version")
    }
    // Command /version
    if (input === "SALUT") {
      msg.channel.sendMessage("Salut **${message.author.username}** !");
      console.log("Command executed : /Salut")
    }
    if (input === prefix + "PROFIL") {
      msg.channel.sendMessage("Salut **${message.author.username}**");
      console.log("Command executed : /profil")
    }
	if (input === prefix + "PROFIL") {
      console.log('Information about '.red + message.author.username.red + ' required'.red);
      message.channel.sendMessage([
        `PSEUDO : **${message.author.username}**`,
        `Avatar : ${message.author.avatarURL}`,
        `ID : **${message.author.id}**`,
      ].join("\n"));
    }

});




//Login with TOKEN for Bot
bot.login("MjY1NDUxMDY4MjY2MjUwMjQx.C0v1VQ.mJyYjKwWkbC8oL04ZGba_YWaIkU"); // Find your token > https://discordapp.com/developers/applications/me
