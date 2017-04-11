'use strict';

const request = require('request')

  request.post({
    url: 'https://hooks.slack.com/services/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',
    body: JSON.stringify({
      "text": 'apple'
    }),
    headers:{
      'Content-type': 'application/json'
    }
  }, (err, res) => {
    console.log(err, res)
  })
