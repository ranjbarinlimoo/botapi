const TelegramBot = require('node-telegram-bot-api');
const express = require('express');

const app = express()
const bot = new TelegramBot(token, {polling: true});
const port = process.env.PORT || 3000

const token = '1718858345:AAHDENdqpfXfoOnt7aEIhXmtUqgs0j6ZIMA';
console.log('Running On Port: '+port)
app.listen(port)

bot.onText(/(.+)/, async (msg, match) => {


    const chatId = msg.chat.id;
    const resp = match[1];

    await bot.sendMessage(chatId,resp)

});
