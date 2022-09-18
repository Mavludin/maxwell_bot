const { Telegraf } = require("telegraf");
require("dotenv").config();
const axios = require('axios');

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx) => {
  ctx.reply('Hello!!!');
});

bot.help((ctx) => {
 ctx.reply('This is help!') 
});

bot.on("sticker", (ctx) => {
  ctx.reply('👍');
});

bot.command('myCommand', (ctx) => {
  ctx.reply("Custom command!")
});

bot.command('getUsers', async (ctx) => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/users');
  const firstUser = response.data[0];

  ctx.reply(firstUser.name);
});

bot.hears('Hi', (ctx) => {
  ctx.reply('Hello there!')
});

bot.launch();

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
