const { Client, GatewayIntentBits} = require('discord.js');
const client = new Client({ 
  intents: 
    [
      GatewayIntentBits.Guilds, 
      GatewayIntentBits.MessageContent,
      GatewayIntentBits.GuildMessages
    ]
});

require('dotenv').config()
const TOKEN = process.env.TOKEN

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("messageCreate",message => {
  if(message.content === "ping"){
    message.reply("pong")
  }
})

client.login(TOKEN);