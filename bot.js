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










client.on('ready', async() => {
var server = "514356888188485642"; // ايدي السررفر
var channel = "514423859751944207";//ايدي الروم
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('***هههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههه***')
    },305);
})


 





 



client.login(process.env.TOKEN);// لا تغير فيها شيء
client2.login(process.env.TOKEN2);// لا تغير فيها شيء
