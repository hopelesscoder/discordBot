const Discord = require('discord.js');
const ytdl = require('ytdl-core');
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
    //msg.channel.send('pong');

  } else if (msg.content.startsWith('!kick')) {
    if (msg.mentions.users.size) {
      const taggedUser = msg.mentions.users.first();
      msg.channel.send(`You wanted to kick: ${taggedUser.username}`);
    } else {
      msg.reply('Please tag a valid user!');
    }
  } else if (msg.content === '!cit') {
	  msg.reply("Ma chi è chel mona ch-che-che batte la porta e che chiude u-urlando??!");
	  //msg.channel.send("Ma chi è chel mona ch-che-che batte la porta e che chiude u-urlando??!");
	   var voiceChannel = msg.member.voiceChannel;
		voiceChannel.join().then(connection => {
		   const dispatcher = connection.play('https://www.myinstants.com/media/sounds/germano_mosconi-ma-che-oh.mp3');
		  dispatcher.on('finish', finish => voiceChannel.leave());
		}).catch(err => console.log(err));
	  
	  
  }else if (msg.content === '!citStream') {
	  msg.reply("Ma chi è chel mona ch-che-che batte la porta e che chiude u-urlando??!");
	  //msg.channel.send("Ma chi è chel mona ch-che-che batte la porta e che chiude u-urlando??!");
	   var voiceChannel = msg.member.voiceChannel;
		voiceChannel.join().then(connection => {
		   const dispatcher = connection.playStream('https://www.myinstants.com/media/sounds/germano_mosconi-ma-che-oh.mp3');
		  dispatcher.on('finish', finish => voiceChannel.leave());
		}).catch(err => console.log(err));
	  
	  
  }else if (message.content === '!play') {
		if (message.channel.type !== 'text') return;

		const voiceChannel = message.member.voice.channel;

		if (!voiceChannel) {
			return message.reply('please join a voice channel first!');
		}

		voiceChannel.join().then(connection => {
			const stream = ytdl('https://www.youtube.com/watch?v=D57Y1PruTlw', { filter: 'audioonly' });
			const dispatcher = connection.play(stream);

			dispatcher.on('finish', () => voiceChannel.leave());
		});
	}
});


 

// THIS  MUST  BE  THIS  WAY

bot.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret