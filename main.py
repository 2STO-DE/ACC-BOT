import discord
from discord.ext import commands
from dotenv import dotenv_values
config = dotenv_values(".env")
TOKEN = config["TOKEN"]

bot = commands.Bot()

@bot.slash_command(name="first_slash", guild_ids=[897544446088970260]) 
async def first_slash(ctx): 
    await ctx.respond("You executed the slash command!")

@bot.slash_command(name="github", guild_ids=[897544446088970260])
async def github(ctx):
    await ctx.respond("https://github.com/2STO-DE")

bot.run(TOKEN)