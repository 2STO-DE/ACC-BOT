const {Client, GatewayIntentBits} = require('discord.js')
var c = new Client({ 
    intents: 
      [
        GatewayIntentBits.Guilds, 
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMessages
      ]
  });
const perfix = "!"

module.exports.Command = (client) => {
    c = client
    c.on("messageCreate",message => {
        Ping(message)
    })
}

const Ping = (message) => {
    if(message.content === perfix + "ping"){
      message.reply("pong")
    }
}
