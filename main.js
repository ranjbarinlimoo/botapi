const TelegramBot = require('node-telegram-bot-api');
const request = require('request')
const express = require('express');
const fs = require('fs')
const token = '1718858345:AAHDENdqpfXfoOnt7aEIhXmtUqgs0j6ZIMA';
const bot = new TelegramBot(token, {polling: true});
console.log('Created!!!!')
const port = process.env.PORT || 3000
const app = express()
app.listen(port)
let lastId = 70607680

bot.onText(/(.+)/, (msg, match) => {


    const chatId = msg.chat.id;
    lastId = chatId
    const resp = match[1];

    bot.sendMessage(chatId,port)

});

app.get('/',async (req,res)=>{

    await bot.sendMessage(lastId, lastId)
    res.send('OK')

})