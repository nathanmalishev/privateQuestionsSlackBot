'use strict'

var Botkit = require('botkit')
// var WebClient = require('@slack/client').WebClient
var RtmClient = require('@slack/client').RtmClient
var Env = require('../Env')

const controller = Botkit.slackbot()
var bot = controller.spawn({
  token: Env.API_TOKEN,
  retry: 500
})
// const web = new WebClient(Env.API_TOKEN)
const rtm = new RtmClient(Env.API_TOKEN, {logLevel: 'error'})

rtm.start()
bot.startRTM(function (err, bot, payload) {
  if (err) {
    console.log(err)
    throw new Error('Could not connect to Slack')
  }
})

exports.getBot = () => bot
exports.getRtm = () => rtm
exports.getController = () => controller
