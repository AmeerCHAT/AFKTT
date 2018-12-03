const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);  
});


client.on('ready', async() => {
var server = "518833136273195019"; // ايدي السررفر
var channel = "518833136273195027";//ايدي الروم
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('**spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam**')
    },305);
})



client.login(process.env.BOT_TOKEN);
