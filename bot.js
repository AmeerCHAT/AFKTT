const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);  
});


client.on('ready', async() => {
var server = "514356888188485642"; 
var channel = "516224761647464488";
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('**spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam**')
    },305);
})






client.login(process.env.TOKEN);
client2.login(process.env.TOKEN2);
