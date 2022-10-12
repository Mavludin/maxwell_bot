import { Telegraf } from 'telegraf';
import { getDollar } from './api';
import { BOT_TOKEN } from './AppConfig';

const bot = new Telegraf(BOT_TOKEN);

bot.start((ctx) => {
  ctx.reply('Hello!!!');
});

bot.help((ctx) => {
  ctx.reply('This is help!');
});

bot.on('sticker', (ctx) => {
  ctx.reply('👍');
});

bot.command('myCommand', (ctx) => {
  ctx.reply('Custom command!');
});

bot.command('getDollar', async (ctx) => {
  const response = await getDollar();

  ctx.reply(response);
});

bot.hears('Hi', (ctx) => {
  ctx.reply('Hello there!');
});

bot.launch();

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
