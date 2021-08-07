const TelegramBot = require('node-telegram-bot-api');
const request = require('request')
const fs = require('fs')
const token = '1718858345:AAHDENdqpfXfoOnt7aEIhXmtUqgs0j6ZIMA';
const bot = new TelegramBot(token, {polling: true});
console.log('Created!!!!')
const port = process.env.PORT || 8080


bot.onText(/(.+)/, (msg, match) => {


    const chatId = msg.chat.id;
    const resp = match[1];

    bot.sendMessage(chatId,'Helloworld1')

});