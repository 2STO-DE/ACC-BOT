import discord
from discord import app_commands

from dotenv import dotenv_values
config = dotenv_values(".env")
TOKEN = config["TOKEN"]

intents = discord.Intents.default()
client = discord.Client(intents=intents)
tree = app_commands.CommandTree(client)

@tree.command(name = "commandname", description = "My first application Command")
async def first_command(interaction):
    await interaction.response.send_message("Hello!")

@tree.command(name = "github", description = "2STO github page")
async def github(interaction):
   await interaction.response.send_message("https://github.com/2STO-DE")

@client.event
async def on_ready():
    await tree.sync()
    print("Ready!")

client.run(TOKEN)