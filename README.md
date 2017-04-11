# Whisper The Slack Bot
[![forthebadge](http://forthebadge.com/images/badges/fuck-it-ship-it.svg)](http://forthebadge.com)  
This is a very basic slack bot app that takes questions and posts them to a specified channell.  

## Set up
I did this as fast as i could so currently there is a slack bot which you talk to & an app that relies the message in a given channel.

So on slack you need to create a bot and remember your API Token.  
Then create an App and create a webhook to a certain channel & remeber that.

## Installation & Usuage
Without docker  
Install the node app like usual `npm install`  
Then run `API_TOKEN=<your_token> WEBHOOK=<your_webhook> node index.js`

   
With docker locally  
Build the image `docker build . -t whispers`  
Create a container `docker run -e API_TOKEN=<your_token> -e WEBHOOK=<your_webhook> -d whispers`  

Or you can pull the docker hub image at `nathanmalishev/whispers`


