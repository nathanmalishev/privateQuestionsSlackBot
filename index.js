const slackBot = require('./bot/slackbot')
const Env = require('./Env')

if (!Env.WEBHOOK || !Env.API_TOKEN) {
  console.log(Env)
  throw new Error('Slack bot could start needs WEBHOOK & API_TOKEN enviroment vars')
}

console.log(Env)
// slack bot controllers
require('./bot/question-controller')

console.log('slack bot started')
