const TelegramBot = require('node-telegram-bot-api');
const request = require('request')
const fs = require('fs')
const token = '1718858345:AAHDENdqpfXfoOnt7aEIhXmtUqgs0j6ZIMA';
const bot = new TelegramBot(token, {polling: true});

// Matches "/echo [whatever]"
bot.onText(/\/w (.+)/, (msg, match) => {

    console.log(msg)
    console.log(match)
    const chatId = msg.chat.id;
    const resp = match[1];
    const uri = "http://api.weatherstack.com/current?access_key=b019811a656f2218975c39a3785b7e15&query=" + resp
    if (! /[آ-ی]/.test(resp)){
        request({uri: uri, json: true}, (error, response) => {
            if (response.body.success === false || error)
                sendMessage(msg, response.body.error.info)
            else
                sendMessage(msg, "⛅️Temperature of " + response.body.location.name + " is: " + response.body.current.temperature + " degree.");
        })
    }else
        sendMessage(msg,"Bad Input")



});

function sendMessage(msg, text) {
    bot.sendMessage(msg.chat.id, text)
    fs.appendFileSync('DB.txt', "ID: " + msg.from.username + ", DataRcvd: " + msg.text + ", DataSent: " + text + "\n")
}
//
// Listen for any kind of message. There are different kinds of
// messages.
// bot.on('message', (msg) => {
//     const chatId = msg.chat.id;
//
//     // send a message to the chat acknowledging receipt of their message
//     bot.sendMessage(chatId, 'Receivved your message');
// });

// const uri = "http://api.weatherstack.com/current?access_key=b019811a656f2218975c39a3785b7e15&query="+"tehran"
//     request({uri:uri},(error,res)=>{
//         const response = JSON.parse(res.body)
//         console.log(response)
//         // bot.sendMessage(chatId, "⛅️Temperature Of "+response.body.location.name+" is: "+response.body.current.temperature+" degree.");
//     })