const { Client, GatewayIntentBits} = require('discord.js');
const { Command } = require('./Command');
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
// MMARK - Command is all discord command method
Command(client)  

client.login(TOKEN);