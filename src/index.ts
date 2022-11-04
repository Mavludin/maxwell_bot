import { gracefulShutdown } from 'node-schedule';
import { Telegraf } from 'telegraf';
import { BOT_TOKEN } from './AppConfig';
import { startWatchingCurrency, stopWatchingCurrency } from './jobs/watchCurrency';

const bot = new Telegraf(BOT_TOKEN);

bot.command('stopWatching', (ctx) => {
  stopWatchingCurrency(ctx);
});

bot.command('watchCurrency', async (ctx) => {
  startWatchingCurrency(ctx);
});

bot.launch();

// Enable graceful stop
process.once('SIGINT', () => {
  gracefulShutdown();
  bot.stop('SIGINT');
});
process.once('SIGTERM', () => {
  gracefulShutdown();
  bot.stop('SIGTERM')
});
