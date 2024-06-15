const { Telegraf } = require("telegraf");
const TOKEN = "6963662809:AAFngFC3__hKp3kCAfC8kFG8mpu7ZqDwhEU";
const bot = new Telegraf(TOKEN);

const web_link = "https://creative-mooncake-73d857.netlify.app/";

bot.start((ctx) =>
  ctx.reply("Welcome to the orderpharmabot", {
    reply_markup: {
      keyboard: [[{ text: "click here to order", web_app: { url: web_link } }]],
    },
  })
);

bot.launch();
