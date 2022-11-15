const {Client, GatewayIntentBits} = require('discord.js')
var c = new Client({ 
    intents: 
      [
        GatewayIntentBits.Guilds, 
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMessages
      ]
  });
const perfix = "/"

module.exports.Command = (client) => {
    c = client
    c.on("messageCreate",message => {
        Ping(message)
        Time(message)
        GitHub(message)
    })
}

const Ping = (message) => {
    if(message.content === perfix + "ping"){
      message.reply("pong")
    }
}

const Time = (message) => {
  if(message.content === perfix + "time"){
    let date = new Date()
    message.reply(date.getHours().toString())
  }
}

const GitHub = (message) => {
  if(message.content === perfix + "github"){
    message.reply('https://github.com/2STO-DE')
  }
}
