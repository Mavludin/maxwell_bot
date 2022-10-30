import { Job, scheduleJob } from 'node-schedule';
import { Telegraf } from 'telegraf';
import { getDollar } from './api';
import { BOT_TOKEN } from './AppConfig';

const bot = new Telegraf(BOT_TOKEN);

let job: Job;

const stopJob = () => {
  job?.cancel();
}

bot.start((ctx) => {
  ctx.reply('Hello!!!');
});

bot.help((ctx) => {
  ctx.reply('This is help!');
});

bot.on('sticker', (ctx) => {
  ctx.reply('👍');
});

bot.command('stop', (ctx) => {
  stopJob();
});

bot.command('getDollar', async (ctx) => {
  job = scheduleJob('*/5 * * * * *', async () => {
    const dollar = await getDollar();

    if (dollar) {
      ctx.reply(dollar);
    }
  });
});

bot.hears('Hi', (ctx) => {
  ctx.reply('Hello there!');
});

bot.launch();

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
