const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('ready', () => {

    console.log('I am ready!');

});

bot.on('ready', () => {
  console.info(`Logged in as ${bot.user.tag}!`);
});

bot.on('message', msg => {
  if (msg.content === '!ping') {
    msg.reply('pong');
    msg.channel.send('pong');

  } else if (msg.content.startsWith('!kick')) {
    if (msg.mentions.users.size) {
      const taggedUser = msg.mentions.users.first();
      msg.channel.send(`You wanted to kick: ${taggedUser.username}`);
    } else {
      msg.reply('Please tag a valid user!');
    }
  } else if (msg.content === '!cit') {
	  msg.reply("Ma chi è chel mona ch-che-che batte la porta e che chiude u-urlando??!");
	  msg.channel.send("Ma chi è chel mona ch-che-che batte la porta e che chiude u-urlando??!");
  }
});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret