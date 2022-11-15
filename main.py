import discord
from discord.ext import commands
from dotenv import dotenv_values
config = dotenv_values(".env")
TOKEN = config["TOKEN"]

bot = commands.Bot()

@bot.slash_command(name="first_slash", guild_ids=[]) 
async def first_slash(ctx): 
    await ctx.respond("You executed the slash command!")

bot.run(TOKEN)