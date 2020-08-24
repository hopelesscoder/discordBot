This is an example of a discord bot hosted on Heroku.

In the Heroku Dashboard, in the settings tab you have to add the config var  with KEY = BOT_TOKEN and VALUE = the token on the discord developer page of your bot.
In the same tab you have to add the following buildpacks:
<ul>
<li>heroku/nodejs</li>
<li>https://github.com/jonathanong/heroku-buildpack-ffmpeg-latest.git</li>
</ul>
In the resources tab you have to enable the worker process(defined in the Procfile file, uppercase P matters) and to disable the default one.


https://discord.com/api/oauth2/authorize?client_id=740948686128808008&permissions=3147776&scope=bot to add this bot to your Discord server.


Audio files of Germano Mosconi are from https://www.myinstants.com
