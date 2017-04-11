'use strict'

const Env = require('../Env')
const request = require('request')
const controller = require('./slackbot').getController()

controller.hears(['question*'], 'direct_message,direct_mention,mention', (bot, message) => {
  /* no message return */
  if (message.match === undefined) return
  request.post({
    url: `${Env.WEBHOOK}`,
    body: JSON.stringify({
      'text': message.match.input
    }),
    headers: {
      'Content-type': 'application/json'
    }
  }, (err, res) => {
    console.log(err, res.body)
    bot.reply(message, 'Thanks for the question hopefully someone gets to it!')
  })
})


controller.hears(['.*'], 'direct_message,direct_mention,mention', (bot, message) => {
  bot.reply(message, `Hey i am the friendly anonymous bot asker. Ask me anything and it will be posted anonymously in another channel! \n
  Specify your question like \`question Why is the sky blue ? \`, the question word is important! `)
})
