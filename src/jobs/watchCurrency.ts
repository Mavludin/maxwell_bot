import { Job, scheduleJob } from "node-schedule";
import { Context } from "telegraf";
import { getRUBToDollar } from "../api";

let job: Job;

export const startWatchingCurrency = (ctx: Context) => {
  job = scheduleJob('*/5 * * * * *', async () => {
    const amountOfRUB = await getRUBToDollar();
  
    if (amountOfRUB) {
      ctx.reply(amountOfRUB);
    }
  });
};

export const stopWatchingCurrency = (ctx: Context) => {
  job.cancel();
  ctx.reply('Stopped!')
}
