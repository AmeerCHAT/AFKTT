const Discord = require("discord.js");
const client = new Discord.Client();
const client2 = new Discord.Client();


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(` ♥ ♥ أَشْهَدُ أَنْ لاَ إِلَهَ إِلاَّ اللَّهُ و أَنَّ مُحَمَّدًا رَسُولُ اللَّهِ ♥ ♥ `,"http://twitch.tv/Nadir44king")
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[═══════════════════]╗')
  console.log(' Mr_King')
  console.log('╚[═══════════════════]╝')
  console.log('')
  console.log('')
});




client.on('message', message => {client.on('message', message =>{
    if(message.content === '#ping'){
let start = Date.now(); message.channel.send('pong').then(message => { 
message.edit(`\`\`\`js
Time taken: ${Date.now() - start} ms
Discord API: ${client.ping.toFixed(0)} ms\`\`\``);
    });
    }
});
 
 
 




client.login(process.env.TOKEN);// لا تغير فيها شيء
client2.login(process.env.TOKEN2);// لا تغير فيها شيء
