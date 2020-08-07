const Discord = require('discord.js');
const ytdl = require('ytdl-core');

const bot = new Discord.Client();

var audioArray = [
	"https://www.myinstants.com/media/sounds/germano_mosconi-ma-che-oh.mp3",
	"https://www.myinstants.com/media/sounds/germano_mosconi-mi-sa-che-non-mi-incazzo.mp3",
	"https://www.myinstants.com/media/sounds/germanomosconi_aspetasecondo.mp3",
	"https://www.myinstants.com/media/sounds/germano_mosconi-mona-porta.mp3",
	"https://www.myinstants.com/media/sounds/germanomosconi_orco.mp3",
	"https://www.myinstants.com/media/sounds/germanomosconi_telefono_1.mp3",
	"https://www.myinstants.com/media/sounds/germanomosconi_nopossibile.mp3",
	"https://www.myinstants.com/media/sounds/germanomosconi_cazzoderumore.mp3",
	"https://www.myinstants.com/media/sounds/germanomosconi_punhospacotesta.mp3",
	"https://www.myinstants.com/media/sounds/germanomosconi_telefono.mp3",
	"https://www.myinstants.com/media/sounds/germanomosconi_vafaculo.mp3",
	"https://www.myinstants.com/media/sounds/germanomosconi_porta.mp3",
	"https://www.myinstants.com/media/sounds/untitled-online-audio-converter_MBamWbe.mp3",
	"https://www.myinstants.com/media/sounds/germanomosconi_vafaculo_1.mp3",
	"https://www.myinstants.com/media/sounds/portanna-la-madonna.mp3",
	"https://www.myinstants.com/media/sounds/ma-non-si-riesce-a-capire-un-cazzo-128-kbps.mp3",
	"https://www.myinstants.com/media/sounds/germano-mosconi-e-le-carte-con-la-colla-attenzione-contiene-bestemmie-audiotrimmer.mp3",
	"https://www.myinstants.com/media/sounds/possible-imbecill.mp3",
	"https://www.myinstants.com/media/sounds/spetta-che-me-calmo.mp3",
	"https://www.myinstants.com/media/sounds/non-venite-dentro.mp3",
	"https://www.myinstants.com/media/sounds/toccaferroitled.mp3",
	"https://www.myinstants.com/media/sounds/colla.mp3",
	"https://www.myinstants.com/media/sounds/colla_tCTHVKL.mp3"
	];

bot.on('ready', () => {

    console.log('I am ready!');
	console.info(`Logged in as ${bot.user.tag}!`);

});

bot.on('message', msg => {
  if (msg.content === '!ping') {
    msg.reply('pong');
    //msg.channel.send('pong');

  } 
  /*else if (msg.content.startsWith('!kick')) {
    if (msg.mentions.users.size) {
      const taggedUser = msg.mentions.users.first();
      msg.channel.send(`You wanted to kick: ${taggedUser.username}`);
    } else {
      msg.reply('Please tag a valid user!');
    }
  }*/ 
  else if (msg.content === '!help') {
      msg.reply('Scrivi !cit per ricevere un audio di Mosconi');
  } else if (msg.content === '!cit') {
	  //msg.reply("Ma chi è chel mona ch-che-che batte la porta e che chiude u-urlando??!");
	  //msg.channel.send("Ma chi è chel mona ch-che-che batte la porta e che chiude u-urlando??!");
	   var voiceChannel = msg.member.voice.channel;
		voiceChannel.join().then(connection => {
			console.log('In voice channel!');
		   const randomAudio = audioArray[Math.floor(Math.random() * audioArray.length)];
		   const dispatcher = connection.play(randomAudio);
		   console.log('dispatcher volume: '+ dispatcher.volume);
		   console.log('dispatcher paused: '+ dispatcher.paused);
		  connection.on('disconnect', msg.channel.send("Mi sono disconnesso dalla chat vocale"));
		  //dispatcher.on('finish', finish => voiceChannel.leave());
		  dispatcher.on('error', error => console.log('Error: ' + error));
		  dispatcher.on('start', start => console.log('Start: ' + start));
		  //dispatcher.on('speaking', speaking => console.log('Speaking: ' + speaking));
		  dispatcher.on('debug', debug => console.log('Debug: ' + debug));
		  
		}).catch(err => console.log(err));
	  console.log('After voicechannel');
	  
  }
  /*else if (msg.content === '!citLocal') {
	  msg.reply("Ma chi è chel mona ch-che-che batte la porta e che chiude u-urlando??!");
	  //msg.channel.send("Ma chi è chel mona ch-che-che batte la porta e che chiude u-urlando??!");
	   var voiceChannel = msg.member.voice.channel;
		voiceChannel.join().then(connection => {
			console.log('In voice channel!');
		   const dispatcher = connection.play('germano_mosconi-ma-che-oh.mp3', {volume: 1,});
		   console.log('before onfinish!');
		  //dispatcher.on('finish', finish => voiceChannel.leave());
		  dispatcher.on('error', error => console.log('Error: ' + error));
		  dispatcher.on('failed', failed => console.log('Failed: ' + failed));
		  
		}).catch(err => console.log(err));
	  console.log('After voicechannel');
	  
  }*/
  else if (msg.content === '!citYt') {
	  //msg.reply("Ma chi è chel mona ch-che-che batte la porta e che chiude u-urlando??!");
	  //msg.channel.send("Ma chi è chel mona ch-che-che batte la porta e che chiude u-urlando??!");
	   var voiceChannel = msg.member.voice.channel;
		voiceChannel.join().then(connection => {
			console.log('In voice channel!');
		   const dispatcher = connection.play(ytdl('https://www.youtube.com/watch?v=f3wsxbMbi5M', { filter: 'audioonly'}));;
		   console.log('before onfinish!');
		  //dispatcher.on('finish', finish => voiceChannel.leave());
		  dispatcher.on('error', error => console.log('Error: ' + error));
		  dispatcher.on('failed', failed => console.log('Failed: ' + failed));
		  
		}).catch(err => console.log(err));
	  console.log('After voicechannel');
	  
  }else if (msg.content === '!citEnd') {
	  msg.reply("Ma chi è chel mona ch-che-che batte la porta e che chiude u-urlando??!");
	  //msg.channel.send("Ma chi è chel mona ch-che-che batte la porta e che chiude u-urlando??!");
	   var voiceChannel = msg.member.voice.channel;
		voiceChannel.join().then(connection => {
			console.log('In voice channel!');
		   const dispatcher = connection.play('https://www.myinstants.com/media/sounds/germano_mosconi-ma-che-oh.mp3');
		   console.log('before onEnd!');
		  dispatcher.on('finish', finish => voiceChannel.leave());
		}).catch(err => console.log(err));
	  console.log('After voicechannel');
	  
  }
});

//Stored in config vars on heroku
bot.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret