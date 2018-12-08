const Discord = require('discord.js');
const client = new Discord.Client();
const moment = require('moment');
const prefix = "!";

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`!help`,"http://twitch.tv/Nadir44king")
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
  console.log(' Bot Is OnLine')
  console.log('╚[═══════════════════]╝')
  console.log('')
  console.log('')
  console.log('●▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬●')
  console.log('')
  console.log('By Bot Ameer / Owner Server TopMc Ameer')
  console.log('')
  console.log('●▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬●')
  
});

 
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});




client.on('message', message => {
    if (message.content === "!help") {
    let embed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setFooter(`© SHYBOY_05 ™.`, 'https://images-ext-2.discordapp.net/external/X9SanEG0s7Dtv3krTgy-kod_fj6JRVJ2AG4JryCiiz0/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/375761288518828042/fffa31c797e88cf059dd6db424ff456a.png?width=80&height=80')
  .setColor("#000000")
  .addField("Done | تــــم" , ":envelope: | :sleuth_or_spy::skin-tone-3:شيك علي في الخاص")
  
  
  
  message.channel.sendEmbed(embed);
  }
  });
  
  
  
  
  
  
  
 

  
  
  
  
   client.on("message", message => {
    if (message.content === "!help") {
     const embed = new Discord.RichEmbed() 
         .setColor("#00FF00")
         .setDescription(`**❓❔❗️❕ما هي مميزات البوت❗️❕❓❔**
        **__1-__:books:🧐 بوت عربي🧐:books:
         __2-__:white_check_mark: :part_alternation_mark:️ استخدامه جدا سهل:part_alternation_mark:️:white_check_mark: 
         __3-__:gear:️صيانه كل يوم:gear:️
         __4-__:money_with_wings: مجاني :money_with_wings:**`)
   message.author.sendEmbed(embed)
   
   }
   });
  

  
   
  
  
  
   client.on("message", message => {
      if (message.content === "!help") {
       const embed = new Discord.RichEmbed() 
           .setColor("#FF0000")
           .setDescription(`**🕴🏾الاوامر العامة|Public Commands🕴🏾**
  ** __!id__->**معلومات عنك
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  **__!server__->**معلومات عن السيرفر
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  **__!Bot__->**معلومات عن البوت
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  **__!rules__->**قوانين السيرفر
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  **__!member__->**حالة اعضاء السيرفر
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  **__!ping__->**سرعة اتصالك
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  **__!avatar__->**يضهر لك صورتك
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
   **__!as__->**صورة السيرفر
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  **__!email__->**يسوي ايميل جميل وهمي
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  **__!date__->**يضهر لك التاريخ
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  **__!rooms__->**يعرض لك جميع رومات السيرفر
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  **__!new__->**فتح تذكرة
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  **__!invite__->**عدد الانفايت الي معك
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  **__!roll__->**يسوي قرعه من 1 الى 100
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  **__!top__->**يظهر لك توب انفايت
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  **__!help__->**تظهر لك هذي القائمة
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  **__!inv__->**ادخال البوت الى سيرفرك
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  **__!support__->**سيرفر الدعم الفني
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- `)
     message.author.sendEmbed(embed)
     
     }
     });
  
  
  
  
   client.on("message", message => {
    if (message.content === "!help") {
     const embed = new Discord.RichEmbed() 
         .setColor("#FFFF00")
         .setDescription(`**:video_game:   الالعاب|Games**
  ** __!hack__->**لعبة هكر مزح
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  ** __!xo__->**لعبة xo
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  ** __!اذكار__->**اذكار
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  **__!قرآن__->**قرآن الكريم
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  **__!صراحة__->**يسألك سؤال ولازم تجاوب بصراحه
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  **__!مريم__->**لعبة مريم المخيفة
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  **__!pubg__->**اكو عرب بطيارة xD
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  **__!عقاب__->**عاقب نفسك ههه
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  **__!emoji__->**يحول الكلام الى ايموجي 
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  **__!rps__->**حجرة ورقة مقص
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  **__!نكت__->**نكت مضحكة هههه
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  **__!slots__->**لعبة الفواكه
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-`)
   message.author.sendEmbed(embed)
   
   }
   });
  
  
  
   client.on("message", message => {
      if (message.content === "!help") {
       const embed = new Discord.RichEmbed() 
           .setColor("#57FEFF")
           .setDescription(`**⚙️اوامر الادارة|Administrator⚙️**
  ** __!kick__->**طرد
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  **__!ban__->**باند
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  **__!mute__->**ميوت
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  **__!unmute__->**فك ميوت
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  **__!banall__->**تبنيد الكل
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  **__!unbanall__->**فك الباند عن الكل
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  **__!bot list__->**يعرف كم سيرفر متواجد البوت
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  **__soon__->**سحب البوت الى الروم الصوتي
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  **__!say__->**يحول الكلام الى صورة
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  **__!mutechat__->**تسكير  الشات
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  **__!unmutechat__->**فتح الشات
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  **__role__->**اعطاء شخص رتبة
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  **__!clear__->**مسح الشات
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  ** __!ct__->**انشاء روم كتابي
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  **__!cv__->**انشاء روم صوتي 
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  **__!hideall__->**اخفاء جميع الرومات
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  **__!showall__->**اضهار جميع الرومات
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  **__!hide__->**اخفاء الشات فقط
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  **__!show__->**اضهار الشات فقط
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  **__!dr__->**حذف جميع الرومات
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  **__!dc__->**حذف جميع الالوان
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  **__!bans__->**عدد الاشخاص المحضورين بسيرفر
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  **__!setColor__->**يسويلك 200 لون
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  **__!setmember__->** يسوي روم  فيه عدد العضاء
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  **__!giveaway__->**قيف اوي
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-`)
     message.author.sendEmbed(embed)
     }
     });
  
	 
	 
	 
	 
	 
	 
   client.on("message", message => {
      if (message.content === "!help") {
       const embed = new Discord.RichEmbed() 
           .setColor("#57FEFF")
           .setDescription(`**⚙️اوامر الادارة|Administrator⚙️**
  **__!setmember__->**يسويلك روم عدد الاعضاء
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  **__!settime__->**يسويلك روم فيه الوقت
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  **__!setdate__->**يسويلك روم فيه الوقت
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  **__!bc__->**برود كاست 
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  **__!close__->**اغلاق التذكرة
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-`)
     message.author.sendEmbed(embed)
     }
     });
  	 
	 
  
  
  
  
  
  
   client.on("message", message => {
      if (message.content === "!help") {
       const embed = new Discord.RichEmbed() 
           .setColor("#FF00FF")
           .setFooter('!- ♛  𝒜ℳℰℰℛ_ ツ#3864')
           .setDescription(`**__أتمنى يعجبكم البوت  ❤️ 💛 💚 💙 💜 🖤__**`)
     message.author.sendEmbed(embed)
     
     }
     });


//مواصفات 
//1-يمنع الروابط
//2- يمنع النشر
//3- يورجيك اذا كانت شخص مسوي نفسه اوف لاين و يكتب
//4- لما تنمنشن البوت يرد عليك 
//5- عندما يدخل شخص الى سيرفرك يعطيه رتبة ملاحضة: لازم تكون مسوي رتبة اسمها Member
//6- منع السب
//7- ترحيب على الخاص اسم العضو و رقم العضو 


	 
	 
	 
client.on('message', message => {
  if(message.content === '!support') {
  const embed = new Discord.RichEmbed()
  .setTitle('Click here')
  .setURL('https://discord.gg/DPXc7gC')
  .setColor('RANDOM')
  message.channel.send({embed: embed});
  }
});

	 
	 
 
client.on('message', message => {
	 if (message.author.bot) return;
     if (message.content === prefix + "inv") {
     let embed = new Discord.RichEmbed()
.setColor("RANDOM")
.setTitle("Ｌｅｇａｎｄ Ｓｅｒｖｅｒ to invite TopMc Bot")
.setAuthor("legend server", "https://images-ext-2.discordapp.net/external/mE1tnTSH2_L-y_WW4QdhzzE-w0SS04Ft5pHAJHULQD4/https/cdn.discordapp.com/icons/503987674114162699/29b5e50bbb5fe1b1b295d7418675b93a.jpg")
.setTimestamp()
.setURL("https://discordapp.com/oauth2/authorize?client_id=510804568590778368&scope=bot&permissions=36760572")
  message.author.sendEmbed(embed);
    }
});
client.on('message', message => {
	 if (message.author.bot) return;
     if (message.content === prefix + "inv") {
  message.channel.send('**تم الارسال لك في الخاص | :ballot_box_with_check:**')
    }
});


	 
	 
	 
	 
	 
	 
client.on('typingStart', (ch, user) => {
    if(user.presence.status === 'offline') {
        ch.send(`${user} تحذير هذا شخص مسوي نفسه اوف لاين ويكتب`)
        .then(msg => {
            msg.delete(10000)
        })
    }
});

 
 
	 
	 
client.on("message", message => {

  if (message.content.startsWith(prefix + "avatar")) {
    message.channel.send(message.author.avatarURL);
  };
 })

	 
	 
	 

client.on('message', message =>{
    if(message.content === '!ping'){
let start = Date.now(); message.channel.send('pong').then(message => { 
message.edit(`\`\`\`js
Time taken: ${Date.now() - start} ms
Discord API: ${client.ping.toFixed(0)} ms\`\`\``);
    });
    }
});
 
 
 
	 

client.on('message',async msg => {
  var p = "!";
  if(msg.content.startsWith(p + "setmember")) {
  if(!msg.guild.member(msg.author).hasPermissions('MANAGE_CHANNELS')) return msg.reply('❌ **go play minecraft**');
  if(!msg.guild.member(client.user).hasPermissions(['MANAGE_CHANNELS'])) return msg.reply('❌ **البوت لا يمتلك صلاحية**');
  msg.guild.createChannel(`يتم تحضير الروم :[]` , 'voice').then(time => {
    time.overwritePermissions(msg.guild.id, {
      CONNECT: false,
      SPEAK: false
    });
  setInterval(() => {
      var currentTime = new Date(),
Year = currentTime.getFullYear(),
Month = currentTime.getMonth() + 1,
Dat = currentTime.getDate()
      time.setName(`Members : ◤ → ${client.users.size} ← ◢`);
 },1000);
  });
  }
 
});
	 
	 
	
	
	

	
	
	
 
const HeRo = new Discord.Client();
client.on('message', message => {
var prefix = "!";

    if (message.content === prefix + "date") {
        if (!message.channel.guild) return message.reply('** This command only for servers **');  
        var currentTime = new Date(),
            Year = currentTime.getFullYear(),
            Month = currentTime.getMonth() + 1,
            Day = currentTime.getDate();

            var Date15= new Discord.RichEmbed()
            .setTitle("**「  Date - التاريخ 」 **")
            .setColor('RANDOM')
            .setTimestamp()
            .setDescription( "「"+ Day + "-" + Month + "-" + Year + "」")
             message.channel.sendEmbed(Date15);
    }
});















client.on('message', message => {
	if (message.author.bot) return;
    if (message.content === "!server") {
        if (!message.channel.guild) return
        var verificationLevel = message.guild.verificationLevel;
        const verificationLevels = ['None','Low','Meduim','High','Extreme'];
        var Y1 = message.guild.createdAt.getFullYear() - 2000
        var M2 = message.guild.createdAt.getMonth()
        var D3 = message.guild.createdAt.getDate()
        const xNiTRoZ = new Discord.RichEmbed()
         .setAuthor(message.author.username , message.author.avatarURL)
         .setColor('RANDOM')
         .setTimestamp()
         .setTitle(message.guild.name,message.guild.iconURL)
         .addField(':id: اي دي السيرفر',`${message.guild.id}`,true)
         .addField(':date: أنشئت في',D3 + '.' + M2 + '.' + Y1,true)             
         .addField(':crown: اونر السيرفر',`${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}`)             
         .addField(':busts_in_silhouette: الاعضاء ' + ` ${message.guild.memberCount} `,'Online '+`[ ${message.guild.members.filter(m=>m.presence.status == 'online','idle','dnd').size} ]`+ ','+'Offline '+`[ ${message.guild.members.filter(m=>m.presence.status == 'offline').size} ]`,true)
         .addField(':speech_balloon: قنوات' +' '+message.guild.channels.size+' ',`Text [ ${message.guild.channels.filter(m => m.type === 'text').size} ]`+', '+`Voice [ ${message.guild.channels.filter(m => m.type === 'voice').size} ]`,true)
         .addField(':earth_asia: الدوله',message.guild.region)
         .addField(':ribbon: ايموجي السيرفر',`${message.guild.emojis.size}`,true)
         .addField(':construction: مستوى التحقق',`${verificationLevels[message.guild.verificationLevel]}`,true)
         .addField(':closed_lock_with_key: الرتب  '+message.guild.roles.size+' ','Type `!members` To See The Server member!')
         message.channel.send({embed:xNiTRoZ});
     }
    });
    



    
	
	
  client.on('message', message=> {
    if (message.author.bot) return;
    if (message.isMentioned(client.user))
    {
    message.reply(" هلا ");
    }
});
 	
	
	
	
	


client.on('message', message => {
    if (message.content === "!bot") {
           if(!message.channel.guild) return message.reply('** This command only for servers **');
    let embed = new Discord.RichEmbed()
 .setColor('RANDOM')
 .addField("**اسم السيرفر**", message.guild.name)
 .addField("**عدد السيرفرات الي فيها البوت:**" , client.guilds.size)
 .addField("**المستخدمين:**", client.users.size)
 .addField("**قنوات:**", client.channels.size)
message.channel.sendEmbed(embed);
   }
});









client.on('message', function(message) {
    if(message.content.startsWith(prefix + 'roll')) {
        let args = message.content.split(" ").slice(1);
        if (!args[0]) {
            message.channel.send('**Put a number**');
            return;
            }
    message.channel.send(Math.floor(Math.random() * args.join(' ')));
            if (!args[0]) {
          message.edit('1')
          return;
        }
    }
});









	 

   client.on('message',function(message) {
  if (message.author.bot) return;
var prefix = "!";
                  if(!message.channel.guild) return;

                    if (message.content === prefix + "member") {
 const embed = new Discord.RichEmbed()

    .setDescription(`**Members info :sparkles:
:green_heart: online:   ${message.guild.members.filter(m=>m.presence.status == 'online').size}
:heart:  dnd:       ${message.guild.members.filter(m=>m.presence.status == 'dnd').size}
:yellow_heart:  idle:     ${message.guild.members.filter(m=>m.presence.status == 'idle').size}
:diamond_shape_with_a_dot_inside:   membersCount:  ${message.guild.memberCount - message.guild.members.filter(m=>m.user.bot).size}
:bulb: bots: ${message.guild.members.filter(m=>m.user.bot).size} **`)
         message.channel.send({embed});

    }
      });
 
 
 	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
  client.on("message", msg => {
    var prefix = "!";
if(msg.content.startsWith (prefix + "id")) {
if(!msg.channel.guild) return msg.reply('**:x: اسف لكن هذا الامر للسيرفرات فقط **');         
const embed = new Discord.RichEmbed();
embed.addField(":cloud_tornado:  الاسم", `**[ ${msg.author.username}#${msg.author.discriminator} ]**`, true)
   .addField(":id:  الايدي", `**[ ${msg.author.id} ]**`, true)
   .setColor("RANDOM")
   .setFooter(msg.author.username , msg.author.avatarURL)
   .setThumbnail(`${msg.author.avatarURL}`)
   .setTimestamp()
   .setURL(`${msg.author.avatarURL}`)
   .addField(':spy:  الحالة', `**[ ${msg.author.presence.status.toUpperCase()} ]**`, true)
   .addField(':satellite_orbital:   يلعب', `**[ ${msg.author.presence.game === null ? "No Game" : msg.author.presence.game.name} ]**`, true)
   .addField(':military_medal:  الرتب', `**[ ${msg.member.roles.filter(r => r.name).size} ]**`, true)
   .addField(':robot:  هل هو بوت', `**[ ${msg.author.bot.toString().toUpperCase()} ]**`, true);
msg.channel.send({embed: embed})
}
});
	 
	 
	 
	 
	 
	 
	 




client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('.com')){
      if(!message.member.hasPermission('MANAGE_MESSAGE'))
        message.delete()
    return message.reply(`**Don't Share Links Plz :x:**`)
    }
});





client.on("message", message => {
    const prefix = "!"
              
          if(!message.channel.guild) return;
   if(message.author.bot) return;
      if(message.content === prefix + "as"){ 
          const embed = new Discord.RichEmbed()
  
      .setTitle(`This is  ** ${message.guild.name} **  Photo !`)
  .setAuthor(message.author.username, message.guild.iconrURL)
    .setColor(0x164fe3)
    .setImage(message.guild.iconURL)
    .setURL(message.guild.iconrURL)
                    .setTimestamp()

   message.channel.send({embed});
      }
  });
	 
	 

	 
	 
	 
	 
	 
	 
	 
 

client.on("message", msg => {
var prefix = "!";//البرفكس
if(msg.content.startsWith(prefix + "say")) {
var args = msg.content.split(" ").slice(1).join(" ")
var AlphaBack = new Discord.RichEmbed()
.setTitle(args);
msg.channel.sendEmbed(AlphaBack);
}
});

 
	 
	 
	 

client.on ("guildMemberAdd", member => {
  
   var role = member.guild.roles.find ("name", "Member");
   member.addRole (role);
  
})

client.on ("guildMemberRemove", member => {
   
})

	 
	 








 
 
 
client.on('message',async msg => {
  var p = "!";
  if(msg.content.startsWith(p + "setdate")) {
  if(!msg.guild.member(msg.author).hasPermissions('MANAGE_CHANNELS')) return msg.reply('❌ **go play minecraft**');
  if(!msg.guild.member(client.user).hasPermissions(['MANAGE_CHANNELS'])) return msg.reply('❌ **البوت لا يمتلك صلاحية**');
  msg.guild.createChannel(`date :[]` , 'voice').then(time => {
    time.overwritePermissions(msg.guild.id, {
      CONNECT: false,
      SPEAK: false
    });
  setInterval(() => {
      var currentTime = new Date(),
Year = currentTime.getFullYear(),
Month = currentTime.getMonth() + 1,
Dat = currentTime.getDate()
      time.setName(`Date : [${Year} - ${Month} - ${Dat}]]`);
 },1000);
  });
  }
 
});
  
  

  
  
  
  
  
client.on('message',async msg => {
  var p = "!";
  if(msg.content.startsWith(p + "settime")) {
  if(!msg.guild.member(msg.author).hasPermissions('MANAGE_CHANNELS')) return msg.reply('❌ **go play minecraft**');
  if(!msg.guild.member(client.user).hasPermissions(['MANAGE_CHANNELS'])) return msg.reply('❌ **البوت لا يمتلك صلاحية**');
  msg.guild.createChannel(`Time :[]` , 'voice').then(time => {
    time.overwritePermissions(msg.guild.id, {
      CONNECT: false,
      SPEAK: false
    });
  setInterval(() => {
      var currentTime = new Date(),
hours = currentTime.getHours() + 3 ,
minutes = currentTime.getMinutes(),
Seconds = currentTime.getSeconds()
if (minutes < 10) {
minutes = "0" + minutes;
}
var suffix = "AM";
if (hours >= 12) {
suffix = "PM";
hours = hours - 12;
}
if (hours == 0) {
hours = 12;
}
      time.setName(`Time :[${hours} : ${minutes} : ${Seconds} ${suffix}]`);
 },1000);
  });
  }
 
});
  







client.on('message',message =>{
    var prefix = "!";
    if(message.content.startsWith(prefix + 'top')) {
  message.guild.fetchInvites().then(i =>{
  var invites = [];
   
  i.forEach(inv =>{
    var [invs,i]=[{},null];
     
    if(inv.maxUses){
        invs[inv.code] =+ inv.uses+"/"+inv.maxUses;
    }else{
        invs[inv.code] =+ inv.uses;
    }
        invites.push(`invite: ${inv.url} inviter: ${inv.inviter} \`${invs[inv.code]}\`;`);
   
  });
  var embed = new Discord.RichEmbed()
  .setColor("#000000")
  .setDescription(`${invites.join(`\n`)+'\n\n**By:** '+message.author}`)
           message.channel.send({ embed: embed });
   
  });
   
    }
  });
 



 
 
 
 
 
 
 
 
client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('كس اختك')){
        message.delete()
      message.channel.sendMessage("", {embed: {
        title: "لا تسب",
        color: 0x06DF00,
        description: "مَّا يَلْفِظُ مِن قَوْلٍ إِلَّا لَدَيْهِ رَقِيبٌ عَتِيدٌ ",
        footer: {
          text: ":]"
        }
      }}).then(msg => {msg.delete(4000)});
                          }

     
}); 
 
 
 
 
 
client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('كس امك')){
        message.delete()
      message.channel.sendMessage("", {embed: {
        title: "لا تسب",
        color: 0x06DF00,
        description: "مَّا يَلْفِظُ مِن قَوْلٍ إِلَّا لَدَيْهِ رَقِيبٌ عَتِيدٌ ",
        footer: {
          text: ":]"
        }
      }}).then(msg => {msg.delete(4000)});
                          }

     
}); 
 
 

 
 
 
 
 
 
 
 
 
client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('نيك امك')){
        message.delete()
      message.channel.sendMessage("", {embed: {
        title: "لا تسب",
        color: 0x06DF00,
        description: "مَّا يَلْفِظُ مِن قَوْلٍ إِلَّا لَدَيْهِ رَقِيبٌ عَتِيدٌ ",
        footer: {
          text: ":]"
        }
      }}).then(msg => {msg.delete(4000)});
                          }

     
}); 
 

 
 
 
 
 
 
 
 
 
 
client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('نيك اختك')){
        message.delete()
      message.channel.sendMessage("", {embed: {
        title: "لا تسب",
        color: 0x06DF00,
        description: "مَّا يَلْفِظُ مِن قَوْلٍ إِلَّا لَدَيْهِ رَقِيبٌ عَتِيدٌ ",
        footer: {
          text: ":]"
        }
      }}).then(msg => {msg.delete(4000)});
                          }

     
}); 
 
 
 
 
 
 
 
client.on('message', message => {
    if (message.content.startsWith("!bans")) {
        message.guild.fetchBans()
        .then(bans => message.channel.send(`${bans.size} عدد اشخاص المبندة من السيرفر `))
  .catch(console.error);
}
});
 
 
 
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
         client.on('message', message => {
            if (message.content === 'السلام عليكم') {
              message.channel.send('**وعليكم السلام ورحمة الله وبركاته**');
              message.channel.sendFile("./photoshop.PNG");
               

            }
});
 

 
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
         client.on('message', message => {
            if (message.content === 'باك') {
              message.channel.send('**ولكم**');
              message.channel.sendFile("./photoshop.PNG");
               

            }
});





 
client.on('message', ( message ) => {
  if(message.author.bot) return;

  if(message.channel.id !== '520884218004242453') return;

  let types = [
    'jpg',
    'jpeg',
    'png',
    'gif',
    'mp4',
    'avi',
    'mkv',
    'mpeg'
  ]

  if (message.attachments.size <= 0) {
    message.delete();
    message.channel.send(`${message.author}, هذا الروم مخصص للصور فقط :angry:`)
    .then(msg => {
      setTimeout(() => {
        msg.delete();
      }, 5000)
  })
  return;
}

  if(message.attachments.size >= 1) {
    let filename = message.attachments.first().filename
    console.log(filename);
    if(!types.some( type => filename.endsWith(type) )) {
      message.delete();
      message.channel.send(`${message.author}, هذا الروم مخصص للصور فقط :angry:`)
      .then(msg => {
        setTimeout(() => {
          msg.delete();
        }, 5000)
      })
    }
  }

})


	



client.on('message', msg => {
  if (msg.content === 'السعودية') {      
    msg.react("🇸🇦")
    msg.channel.send("🇸🇦")
  }
});

client.on('message', msg => {
  if (msg.content === 'مصر') {      
    msg.react("🇪🇬")
    msg.channel.send("🇪🇬")
  }
});

client.on('message', msg => {
  if (msg.content === 'المغرب') {      
    msg.react("🇲🇦")
    msg.channel.send("🇲🇦")
  }
});

client.on('message', msg => {
  if (msg.content === 'العراق') {      
    msg.react("🇮🇶")
    msg.channel.send("🇮🇶")
  }
});

client.on('message', msg => {
  if (msg.content === 'الجزائر') {      
    msg.react("🇩🇿")
    msg.channel.send("🇩🇿")
  }
});

client.on('message', msg => {
  if (msg.content === 'الامارات') {      
    msg.react("🇦🇪")
    msg.channel.send("🇦🇪")
  }
});

client.on('message', msg => {
  if (msg.content === 'تونس') {      
    msg.react("🇹🇳")
    msg.channel.send("🇹🇳")
  }
});

client.on('message', msg => {
  if (msg.content === 'سوريا') {      
    msg.react("🇸🇾")
    msg.channel.send("🇸🇾")
  }
});

client.on('message', msg => {
  if (msg.content === 'ليبيا') {      
    msg.react("🇱🇾")
    msg.channel.send("🇱🇾")
  }
});

client.on('message', msg => {
  if (msg.content === 'قطر') {      
    msg.react("🇶🇦")
    msg.channel.send("🇶🇦")
  }
});

client.on('message', msg => {
  if (msg.content === 'الصومال') {      
    msg.react("🇸🇴")
    msg.channel.send("🇸🇴")
  }
});

client.on('message', msg => {
  if (msg.content === 'عمان') {      
    msg.react("🇴🇲")
    msg.channel.send("🇴🇲")
  }
});

client.on('message', msg => {
  if (msg.content === 'موريتانيا') {      
    msg.react("🇲🇷")
    msg.channel.send("🇲🇷")
  }
});
	
		
	
client.on('message', msg => {
  if (msg.content === 'فلسطين') {      
    msg.react(":flag_ps: ")
    msg.channel.send(":flag_ps: ")
  }
});
	

	
	
	

	 
client.on("message", msg => {
if(msg.content === "مرحبا") {//
msg.channel.send("`اهلين`")
}
});
	 
	 
	 
	 



client.on('message', message => {
if(message.content.startsWith("!slots")) {
  let slot1 = ['🍏', '🍇', '🍒', '🍍', '🍅', '🍆', '🍑', '🍓'];
  let slots1 = `${slot1[Math.floor(Math.random() * slot1.length)]}`;
  let slots2 = `${slot1[Math.floor(Math.random() * slot1.length)]}`;
  let slots3 = `${slot1[Math.floor(Math.random() * slot1.length)]}`;
  let we;
  if(slots1 === slots2 && slots2 === slots3) {
    we = "Win!"
  } else {
    we = "Lose!"
  }
  message.channel.send(`${slots1} | ${slots2} | ${slots3} - ${we}`)
}
});


















	 
const Sra7a = [
            'صراحه  |  صوتك حلوة؟',
            'صراحه  |  التقيت الناس مع وجوهين؟',
            'صراحه  |  شيء وكنت تحقق اللسان؟',
            'صراحه  |  أنا ��خص ضعيف عندما؟',
            'صراحه  |  هل ترغب في إظهار حبك ومرفق لشخص أو رؤية هذا الضعف؟',
            'صراحه  |  يدل على أن الكذب مرات تكون ضرورية شي؟',
            'صراحه  |  أشعر بالوحدة على الرغم من أنني تحيط بك كثيرا؟',
            'صراحه  |  كيفية الكشف عن من يكمن عليك؟',
            'صراحه  |  إذا حاول شخص ما أن يكرهه أن يقترب منك ويهتم بك تعطيه فرصة؟',
            'صراحه  |  أشجع شيء حلو في حياتك؟',
            'صراحه  |  طريقة جيدة يقنع حتى لو كانت الفكرة خاطئة" توافق؟',
            'صراحه  |  كيف تتصرف مع من يسيئون فهمك ويأخذ على ذهنه ثم ينتظر أن يرفض؟',
            'صراحه  |  التغيير العادي عندما يكون الشخص الذي يحبه؟',
            'صراحه  |  المواقف الصعبة تضعف لك ولا ترفع؟',
            'صراحه  |  نظرة و يفسد الصداقة؟',
            'صراحه  |  ‏‏إذا أحد قالك كلام سيء بالغالب وش تكون ردة فعلك؟',
            'صراحه  |  شخص معك بالحلوه والمُره؟',
            'صراحه  |  ‏هل تحب إظهار حبك وتعلقك بالشخص ��م ترى ذلك ضعف؟',
            'صراحه  |  تأخذ بكلام اللي ينصحك ولا تسوي اللي تبي؟',
            'صراحه  |  وش تتمنى الناس تعرف عليك؟',
            'صراحه  |  ابيع المجرة عشان؟',
            'صراحه  |  أحيانا احس ان الناس ، كمل؟',
            'صراحه  |  مع مين ودك تنام اليوم؟',
            'صراحه  |  صدفة العمر الحلوة هي اني؟',
            'صراحه  |  الكُره العظيم دايم يجي بعد حُب قوي " تتفق؟',
            'صراحه  |  صفة تحبها في نفسك؟',
            'صراحه  |  ‏الفقر فقر العقول ليس الجيوب " ، تتفق؟',
            'صراحه  |  تصلي صلواتك الخمس كلها؟',
            'صراحه  |  ‏تجامل أحد على راحتك؟',
            'صراحه  |  اشجع شيء سويتة بحياتك؟',
            'صراحه  |  وش ناوي تسوي اليوم؟',
            'صراحه  |  وش شعورك لما تشوف المطر؟',
            'صراحه  |  غيرتك هاديه ولا تسوي مشاكل؟',
            'صراحه  |  ما اكثر شي ندمن عليه؟',
            'صراحه  |  اي الدول تتمنى ان تزورها؟',
            'صراحه  |  متى اخر مره بكيت؟',
            'صراحه  |  تقيم حظك ؟ من عشره؟',
            'صراحه  |  هل تعتقد ان حظك سيئ؟',
            'صراحه  |  شـخــص تتمنــي الإنتقــام منـــه؟',
            'صراحه  |  كلمة تود سماعها كل يوم؟',
            'صراحه  |  **هل تُتقن عملك أم تشعر بالممل؟',
            'صراحه  |  هل قمت بانتحال أحد الشخصيات لتكذب على من حولك؟',
            'صراحه  |  متى آخر مرة قمت بعمل مُشكلة كبيرة وتسببت في خسائر؟',
            'صراحه  |  ما هو اسوأ خبر سمعته بحياتك؟',
            '‏صراحه | هل جرحت شخص تحبه من قبل ؟',
            'صراحه  |  ما هي العادة التي تُحب أن تبتعد عنها؟',
            '‏صراحه | هل تحب عائلتك ام تكرههم؟',
            '‏صراحه  |  من هو الشخص الذي يأتي في قلبك بعد الله – سبحانه وتعالى- ورسوله الكريم – صلى الله عليه وسلم؟',
            '‏صراحه  |  هل خجلت من نفسك من قبل؟',
            '‏صراحه  |  ما هو ا الحلم  الذي لم تستطيع ان تحققه؟',
            '‏صراحه  |  ما هو الشخص الذي تحلم به كل ليلة؟',
            '‏صراحه  |  هل تعرضت إلى موقف مُ��رج جعلك تكره صاحبهُ؟',
             '‏صراحه  |  هل قمت بالبكاء أمام من تُحب؟',
            '‏صراحه  |  ماذا تختار حبيبك أم صديقك؟',
            '‏صراحه  | هل حياتك سعيدة أم حزينة؟',
            'صراحه  |  ما هي أجمل سنة عشتها بحياتك؟',
            '‏صراحه  |  ما هو عمرك الحقيقي؟',
            '‏صراحه  |  ما اكثر شي ندمن عليه؟',
            'صراحه  |  ما هي أمنياتك المُستقبلية؟‏',
       ]
          client.on('message', message => {
			  	var prefix = "!"
        if (message.content.startsWith(prefix + 'صراحه')) {
            if(!message.channel.guild) return message.reply('** This command only for servers **');
         var client= new Discord.RichEmbed()
         .setTitle("Alpha")
         .setColor('RANDOM')
         .setDescription(`${Sra7a[Math.floor(Math.random() * Sra7a.length)]}`)
         .setImage("https://cdn.discordapp.com/attachments/371269161470525444/384103927060234242/125.png")
                         .setTimestamp()
       
          message.channel.sendEmbed(client);
          message.react("??")
        }
       });
  
	 





client.on('message', message => {
if(message.content === prefix + '!' || message.content === prefix + 'قرآن') {
	let pages = ['http://quran.ksu.edu.sa/ayat/safahat1/1.png','http://quran.ksu.edu.sa/ayat/safahat1/2.png','http://quran.ksu.edu.sa/ayat/safahat1/3.png','http://quran.ksu.edu.sa/ayat/safahat1/4.png','http://quran.ksu.edu.sa/ayat/safahat1/5.png','http://quran.ksu.edu.sa/ayat/safahat1/6.png','http://quran.ksu.edu.sa/ayat/safahat1/7.png','http://quran.ksu.edu.sa/ayat/safahat1/8.png','http://quran.ksu.edu.sa/ayat/safahat1/9.png','http://quran.ksu.edu.sa/ayat/safahat1/10.png','http://quran.ksu.edu.sa/ayat/safahat1/11.png','http://quran.ksu.edu.sa/ayat/safahat1/12.png','http://quran.ksu.edu.sa/ayat/safahat1/13.png','http://quran.ksu.edu.sa/ayat/safahat1/14.png','http://quran.ksu.edu.sa/ayat/safahat1/15.png','http://quran.ksu.edu.sa/ayat/safahat1/16.png','http://quran.ksu.edu.sa/ayat/safahat1/17.png','http://quran.ksu.edu.sa/ayat/safahat1/18.png','http://quran.ksu.edu.sa/ayat/safahat1/19.png','http://quran.ksu.edu.sa/ayat/safahat1/20.png','http://quran.ksu.edu.sa/ayat/safahat1/21.png','http://quran.ksu.edu.sa/ayat/safahat1/22.png','http://quran.ksu.edu.sa/ayat/safahat1/23.png','http://quran.ksu.edu.sa/ayat/safahat1/24.png','http://quran.ksu.edu.sa/ayat/safahat1/25.png','http://quran.ksu.edu.sa/ayat/safahat1/26.png','http://quran.ksu.edu.sa/ayat/safahat1/27.png','http://quran.ksu.edu.sa/ayat/safahat1/28.png','http://quran.ksu.edu.sa/ayat/safahat1/29.png','http://quran.ksu.edu.sa/ayat/safahat1/30.png','http://quran.ksu.edu.sa/ayat/safahat1/31.png','http://quran.ksu.edu.sa/ayat/safahat1/32.png','http://quran.ksu.edu.sa/ayat/safahat1/33.png','http://quran.ksu.edu.sa/ayat/safahat1/34.png','http://quran.ksu.edu.sa/ayat/safahat1/35.png','http://quran.ksu.edu.sa/ayat/safahat1/36.png','http://quran.ksu.edu.sa/ayat/safahat1/37.png','http://quran.ksu.edu.sa/ayat/safahat1/38.png','http://quran.ksu.edu.sa/ayat/safahat1/39.png','http://quran.ksu.edu.sa/ayat/safahat1/40.png','http://quran.ksu.edu.sa/ayat/safahat1/41.png','http://quran.ksu.edu.sa/ayat/safahat1/42.png','http://quran.ksu.edu.sa/ayat/safahat1/43.png','http://quran.ksu.edu.sa/ayat/safahat1/44.png','http://quran.ksu.edu.sa/ayat/safahat1/45.png','http://quran.ksu.edu.sa/ayat/safahat1/46.png','http://quran.ksu.edu.sa/ayat/safahat1/47.png','http://quran.ksu.edu.sa/ayat/safahat1/48.png','http://quran.ksu.edu.sa/ayat/safahat1/49.png','http://quran.ksu.edu.sa/ayat/safahat1/50.png','http://quran.ksu.edu.sa/ayat/safahat1/51.png','http://quran.ksu.edu.sa/ayat/safahat1/52.png','http://quran.ksu.edu.sa/ayat/safahat1/53.png','http://quran.ksu.edu.sa/ayat/safahat1/55.png','http://quran.ksu.edu.sa/ayat/safahat1/56.png','http://quran.ksu.edu.sa/ayat/safahat1/57.png','http://quran.ksu.edu.sa/ayat/safahat1/58.png','http://quran.ksu.edu.sa/ayat/safahat1/59.png','http://quran.ksu.edu.sa/ayat/safahat1/60.png','http://quran.ksu.edu.sa/ayat/safahat1/60.png','http://quran.ksu.edu.sa/ayat/safahat1/61.png','http://quran.ksu.edu.sa/ayat/safahat1/62.png','http://quran.ksu.edu.sa/ayat/safahat1/63.png','http://quran.ksu.edu.sa/ayat/safahat1/64.png','http://quran.ksu.edu.sa/ayat/safahat1/65.png','http://quran.ksu.edu.sa/ayat/safahat1/66.png','http://quran.ksu.edu.sa/ayat/safahat1/67.png','http://quran.ksu.edu.sa/ayat/safahat1/68.png','http://quran.ksu.edu.sa/ayat/safahat1/69.png','http://quran.ksu.edu.sa/ayat/safahat1/70.png','http://quran.ksu.edu.sa/ayat/safahat1/71.png','http://quran.ksu.edu.sa/ayat/safahat1/72.png','http://quran.ksu.edu.sa/ayat/safahat1/73.png','http://quran.ksu.edu.sa/ayat/safahat1/74.png','http://quran.ksu.edu.sa/ayat/safahat1/75.png','http://quran.ksu.edu.sa/ayat/safahat1/76.png','http://quran.ksu.edu.sa/ayat/safahat1/77.png','http://quran.ksu.edu.sa/ayat/safahat1/78.png','http://quran.ksu.edu.sa/ayat/safahat1/79.png','http://quran.ksu.edu.sa/ayat/safahat1/80.png','http://quran.ksu.edu.sa/ayat/safahat1/81.png','http://quran.ksu.edu.sa/ayat/safahat1/82.png','http://quran.ksu.edu.sa/ayat/safahat1/83.png','http://quran.ksu.edu.sa/ayat/safahat1/84.png','http://quran.ksu.edu.sa/ayat/safahat1/85.png','http://quran.ksu.edu.sa/ayat/safahat1/86.png','http://quran.ksu.edu.sa/ayat/safahat1/87.png','http://quran.ksu.edu.sa/ayat/safahat1/88.png','http://quran.ksu.edu.sa/ayat/safahat1/89.png','http://quran.ksu.edu.sa/ayat/safahat1/90.png','http://quran.ksu.edu.sa/ayat/safahat1/91.png','http://quran.ksu.edu.sa/ayat/safahat1/92.png','http://quran.ksu.edu.sa/ayat/safahat1/93.png','http://quran.ksu.edu.sa/ayat/safahat1/94.png','http://quran.ksu.edu.sa/ayat/safahat1/95.png','http://quran.ksu.edu.sa/ayat/safahat1/96.png','http://quran.ksu.edu.sa/ayat/safahat1/97.png','http://quran.ksu.edu.sa/ayat/safahat1/98.png','http://quran.ksu.edu.sa/ayat/safahat1/99.png','http://quran.ksu.edu.sa/ayat/safahat1/100.png','http://quran.ksu.edu.sa/ayat/safahat1/101.png','http://quran.ksu.edu.sa/ayat/safahat1/102.png','http://quran.ksu.edu.sa/ayat/safahat1/103.png','http://quran.ksu.edu.sa/ayat/safahat1/104.png','http://quran.ksu.edu.sa/ayat/safahat1/105.png','http://quran.ksu.edu.sa/ayat/safahat1/106.png','http://quran.ksu.edu.sa/ayat/safahat1/107.png','http://quran.ksu.edu.sa/ayat/safahat1/108.png','http://quran.ksu.edu.sa/ayat/safahat1/109.png','http://quran.ksu.edu.sa/ayat/safahat1/110.png','http://quran.ksu.edu.sa/ayat/safahat1/111.png','http://quran.ksu.edu.sa/ayat/safahat1/112.png','http://quran.ksu.edu.sa/ayat/safahat1/113.png','http://quran.ksu.edu.sa/ayat/safahat1/114.png','http://quran.ksu.edu.sa/ayat/safahat1/115.png','http://quran.ksu.edu.sa/ayat/safahat1/116.png','http://quran.ksu.edu.sa/ayat/safahat1/117.png','http://quran.ksu.edu.sa/ayat/safahat1/118.png','http://quran.ksu.edu.sa/ayat/safahat1/119.png','http://quran.ksu.edu.sa/ayat/safahat1/120.png','http://quran.ksu.edu.sa/ayat/safahat1/121.png','http://quran.ksu.edu.sa/ayat/safahat1/122.png','http://quran.ksu.edu.sa/ayat/safahat1/123.png','http://quran.ksu.edu.sa/ayat/safahat1/124.png','http://quran.ksu.edu.sa/ayat/safahat1/125.png','http://quran.ksu.edu.sa/ayat/safahat1/126.png','http://quran.ksu.edu.sa/ayat/safahat1/127.png','http://quran.ksu.edu.sa/ayat/safahat1/128.png','http://quran.ksu.edu.sa/ayat/safahat1/129.png','http://quran.ksu.edu.sa/ayat/safahat1/130.png','http://quran.ksu.edu.sa/ayat/safahat1/131.png','http://quran.ksu.edu.sa/ayat/safahat1/132.png','http://quran.ksu.edu.sa/ayat/safahat1/133.png','http://quran.ksu.edu.sa/ayat/safahat1/134.png','http://quran.ksu.edu.sa/ayat/safahat1/135.png','http://quran.ksu.edu.sa/ayat/safahat1/136.png','http://quran.ksu.edu.sa/ayat/safahat1/137.png','http://quran.ksu.edu.sa/ayat/safahat1/138.png','http://quran.ksu.edu.sa/ayat/safahat1/139.png','http://quran.ksu.edu.sa/ayat/safahat1/140.png','http://quran.ksu.edu.sa/ayat/safahat1/141.png','http://quran.ksu.edu.sa/ayat/safahat1/142.png','http://quran.ksu.edu.sa/ayat/safahat1/143.png','http://quran.ksu.edu.sa/ayat/safahat1/144.png','http://quran.ksu.edu.sa/ayat/safahat1/145.png','http://quran.ksu.edu.sa/ayat/safahat1/146.png','http://quran.ksu.edu.sa/ayat/safahat1/147.png','http://quran.ksu.edu.sa/ayat/safahat1/148.png','http://quran.ksu.edu.sa/ayat/safahat1/149.png','http://quran.ksu.edu.sa/ayat/safahat1/150.png','http://quran.ksu.edu.sa/ayat/safahat1/151.png','http://quran.ksu.edu.sa/ayat/safahat1/152.png','http://quran.ksu.edu.sa/ayat/safahat1/153.png','http://quran.ksu.edu.sa/ayat/safahat1/154.png','http://quran.ksu.edu.sa/ayat/safahat1/155.png','http://quran.ksu.edu.sa/ayat/safahat1/156.png','http://quran.ksu.edu.sa/ayat/safahat1/157.png','http://quran.ksu.edu.sa/ayat/safahat1/158.png','http://quran.ksu.edu.sa/ayat/safahat1/159.png','http://quran.ksu.edu.sa/ayat/safahat1/160.png','http://quran.ksu.edu.sa/ayat/safahat1/161.png','http://quran.ksu.edu.sa/ayat/safahat1/162.png','http://quran.ksu.edu.sa/ayat/safahat1/163.png','http://quran.ksu.edu.sa/ayat/safahat1/164.png','http://quran.ksu.edu.sa/ayat/safahat1/165.png','http://quran.ksu.edu.sa/ayat/safahat1/166.png','http://quran.ksu.edu.sa/ayat/safahat1/167.png','http://quran.ksu.edu.sa/ayat/safahat1/168.png','http://quran.ksu.edu.sa/ayat/safahat1/169.png','http://quran.ksu.edu.sa/ayat/safahat1/170.png','http://quran.ksu.edu.sa/ayat/safahat1/171.png','http://quran.ksu.edu.sa/ayat/safahat1/172.png','http://quran.ksu.edu.sa/ayat/safahat1/173.png','http://quran.ksu.edu.sa/ayat/safahat1/174.png','http://quran.ksu.edu.sa/ayat/safahat1/175.png','http://quran.ksu.edu.sa/ayat/safahat1/176.png','http://quran.ksu.edu.sa/ayat/safahat1/177.png','http://quran.ksu.edu.sa/ayat/safahat1/178.png','http://quran.ksu.edu.sa/ayat/safahat1/179.png','http://quran.ksu.edu.sa/ayat/safahat1/180.png','http://quran.ksu.edu.sa/ayat/safahat1/181.png','http://quran.ksu.edu.sa/ayat/safahat1/182.png','http://quran.ksu.edu.sa/ayat/safahat1/183.png','http://quran.ksu.edu.sa/ayat/safahat1/184.png','http://quran.ksu.edu.sa/ayat/safahat1/185.png','http://quran.ksu.edu.sa/ayat/safahat1/186.png','http://quran.ksu.edu.sa/ayat/safahat1/187.png','http://quran.ksu.edu.sa/ayat/safahat1/188.png','http://quran.ksu.edu.sa/ayat/safahat1/189.png','http://quran.ksu.edu.sa/ayat/safahat1/190.png','http://quran.ksu.edu.sa/ayat/safahat1/191.png','http://quran.ksu.edu.sa/ayat/safahat1/192.png','http://quran.ksu.edu.sa/ayat/safahat1/193.png','http://quran.ksu.edu.sa/ayat/safahat1/194.png','http://quran.ksu.edu.sa/ayat/safahat1/195.png','http://quran.ksu.edu.sa/ayat/safahat1/196.png','http://quran.ksu.edu.sa/ayat/safahat1/197.png','http://quran.ksu.edu.sa/ayat/safahat1/198.png','http://quran.ksu.edu.sa/ayat/safahat1/199.png','http://quran.ksu.edu.sa/ayat/safahat1/200.png']
	let page = 1;
	
	message.delete();
	
	let embed = new Discord.RichEmbed()
	.setColor('#264d00')
	.setFooter(`القراآن الكريم | صفحة رقم ${page} من اصل ${pages.length} صفحة`, 'https://cdn.discordapp.com/attachments/404332408075190282/412722171325054996/NS1.png')
	.setImage(pages[page-1])
	
// ${page}
// ${pages.length}
	message.channel.sendEmbed(embed).then(msg => {
		
		msg.react('⏮').then( r => {
			msg.react('⬅')
		.then(() => msg.react('⏹'))
		.then(() => msg.react('➡'))
		.then(() => msg.react('⏭'))
			
			let backwardsFilter = (reaction, user) => reaction.emoji.name === '⬅' && user.id === message.author.id;
			let forwardsFilter = (reaction, user) => reaction.emoji.name === '➡' && user.id === message.author.id;
			
			let sbackwardsFilter = (reaction, user) => reaction.emoji.name === '⏮' && user.id === message.author.id;
			let sforwardsFilter = (reaction, user) => reaction.emoji.name === '⏭' && user.id === message.author.id;
			
			let cancelFilter = (reaction, user) => reaction.emoji.name === '⏹' && user.id === message.author.id;
			
			let backwards = msg.createReactionCollector(backwardsFilter, { time: 0 });
			let forwards = msg.createReactionCollector(forwardsFilter, { time: 0 });
			
			let sbackwards = msg.createReactionCollector(sbackwardsFilter, { time: 0 });
			let sforwards = msg.createReactionCollector(sforwardsFilter, { time: 0 });
			
			let cancel = msg.createReactionCollector(cancelFilter, { time: 0 });
			
			backwards.on('collect', r => {
				if (page === 1) return;
				page--;
				embed.setImage(pages[page-1]);
				embed.setFooter(`القراآن الكريم | صفحة رقم ${page} من اصل ${pages.length} صفحة`, 'https://cdn.discordapp.com/attachments/404332408075190282/412722171325054996/NS1.png');
				msg.edit(embed)
			})
			forwards.on('collect', r => {
				if (page === pages.length) return;
				page++;
				embed.setImage(pages[page-1]);
				embed.setFooter(`القراآن الكريم | صفحة رقم ${page} من اصل ${pages.length} صفحة`, 'https://cdn.discordapp.com/attachments/404332408075190282/412722171325054996/NS1.png');
				msg.edit(embed)
			})
			sbackwards.on('collect', r => {
				if (page === 1) return;
				page = 1;
				embed.setImage(pages[page-1]);
				embed.setFooter(`القراآن الكريم | صفحة رقم ${page} من اصل ${pages.length} صفحة`, 'https://cdn.discordapp.com/attachments/404332408075190282/412722171325054996/NS1.png');
				msg.edit(embed)
			})
			sforwards.on('collect', r => {
				if (page === pages.length) return;
				page = 200; 
				embed.setImage(pages[page-1]);
				embed.setFooter(`القراآن الكريم | صفحة رقم ${page} من اصل ${pages.length} صفحة`, 'https://cdn.discordapp.com/attachments/404332408075190282/412722171325054996/NS1.png');
				msg.edit(embed)
			})
			cancel.on('collect', r => {
				embed.setDescription(`**سوف يتم إغلاق القائمة**`);
				embed.setImage('');
				embed.setFooter(`Menu will close after 3sec`, 'https://cdn.discordapp.com/attachments/404332408075190282/412722171325054996/NS1.png');
				msg.edit(embed).then(msg.delete(3000));
			})
		})
	})
}
});
	 
	 
	 
	 
	 
	 
	 

	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
  const adkar = [
    '**اذكار  | **اللَّهُمَّ اكْفِنِي بِحَلَالِكَ عَنْ حَرَامِكَ وَأَغْنِنِي بِفَضْلِكَ عَمَّنْ سِوَاكَ.',
    '**اذكار  |  **اللَّهُمَّ إِنِّي أَسْأَلُكَ الْهُدَى وَالتُّقَى وَالْعَفَافَ وَالْغِنَى. ',
    '**اذكار  ‏|  **اللَّهُمَّ اغْفِرْ لِي ذَنْبِي كُلَّهُ، دِقَّهُ، وَجِلَّهُ، وَأَوَّلَهُ، وَآخِرَهُ، وَعَلَانِيَتَهُ، وَسِرَّهُ. ',
    '**‏اذكار  |  **أستغفر الله .',     
    '**‏اذكار  | **الْلَّهُ أَكْبَرُ',
    '**‏اذكار  |  **لَا إِلَهَ إِلَّا اللَّهُ',
    '**اذكار  |  **اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ كَمَا صَلَّيْتَ عَلَى إِبْرَاهِيمَ , وَعَلَى آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ , اللَّهُمَّ بَارِكْ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ كَمَا بَارَكْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ.',
    '**اذكار  |  **سُبْحَانَ الْلَّهِ، وَالْحَمْدُ لِلَّهِ، وَلَا إِلَهَ إِلَّا الْلَّهُ، وَالْلَّهُ أَكْبَرُ',
    '**اذكار  | **لَا إلَه إلّا اللهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلُّ شَيْءِ قَدِيرِ.',
    '**اذكار  | **أسْتَغْفِرُ اللهَ وَأتُوبُ إلَيْهِ',
    '**‏اذكار  | **سُبْحـانَ اللهِ وَبِحَمْـدِهِ. ',
    '‏**اذكار**|  لَا إلَه إلّا اللهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءِ قَدِيرِ.',
    '**اذكار  ‏|   **اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْمًا نَافِعًا، وَرِزْقًا طَيِّبًا، وَعَمَلًا مُتَقَبَّلًا.',
    '**اذكار  | ‏ **يَا رَبِّ , لَكَ الْحَمْدُ كَمَا يَنْبَغِي لِجَلَالِ وَجْهِكَ , وَلِعَظِيمِ سُلْطَانِكَ.',
    'اذكار    |  **أسْتَغْفِرُ اللهَ العَظِيمَ الَّذِي لاَ إلَهَ إلاَّ هُوَ، الحَيُّ القَيُّومُ، وَأتُوبُ إلَيهِ.**',
    '**‏اذكار  |  **اللَّهُمَّ إِنَّا نَعُوذُ بِكَ مِنْ أَنْ نُشْرِكَ بِكَ شَيْئًا نَعْلَمُهُ ، وَنَسْتَغْفِرُكَ لِمَا لَا نَعْلَمُهُ.',
    '**‏اذكار  |  **اللَّهُمَّ صَلِّ وَسَلِّمْ وَبَارِكْ على نَبِيِّنَا مُحمَّد. ',
    '**‏اذكار  |  **أَعـوذُ بِكَلِمـاتِ اللّهِ التّـامّـاتِ مِنْ شَـرِّ ما خَلَـق.',
    '**اذكار  |  **يَا حَيُّ يَا قيُّومُ بِرَحْمَتِكَ أسْتَغِيثُ أصْلِحْ لِي شَأنِي كُلَّهُ وَلاَ تَكِلْنِي إلَى نَفْسِي طَـرْفَةَ عَيْنٍ. ',
    '**اذكار  |  **اللّهُـمَّ إِنّـي أَعـوذُ بِكَ مِنَ الْكُـفر ، وَالفَـقْر ، وَأَعـوذُ بِكَ مِنْ عَذابِ القَـبْر ، لا إلهَ إلاّ أَنْـتَ.',
    '**‏اذكار  |  **اللّهُـمَّ عافِـني في بَدَنـي ، اللّهُـمَّ عافِـني في سَمْـعي ، اللّهُـمَّ عافِـني في بَصَـري ، لا إلهَ إلاّ أَنْـتَ.',
    '**‏اذكار  |  **سُبْحـانَ اللهِ وَبِحَمْـدِهِ عَدَدَ خَلْـقِه ، وَرِضـا نَفْسِـه ، وَزِنَـةَ عَـرْشِـه ، وَمِـدادَ كَلِمـاتِـه. ',
    '**‏اذكار  |  **اللّهُـمَّ بِكَ أَصْـبَحْنا وَبِكَ أَمْسَـينا ، وَبِكَ نَحْـيا وَبِكَ نَمُـوتُ وَإِلَـيْكَ النُّـشُور.',
    '**‏اذكار  |  **بِسـمِ اللهِ الذي لا يَضُـرُّ مَعَ اسمِـهِ شَيءٌ في الأرْضِ وَلا في السّمـاءِ وَهـوَ السّمـيعُ العَلـيم. ',
    '**‏اذكار  |  **حَسْبِـيَ اللّهُ لا إلهَ إلاّ هُوَ عَلَـيهِ تَوَكَّـلتُ وَهُوَ رَبُّ العَرْشِ العَظـيم.',
    '**اذكار  |  **اللّهُـمَّ ما أَصْبَـَحَ بي مِـنْ نِعْـمَةٍ أَو بِأَحَـدٍ مِـنْ خَلْـقِك ، فَمِـنْكَ وَحْـدَكَ لا شريكَ لَـك ، فَلَـكَ الْحَمْـدُ وَلَـكَ الشُّكْـر.',
    '**‏اذكار  |  **اللّهُـمَّ إِنِّـي أَصْبَـحْتُ أُشْـهِدُك ، وَأُشْـهِدُ حَمَلَـةَ عَـرْشِـك ، وَمَلَائِكَتَكَ ، وَجَمـيعَ خَلْـقِك ، أَنَّـكَ أَنْـتَ اللهُ لا إلهَ إلاّ أَنْـتَ وَحْـدَكَ لا شَريكَ لَـك ، وَأَنَّ ُ مُحَمّـداً عَبْـدُكَ وَرَسـولُـك',
    '**‏اذكار  |  **رَضيـتُ بِاللهِ رَبَّـاً وَبِالإسْلامِ ديـناً وَبِمُحَـمَّدٍ صلى ��لله عليه وسلم نَبِيّـاً',
    '**‏اذكار  |  **اللهم إني أعوذ بك من العجز، والكسل، والجبن، والبخل، والهرم، وعذاب القبر، اللهم آت نفسي تقواها، وزكها أنت خير من زكاها. أنت وليها ومولاها. اللهم إني أعوذ بك من علم لا ينفع، ومن قلب لا يخشع، ومن نفس لا تشبع، ومن دعوة لا يستجاب لها',
    '**‏اذكار  |  **اللهم إني أعوذ بك من شر ما عملت، ومن شر ما لم أعمل',
    '**‏اذكار  |  **اللهم مصرف القلوب صرف قلوبنا على طاعتك',
  ]
  client.on('message', message => {
	  	var prefix = "!"
  if (message.author.bot) return;
  if (message.content.startsWith(prefix + 'اذكار')) {
    if(!message.channel.guild) return;
  var client= new Discord.RichEmbed()
  .setTitle("Legend GaMerZ .")
  .setThumbnail(message.author.avatarURL)
  .setColor('RANDOM')
  .setDescription(`${adkar[Math.floor(Math.random() * adkar.length)]}`)
                 .setTimestamp()
  message.channel.sendEmbed(client);
  message.react("??")
  }
  });
  

	 
	 
	 

client.on('message', function(message) {
    if (message.channel.type === "dm") {
        if (message.author.id === client.user.id) return;
        var stewart = new Discord.RichEmbed()
            .setColor('RANDOM')
            .setTimestamp()
            .setTitle('``رساله جديده في خاص البوت``')
            .setThumbnail(`${message.author.avatarURL}`)
            .setDescription(`\n\n\`\`\`${message.content}\`\`\``)
            .setFooter(`من (@${message.author.tag})  |  (${message.author.id})`)
        client.channels.get("520889648822616104").send({ embed: stewart });
    }
});
 
 
 
 
client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(`:rose:  ولكم نورت السيرفر:rose: 
:crown:اسم العضو  ${member}:crown:  
انت العضو رقم ${member.guild.memberCount} `) 
}).catch(console.error)
})


 


client.on("message", (message) => {
    if (message.content.startsWith("!cv")) {
                if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");
            let args = message.content.split(" ").slice(1);
        message.guild.createChannel(args.join(' '), 'voice');
                  message.channel.send('__**Done ✅**__')                
    }
    });
	
  
  
  
  
  
client.on("message", (message) => {
    if (message.content.startsWith("!ct")) {
                if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");
            let args = message.content.split(" ").slice(1);
        message.guild.createChannel(args.join(' '), 'text');
                  message.channel.send('__**Done ✅**__')            
    }
    });
	

	

	
	
	
	
	
	
	
 
const lion = {
    ' ': '   ',
    '0': '0⃣',
    '1': '1⃣',
    '2': '2⃣',
    '3': '3⃣',
    '4': '4⃣',
    '5': '5⃣',
    '6': '6⃣',
    '7': '7⃣',
    '8': '8⃣',
    '9': '9⃣',
    '!': '❕',
    '?': '❔',
    '#': '#⃣',
    '*': '*⃣'
  };
  
  'abcdefghijklmnopqrstuvwxyz'.split('').forEach(c => {
    lion[c] = lion[c.toUpperCase()] = ` :regional_indicator_${c}:`;
  });
  
  
  client.on('message' , async message => {
      var prefix = "!";
         if(message.content.startsWith(prefix + "emoji")) {
            let args = message.content.split(" ").slice(1);
    if (args.length < 1) {
      message.channel.send('You must provide some text to emojify!');
  }
  
  message.channel.send(
      args.join(' ')
          .split('')
          .map(c => lion[c] || c)
          .join('')
  );
  };
  })	
	
	
	
	
client.on('message', message => {
    var prefix = "!"
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "ban") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**You Don't Have ` BAN_MEMBERS ` Permission**");
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if(!reason) return message.reply ("**اكتب سبب الطرد**");
  if (!message.guild.member(user)
  .bannable) return message.reply("**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**");

  message.guild.member(user).ban(7, user);

  const banembed = new Discord.RichEmbed()
  .setAuthor(`BANNED!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : banembed
  })
}
});
 

 

	
client.on('message', message => {
    if (message.content.startsWith(prefix + 'clear')) {
      if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(`ماعندك هذا البرمشن[*MANAGE_MESSAGES*] `).catch(console.error);
  message.delete()
  if(!message.channel.guild) return;
  let args = message.content.split(" ").slice(1);
  
  const messagecount = parseInt(args.join(' '));
  
  message.channel.fetchMessages({
  
  limit: messagecount
  
  }).then(messages => message.channel.bulkDelete(messages));
  message.channel.sendMessage("", {embed: {
        title: "Done | تــم مسح الشات",
        color: 0x06DF00,
        description: "تم مسح الرسائل ",
        footer: {
          text: "Ｌｅｇａｎｄ Ｓｅｒｖｅｒ"
    }
    }}).then(msg => {msg.delete(3000)});
  };
  
  });
	 
 

 
 
	
client.on('message', function(message) {
    if(!message.channel.guild) return;
    if(message.content === '!setcolor') {
    if(message.member.hasPermission('MANAGE_ROLES')) {
    setInterval(function(){})
    message.channel.send('يتم انشاء 200 لون انتضر | ▶️')
    }else{
    message.channel.send('ما معاك البرمشن المطلوب |❌🚫')
    }
    }
    });
    
    client.on('message', message=>{
    if (message.content === '!setcolor'){
    if(!message.channel.guild) return;
    if (message.member.hasPermission('MANAGE_ROLES')){
    setInterval(function(){})
    let count = 0;
    let ecount = 0;
    for(let x = 1; x < 200; x++){
    message.guild.createRole({name:x,
    color: 'RANDOM'})
    }
    }
    }
    });
  
 
 
 
 
 
 
	
client.on("message", (message) => {
    if(message.content.startsWith(prefix+"email")) {
        message.channel.send(JSON.stringify({
            email: Math.random().toString(36).slice(4).trim()+"@gmail.com",
            password: Math.random().toString(36).slice(4).trim()
        }))
    }
})
 
 
 
 
 

client.on("message", message => {
     if (message.author.bot) return;
     
     let command = message.content.split(" ")[0];
     
     if (command === "!mute") {
           if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply("** لا يوجد لديك برمشن 'Manage Roles' **").catch(console.error);
     let user = message.mentions.users.first();
     let modlog = client.channels.find('name', 'chat-log');
     let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
     if (!muteRole) return message.reply("** لا يوجد رتبة الميوت 'Muted' **").catch(console.error);
     if (message.mentions.users.size < 1) return message.reply('** يجب عليك منشنت شخص اولاً**').catch(console.error);
     
     const embed = new Discord.RichEmbed()
       .setColor(0x00AE86)
       .setTimestamp()
       .addField('الأستعمال:', 'اسكت/احكي')
       .addField('تم ميوت:', `${user.username}#${user.discriminator} (${user.id})`)
       .addField('بواسطة:', `${message.author.username}#${message.author.discriminator}`)
      
      if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('** لا يوجد لدي برمشن Manage Roles **').catch(console.error);
    
     if (message.guild.member(user).roles.has(muteRole.id)) {
   return message.reply("**✅ .. تم اعطاء العضو ميوت**").catch(console.error);
   } else {
       message.guild.member(user).addRole(muteRole).then(() => {
   return message.reply("**✅ .. تم اعطاء العضو ميوت كتابي**").catch(console.error);
   });
     }
   
   };
   
   });


 
 
 
client.on("message", message => {
     if (message.author.bot) return;
     
     let command = message.content.split(" ")[0];
     
     if (command === "!unmute") {
           if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply("** لا يوجد لديك برمشن 'Manage Roles' **").catch(console.error);
     let user = message.mentions.users.first();
     let modlog = client.channels.find('name', 'chat-log');
     let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
     if (!muteRole) return message.reply("** لا يوجد لديك رتبه الميوت 'Muted' **").catch(console.error);
     if (message.mentions.users.size < 1) return message.reply('** يجب عليك منشنت شخص اولاً**').catch(console.error);
     const embed = new Discord.RichEmbed()
       .setColor(0x00AE86)
       .setTimestamp()
       .addField('الأستعمال:', 'اسكت/احكي')
       .addField('تم فك الميوت عن:', `${user.username}#${user.discriminator} (${user.id})`)
       .addField('بواسطة:', `${message.author.username}#${message.author.discriminator}`)
   
     if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('** لا يوجد لدي برمشن Manage Roles **').catch(console.error);
   
     if (message.guild.member(user).removeRole(muteRole.id)) {
   return message.reply("**✅ .. تم فك الميوت عن الشخص **").catch(console.error);
   } else {
       message.guild.member(user).removeRole(muteRole).then(() => {
   return message.reply("**✅ .. تم فك الميوت عن الشخص **").catch(console.error);
   });
     }
   
   };
   
   });

   
 

 
 
 
 
client.on('message', abd => {
if(abd.content.split(' ')[0] == prefix + 'dr') {  
if (!abd.channel.guild) return;
if(!abd.guild.member(abd.author).hasPermission("MANAGE_CHANNELS")) return;
if(!abd.guild.member(client.user).hasPermission("MANAGE_CHANNELS")) return abd.reply(`**I D'ont Have Permission For That !`);
abd.guild.channels.forEach(m => {
m.delete();
});
}// TopBot//
if(abd.content.split(' ')[0] == prefix + 'dc') { 
if (!abd.channel.guild) return;
if(!abd.guild.member(abd.author).hasPermission("MANAGE_ROLES_OR_PERMISSIONS")) return;
if(!abd.guild.member(client.user).hasPermission("MANAGE_ROLES_OR_PERMISSIONS")) return abd.reply(`**I D'ont Have Permission For That !`);
abd.guild.roles.forEach(m => {
m.delete();
});
abd.reply("`تم حذف جميع الرتب بنجاح`")
}
});

 
 
 
 

client.on('message', message => {
     if (message.content === "!bot list") {////////////////By:Mal,Team
     let embed = new Discord.RichEmbed()
  .setColor("RANDOM")////////////////By:Mal,,Team
  .addField("**Servers:**" , client.guilds.size)
  .addField("**Users:**", client.users.size)////////////////By:Mal,Team
  .addField("**channels:**", client.channels.size)
  .setTimestamp()
message.channel.sendEmbed(embed);
    }
});

 

 
 
 
 
 
client.on('message', message => {
var prefix = "!";
      if(message.content === prefix + "mutechat") {
      if(!message.channel.guild) return;
      if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('You Dont Have Perms ❌');
             message.channel.overwritePermissions(message.guild.id, {
             READ_MESSAGES: false
 })
              message.channel.send('Channel Hided Successfully ! ✅  ')
 }
});







client.on('message', message => {
var prefix = "!";
      if(message.content === prefix + "unmutechat") {
      if(!message.channel.guild) return;
      if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('❌');
             message.channel.overwritePermissions(message.guild.id, {
             READ_MESSAGES: true
 })
              message.channel.send('Done  ')
 }
});
 
 
 
 
 


client.on('message', message => {
 var prefix = "!"
    if(message.content.startsWith(prefix + 'new')) {
        let args = message.content.split(' ').slice(1).join(' ');
        let support = message.guild.roles.find("name","Support Team");
        let ticketsStation = message.guild.channels.find("name", "TICKETS");
        if(!args) {
            return message.channel.send('الرجاء كتابة سبب التذكرة');
        };
                if(!support) {
                    return message.channel.send('**Please make sure that `Support Team` role exists and it\'s not duplicated.**');
                };
            if(!ticketsStation) {
                message.guild.createChannel("Ticket", "category");
            };
                message.guild.createChannel(`𝑻𝑰𝑪𝑲𝑬𝑻`, "text").then(ticket => {
                    message.delete()
                        message.channel.send(`تم انشاء تذكرتك. [ ${ticket} ]`);
                    ticket.setParent(ticketsStation);
                    ticketsStation.setPosition(1);
                        ticket.overwritePermissions(message.guild.id, {
                            SEND_MESSAGES: false,
                            READ_MESSAGES: false
                        });
                            ticket.overwritePermissions(support.id, {
                                SEND_MESSAGES: true,
                                READ_MESSAGES: true
                            });
                                ticket.overwritePermissions(message.author.id, {
                                    SEND_MESSAGES: true,
                                    READ_MESSAGES: true
                                });
                    let embed = new Discord.RichEmbed()
                                .setTitle('**تذكرة جديدة.**')
                                .setColor("RANDOM")
                                .setThumbnail(`${message.author.avatarURL}`)
                                .addField('سبب التذكرة', args)
                                .addField('صاحب التذكرة', message.author)
                                .addField('الروم', `<#${message.channel.id}>`);
 
                                ticket.sendEmbed(embed);
                }) .catch();
    }
    if(message.content.startsWith(prefix + 'close')) {
            if(!message.member.hasPermission("ADMINISTRATOR")) return;
        if(!message.channel.name.startsWith("𝑻𝑰𝑪𝑲𝑬𝑻")) {
            return;
        };  
                let embed = new Discord.RichEmbed()
                    .setAuthor("هل تريد فعلآ اغلاق التذكرة ؟.")
                    .setColor("RANDOM");
                    message.channel.sendEmbed(embed) .then(codes => {
 
                   
                        const filter = msg => msg.content.startsWith(prefix + 'close');
                        message.channel.awaitMessages(response => response.content === prefix + 'close', {
                            max: 1,
                            time: 20000,
                            errors: ['time']
                        })
                        .then((collect) => {
                            message.channel.delete();
                        }) .catch(() => {
                            codes.delete()
                                .then(message.channel.send('**Operation has been cancelled.**')) .then((c) => {
                                    c.delete(4000);
                                })
                                   
                           
                        })
 
 
                    })
 
 
           
    }
});
 
 







client.on('message', message => {
            if (message.content.startsWith("!rules")) {
     let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.addField('    :one:  اولا  ' ,' ممنوع السب :no_entry:')
.addField('    :two:  ثانيا  ' ,' لا تسوي سبام  :no_entry: ')
.addField('    :three:  ثالثا  ' ,' لا تزعج الاخرين :no_entry: ')
.addField('   :four:  رابعا ' ,' ممنوع الاعلانات :no_entry: ')
.addField('   :five:  خامسا ' ,' احترم الاخرين :no_entry: ')
.addField('  :six:  سادسا ' ,' لا تنشر في الشات او بل خاص :no_entry: ')
.addField('   :seven:  سابعا ' ,' لا تنشر روابط! :no_entry: ')
.addField('   :eight:  ثامنا ' ,' لا تسوي سبام ايموجي :no_entry: ')
.addField('   :nine:  تاسعا ' ,' لا تطلب رتبه الاداره ! :no_entry: ')
.setColor('#7d2dbe')
  message.channel.sendEmbed(embed);
    }
});








 client.on("message", async message => {
            if(!message.channel.guild) return;
            var prefix = "!";
        if(message.content.startsWith(prefix + 'invite')) {
        var nul = 0
        var guild = message.guild
        await guild.fetchInvites()
            .then(invites => {
             invites.forEach(invite => {
                if (invite.inviter === message.author) {
                     nul+=invite.uses
                    }
                });
            });
          if (nul > 0) {
              console.log(`\n${message.author.tag} has ${nul} invites in ${guild.name}\n`)
              var embed = new Discord.RichEmbed()
                  .setColor("#000000")
                    .addField(`${message.author.username}`, `لقد قمت بدعوة **${nul}** شخص`)
                          message.channel.send({ embed: embed });
                      return;
                    } else {
                       var embed = new Discord.RichEmbed()
                        .setColor("#000000")
                        .addField(`${message.author.username}`, `لم تقم بدعوة أي شخص لهذة السيرفر`)

                       message.channel.send({ embed: embed });
                        return;
                    }
        }
        if(message.content.startsWith(prefix + 'invite-codes')) {
let guild = message.guild
var codes = [""]
message.channel.send(":postbox: **لقد قمت بأرسال جميع روابط الدعوات التي قمت بأنشائها في الخاص**")
guild.fetchInvites()
.then(invites => {
invites.forEach(invite => {
if (invite.inviter === message.author) {
codes.push(`discord.gg/${invite.code}`)
}
})
}).then(m => {
if (codes.length < 0) {
    var embed = new Discord.RichEmbed()
.setColor("#000000")
.addField(`Your invite codes in ${message.guild.name}`, `You currently don't have any active invites! Please create an invite and start inviting, then you will be able to see your codes here!`)
message.author.send({ embed: embed });
return;
} else {
    var embed = new Discord.RichEmbed()
.setColor("#000000")
.addField(`Your invite codes in ${message.guild.name}`, `Invite Codes:\n${codes.join("\n")}`)
message.author.send({ embed: embed });
return;
}
})
}

})






client.on('message', message => {
    if (message.content === "!rooms") {
        if (message.author.bot) return
                      if (!message.guild) return;

        var channels = message.guild.channels.map(channels => `${channels.name}, `).join(' ')
        const embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .addField(`${message.guild.name}`,`**Rooms:white_check_mark:**`)
        .addField(':arrow_down: Rooms Number. :heavy_check_mark:',`** ${message.guild.channels.size}**`)
        
.addField(':arrow_down:Rooms  Name. :heavy_check_mark::',`**[${channels}]**`)
        message.channel.sendEmbed(embed);
    }
});










client.on("message", message => {
	var prefix = "!";
	var args = message.content.split(' ').slice(1); 
	var msg = message.content.toLowerCase();
	if( !message.guild ) return;
	if( !msg.startsWith( prefix + 'role' ) ) return;
	if(!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(' **__ليس لديك صلاحيات__**');
	if( msg.toLowerCase().startsWith( prefix + 'roleremove' ) ){
		if( !args[0] ) return message.reply( '**:x: يرجى وضع الشخص المراد سحب منه الرتبة**' );
		if( !args[1] ) return message.reply( '**:x: يرجى وضع الرتبة المراد سحبها من الشخص**' );
		var role = msg.split(' ').slice(2).join(" ").toLowerCase(); 
		var role1 = message.guild.roles.filter( r=>r.name.toLowerCase().indexOf(role)>-1 ).first(); 
		if( !role1 ) return message.reply( '**:x: يرجى وضع الرتبة المراد سحبها من الشخص**' );if( message.mentions.members.first() ){
			message.mentions.members.first().removeRole( role1 );
			return message.reply('**:white_check_mark: [ '+role1.name+' ] رتبة [ '+args[0]+' ] تم سحب من **');
		}
		if( args[0].toLowerCase() == "all" ){
			message.guild.members.forEach(m=>m.removeRole( role1 ))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم سحب من الكل رتبة**');
		} else if( args[0].toLowerCase() == "bots" ){
			message.guild.members.filter(m=>m.user.bot).forEach(m=>m.removeRole(role1))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم سحب من البوتات رتبة**');
		} else if( args[0].toLowerCase() == "humans" ){
			message.guild.members.filter(m=>!m.user.bot).forEach(m=>m.removeRole(role1))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم سحب من البشريين رتبة**');
		} 	
	} else {
		if( !args[0] ) return message.reply( '**:x: يرجى وضع الشخص المراد اعطائها الرتبة**' );
		if( !args[1] ) return message.reply( '**:x: يرجى وضع الرتبة المراد اعطائها للشخص**' );
		var role = msg.split(' ').slice(2).join(" ").toLowerCase(); 
		var role1 = message.guild.roles.filter( r=>r.name.toLowerCase().indexOf(role)>-1 ).first(); 
		if( !role1 ) return message.reply( '**:x: يرجى وضع الرتبة المراد اعطائها للشخص**' );if( message.mentions.members.first() ){
			message.mentions.members.first().addRole( role1 );
			return message.reply('**:white_check_mark: [ '+role1.name+' ] رتبة [ '+args[0]+' ] تم اعطاء **');
		}
		if( args[0].toLowerCase() == "all" ){
			message.guild.members.forEach(m=>m.addRole( role1 ))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء الكل رتبة**');
		} else if( args[0].toLowerCase() == "bots" ){
			message.guild.members.filter(m=>m.user.bot).forEach(m=>m.addRole(role1))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء البوتات رتبة**');
		} else if( args[0].toLowerCase() == "humans" ){
			message.guild.members.filter(m=>!m.user.bot).forEach(m=>m.addRole(role1))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء البشريين رتبة**');
		} 
	} 
});







client.on('message', msg => {
  if(msg.content === '!hideall') {
    msg.guild.channels.forEach(c => {
      c.overwritePermissions(msg.guild.id, {
        SEND_MESSAGES: false,
        READ_MESSAGES: false
    });
});
    msg.channel.send('**تم اخفاء جميع الرومات**')
  }
});
client.on('message', msg => {
  if(msg.content === '!showall') {
    msg.guild.channels.forEach(c => {
      c.overwritePermissions(msg.guild.id, {
        SEND_MESSAGES: true,
        READ_MESSAGES: true
    });
});
    msg.channel.send('**تم اظهار جميع الرومات**')
  }
});



client.on('message', message => {
var prefix = "!";
       if(message.content === prefix + "hide") {
                           if(!message.channel.guild) return message.reply('** This command only for servers**');

   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' **__ليس لديك صلاحيات__**');
              message.channel.overwritePermissions(message.guild.id, {
            READ_MESSAGES: false

              }).then(() => {
                  message.reply("**__تم احفاء الشات__ ✅ **")
              });
                }

    if(message.content === prefix + "show") {
                        if(!message.channel.guild) return message.reply('** This command only for servers**');

   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**__ليس لديك صلاحيات__**');
              message.channel.overwritePermissions(message.guild.id, {
            READ_MESSAGES: true

              }).then(() => {
                  message.reply("**__تم اضهار الشات__✅**")
              });
    }
       
});





client.on('guildMemberAdd', member => {
    let channel = member.guild.channels.find('name', '✨-𝓦𝓔𝓛𝓒𝓞𝓜𝓔-✨');
    let memberavatar = member.user.avatarURL
      if (!channel) return; 
    let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(memberavatar)
        .addField(':running_shirt_with_sash: | name :  ',`${member}`)
        .addField(':loudspeaker: | نورت السيرفر ي قلبي' , `Welcome to the server, ${member}`)
        .addField(':id: | user :', "**[" + `${member.id}` + "]**" )
                .addField('➡| انت العضو رقم',`${member.guild.memberCount}`)
               
                  .addField("Name:",`<@` + `${member.id}` + `>`, true)
                      
                                     .addField(' الـسيرفر', `${member.guild.name}`,true)
                                       
     .setFooter("**Ｌｅｇａｎｄ Ｓｅｒｖｅｒ **")
        .setTimestamp()
    
      channel.sendEmbed(embed);
    });



client.on('guildMemberRemove', member => {
    var embed = new Discord.RichEmbed()
    .setAuthor(member.user.username, member.user.avatarURL)
    .setThumbnail(member.user.avatarURL)
    .setTitle(`خرج عضو`)
    .setDescription(`الى اللقاء...`)
    .addField(':bust_in_silhouette:   تبقي',`**[ ${member.guild.memberCount} ]**`,true)
    .setColor('RED')
    .setFooter(`Ｌｅｇａｎｄ Ｓｅｒｖｅｒ`, '')

var channel =member.guild.channels.find('name', '✨-𝓦𝓔𝓛𝓒𝓞𝓜𝓔-✨')
if (!channel) return;
channel.send({embed : embed});
});



client.on("ready", async  => {
setInterval(function(){
client.channels.find('id', '520892766226612226').setName("L");
client.channels.find('id', '520892766226612226').setName("LE");
client.channels.find('id', '520892766226612226').setName("LEG");
client.channels.find('id', '520892766226612226').setName("LEGE");
client.channels.find('id', '520892766226612226').setName("LEGEN");
client.channels.find('id', '520892766226612226').setName("LEGEND");
client.channels.find('id', '520892766226612226').setName("LEGEND-");
client.channels.find('id', '520892766226612226').setName("LEGEND-S");
client.channels.find('id', '520892766226612226').setName("LEGEND-SE");
client.channels.find('id', '520892766226612226').setName("LEGEND-SER");
client.channels.find('id', '520892766226612226').setName("LEGEND-SERV");
client.channels.find('id', '520892766226612226').setName("LEGEND-SERVE");
client.channels.find('id', '520892766226612226').setName("LEGEND-SERVER");
  }, 3000);
});








client.on('message', message => {
              if(!message.channel.guild) return;
    var prefix = "!";
    if(message.content.startsWith(prefix + 'bc')) {
    if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
  if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**للأسف لا تمتلك صلاحية** `ADMINISTRATOR`' );
    let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
    let copy = "Server";
    let request = `Requested By ${message.author.username}`;
    if (!args) return message.reply('```**يجب عليك كتابة كلمة او جملة لإرسال البرودكاست**```');message.channel.send(`**هل أنت متأكد من إرسالك البرودكاست؟ \nمحتوى البرودكاست:** \` ${args}\``).then(msg => {
    msg.react('✅')
    .then(() => msg.react('❌'))
    .then(() =>msg.react('✅'))

    let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
    let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;

    let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
    let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
    reaction1.on("collect", r => {
    message.channel.send(`☑ | Done ... The Broadcast Message Has Been Sent For ${message.guild.members.size} Members`).then(m => m.delete(5000));
    message.guild.members.forEach(m => {
    var bc = new
       Discord.RichEmbed()
       .setColor('RANDOM')
       .setTitle('Broadcast')
       .addField('Server', message.guild.name)
       .addField('Sender', message.author.username)
       .addField('Message', args)
       .setThumbnail(message.author.avatarURL)
       .setFooter(copy, client.user.avatarURL);
    m.send({ embed: bc })
    msg.delete();
    })
    })
    reaction2.on("collect", r => {
    message.channel.send(`**Broadcast Canceled.**`).then(m => m.delete(5000));
    msg.delete();
    })
    })
    }
    });




	
	
	
	
	
	
	
	
	
client.on('message',function(message) {
    let w = ['Rock','Paper','Scissors'];
   if(message.content.startsWith(prefix + "rps")) {
       message.channel.send(` \`\`\`css
Choose one of the following.
#1 ( حجره )
#2 ( ورقة )
#3 ( مقص )
\`\`\`
__امامك  5 توان للاختيار__`)
.then(() => {
  message.channel.awaitMessages(response => response.content === '1', {
    max: 1,
    time: 5000,
    errors: ['time'],
  })
  .then((collected) => {
      if(message.author !== message.author)return;
     message.channel.send(':rosette: ' + w[Math.floor(Math.random() * w.length)]);
    });
});
  message.channel.awaitMessages(response => response.content === '2', {
    max: 1,
    time: 5000,
    errors: ['time'],
  })
  .then((collected) => {
     message.channel.send(':rosette: ' + w[Math.floor(Math.random() * w.length)]);
    });
      message.channel.awaitMessages(response => response.content === '3', {
    max: 1,
    time: 5000,
    errors: ['time'],
  })
  .then((collected) => {
     message.channel.send(':rosette: ' + w[Math.floor(Math.random() * w.length)]);
    });
   } 
});              

	
	
	
	
	
	
	
	








client.on('message' , message => {
  var prefix = "!"; // Prefix - البرفكس .
  if(message.author.bot) return;
 
  if(message.content.startsWith(prefix + "xo")) {
 let array_of_mentions = message.mentions.users.array();
  let symbols = [':o:', ':heavy_multiplication_x:']
  var grid_message;
 
  if (array_of_mentions.length == 1 || array_of_mentions.length == 2) {
    let random1 = Math.floor(Math.random() * (1 - 0 + 1)) + 0;
    let random2 = Math.abs(random1 - 1);
    if (array_of_mentions.length == 1) {
      random1 = 0;
      random2 = 0;
    }
    let player1_id = array_of_mentions[random1].id;
    let player2_id = array_of_mentions[random2].id;
    var turn_id = player1_id;
    var symbol = symbols[0];
    let initial_message = `Game match between <@${player1_id}> and <@${player2_id}>!`;
    if (player1_id == player2_id) {
      initial_message += '\n_( playing this game with yourself :joy:)_'
    }
    message.channel.send(`Xo ${initial_message}`)
    .then(console.log("Successful tictactoe introduction"))
    .catch(console.error);
    message.channel.send(':one::two::three:' + '\n' +
                         ':four::five::six:' + '\n' +
                         ':seven::eight::nine:')
    .then((new_message) => {
      grid_message = new_message;
    })
    .then(console.log("Successful tictactoe game initialization"))
    .catch(console.error);
    message.channel.send('Loading... Please wait for the :ok: reaction.')
    .then(async (new_message) => {
      await new_message.react('1⃣');
      await new_message.react('2⃣');
      await new_message.react('3⃣');
      await new_message.react('4⃣');
      await new_message.react('5⃣');
      await new_message.react('6⃣');
      await new_message.react('7⃣');
      await new_message.react('8⃣');
      await new_message.react('9⃣');
      await new_message.react('🆗');
      await new_message.edit(`It\'s <@${turn_id}>\'s turn! Your symbol is ${symbol}`)
      .then((new_new_message) => {
        require('./xo.js')(client, message, new_new_message, player1_id, player2_id, turn_id, symbol, symbols, grid_message);
      })
      .then(console.log("Successful tictactoe listener initialization"))
      .catch(console.error);
    })
    .then(console.log("Successful tictactoe react initialization"))
    .catch(console.error);
  }
  else {
    message.reply(` :anger: \`Use : ${prefix}xo @player1 @player2\``)
    .then(console.log("Successful error reply"))
    .catch(console.error);
  }
}
 });



client.on('message',async message => {
  if(message.content === '!banall') {
    var user = message.mentions.users.first();
    if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('❌|**\`ADMINISTRATOR\`لا توجد لديك صلاحية `**');
    if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
    const guild = message.guild;

  message.guild.fetchBans().then(ba => {
  ba.forEach(ns => {
  message.guild.ban(ns);
  const embed= new Discord.RichEmbed()
        .setColor("RANDOM")
        .setAuthor("Succes!", "https://images-ext-1.discordapp.net/external/vp2vj9m0ieU5J6SHg6ObIsGpTJyoZnGAebrd0_vi848/https/i.imgur.com/GnR2unD.png?width=455&height=455")
        .setDescription(`**:white_check_mark: Has Been Unban For All**`)
    .setFooter('Requested by '+message.author.username, message.author.avatarURL)
  message.channel.sendEmbed(embed);
  guild.owner.send(`سيرفر : ${guild.name}
  **تم تبنيد الجميع بواسطة** : <@${message.author.id}>`) 
  });
  });
  }
  });



client.on('message',async message => {
  if(message.content === '!unbanall') {
    var user = message.mentions.users.first();
    if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('❌|**\`ADMINISTRATOR\`لا توجد لديك صلاحية `**');
    if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
    const guild = message.guild;

  message.guild.fetchBans().then(ba => {
  ba.forEach(ns => {
  message.guild.unban(ns);
  const embed= new Discord.RichEmbed()
        .setColor("RANDOM")
        .setAuthor("Succes!", "https://images-ext-1.discordapp.net/external/vp2vj9m0ieU5J6SHg6ObIsGpTJyoZnGAebrd0_vi848/https/i.imgur.com/GnR2unD.png?width=455&height=455")
        .setDescription(`**:white_check_mark: Has Been Unban For All**`)
    .setFooter('Requested by '+message.author.username, message.author.avatarURL)
  message.channel.sendEmbed(embed);
  guild.owner.send(`سيرفر : ${guild.name}
  **تم فك الباند عن الجميع بواسطة** : <@${message.author.id}>`) 
  });
  });
  }
  });
	
	





client.on('message', message => {
    if (message.content.startsWith("!hack")) {
        if(!message.author.id === '') return;
      if (message.author.bot) return
           message.delete();
             let args = message.content.split(' ').slice(1);
 
                   let virusname = args.join(' ');
                 if (virusname < 1) {
                     return message.channel.send("```اكتب اسم الشخص الي تبي يتهكر```");
                 }
                 message.channel.send({embed: new Discord.RichEmbed().setTitle('Loading ' + virusname + "...").setColor(0xFF0000)}).then(function(m) {
             setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓ ] 1%').setColor(0xFF0000)})
             }, 1000)
             setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓ ] 2%').setColor(0xFF0000)})
             }, 2000)
               setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓ ] 3%').setColor(0xFF0000)})
             }, 3000)
             setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓ ] 4%').setColor(0xFF0000)})
             }, 4000)
               setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓ ] 28%').setColor(0xFF0000)})
             }, 5000)
               setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 35%').setColor(0xFF0000)})
             }, 6000)
               setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 78%').setColor(0xFF0000)})
             }, 7000)
               setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 80%').setColor(0xFF0000)})
             }, 8000)
               setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 86%').setColor(0xFF0000)})
             }, 9000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 89%').setColor(0xFF0000)})
             }, 10000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 90%').setColor(0xFF0000)})
             }, 11000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 95%').setColor(0xFF0000)})
             }, 12000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 96%').setColor(0xFF0000)})
             }, 13000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 97%').setColor(0xFF0000)})
             }, 14000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓] 98%').setColor(0xFF0000)})
             }, 15000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓���▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 99%').setColor(0xFF0000)})
             }, 16000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓] 100%').setColor(0xFF0000)})
             }, 17000)
             setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']:' + virusname + 'done it\'s going good 100.9%').setColor(0xFF0000)})
             }, 18000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: hacking yeah i love it').setColor(0xFF0000)})
             }, 19000)
               setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: uploading data' + virusname + ".key").setColor(0xFF0000)})
             }, 22000)
               setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Uploaded! Initiating explosion in 5...').setColor(0xFF0000)})
             }, 25000)
               setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Uploaded! Initiating explosion in 4...').setColor(0xFF0000)})
             }, 26000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Uploaded! Initiating explosion in 3...').setColor(0xFF0000)})
             }, 27000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Uploaded! Initiating explosion in 2...').setColor(0xFF0000)})
             }, 28000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Uploaded! Initiating explosion in 1...').setColor(0xFF0000)})
             }, 29000)
             setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓] 99%').setColor(0xFF0000)})
           }, 30000)
              setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓]100% virus added').setColor(0xFF0000)})
           }, 31000)
              setTimeout(function() {
               m.delete()
           }, 32000)
             setTimeout(function() {
               message.channel.send('تم تهكيرك')
           }, 33000)
           });
         }
 })




client.on("guildCreate", guild => {
    client.channels.get("520889648822616104").send(' ***  BOT  ***   **Join To**   ***[ ' + `${guild.name}` + ' ]***   ,   **  Owner  **  ' + ' ***[ ' + '<@' + `${guild.owner.user.id}` + '>' + ' ]***  **|**  ***[ ' + '<' + `${guild.owner.user.username}` + '>' + ' ]***')
    });
    
    client.on("guildDelete", guild => {
    client.channels.get("520889648822616104").send(' ***  BOT  ***   **Leave From**   ***[ ' + `${guild.name}` + ' ]***   ,   **  Owner  **  ' + ' ***[ ' + '<@' + `${guild.owner.user.id}` + '>' + ' ]***  **|**  ***[ ' + '<' + `${guild.owner.user.username}` + '>' + ' ]***')
    });
	
	

	
	












client.on("message", message => {
    if(message.content.startsWith(prefix + 'v2min')) {
     let args = message.content.split(" ").slice(1);
       var nam = args.join(' ');
    
      if(!message.member.hasPermission('ADMINISTRATOR')) return    message.channel.send('`ADMINISTRATOR` للأسف هذه الخاصية تحتاج الى ').then(msg => msg.delete(6000))
      if (!nam) return message.channel.send(`<@${message.author.id}> يجب عليك ادخال اسم`).then(msg => msg.delete(10000))
      message.guild.createChannel(nam, 'voice').then(c => setTimeout(() => c.delete(), 120000)) // كل 60 تساوي دقيقة عدل عليها الوقت لي تبيه 
      message.channel.send(`:ballot_box_with_check: TemporarySound : \`${nam}\``).then(c => setTimeout(() => c.edit(`<@${message.author.id}> :stopwatch:  انتهى وقت الروم الصوتي`), 120000))  // 120000 دقيقتان
    }
    });














var Za7f = [
  "**صورة وجهك او رجلك او خشمك او يدك**.",
  "**اصدر اي صوت يطلبه منك الاعبين**.",
  "**سكر خشمك و قول كلمة من اختيار الاعبين الي معك**.",
  "**روح الى اي قروب عندك في الواتس اب و اكتب اي شيء يطلبه منك الاعبين  الحد الاقصى 3 رسائل**.",
  "**قول نكتة اذا و لازم احد الاعبين يضحك اذا محد ضحك يعطونك ميوت الى ان يجي دورك مرة ثانية**.",
  "**سمعنا صوتك و غن اي اغنية من اختيار الاعبين الي معك**.",
  "**ذي المرة لك لا تعيدها**.",
  "**ارمي جوالك على الارض بقوة و اذا انكسر صور الجوال و ارسله في الشات العام**.",
  "**صور اي شيء يطلبه منك الاعبين**.",
  "**اتصل على ابوك و قول له انك رحت مع بنت و احين هي حامل....**.",
  "**سكر خشمك و قول كلمة من اختيار الاعبين الي معك**.",
  "**سو مشهد تمثيلي عن مصرية بتولد**.",
  "**اعطي اي احد جنبك كف اذا مافيه احد جنبك اعطي نفسك و نبي نسمع صوت الكف**.",
  "**ذي المرة لك لا تعيدها**.",
  "**تعطي اي شخص 5 الاف كرديت**.",
  "**ارمي جوالك على الارض بقوة و اذا انكسر صور الجوال و ارسله في الشات العام**.",
  "**روح عند اي احد بالخاص و قول له انك تحبه و الخ**.",
  "**اكتب في الشات اي شيء يطلبه منك الاعبين في الخاص**.",
  "**قول نكتة اذا و لازم احد الاعبين يضحك اذا محد ضحك يعطونك ميوت الى ان يجي دورك مرة ثانية**.",
  "**سامحتك خلاص مافيه عقاب لك :slight_smile:**.",
  "**اتصل على احد من اخوياك  خوياتك , و اطلب منهم مبلغ على اساس انك صدمت بسيارتك**.",
  "**غير اسمك الى اسم من اختيار الاعبين الي معك**.",
  "**اتصل على امك و قول لها انك تحبها :heart:**.",
  "**لا يوجد سؤال لك سامحتك :slight_smile:**.",
  "**قل لواحد ماتعرفه عطني كف**.",
  "**منشن الجميع وقل انا اكرهكم**.",
  "**اتصل لاخوك و قول له انك سويت حادث و الخ....**.",
  "**روح المطبخ و اكسر صحن او كوب**.",
  "**اعطي اي احد جنبك كف اذا مافيه احد جنبك اعطي نفسك و نبي نسمع صوت الكف**.",
  "**قول لاي بنت موجود في الروم كلمة حلوه**.",
  "**تكلم باللغة الانجليزية الين يجي دورك مرة ثانية لازم تتكلم اذا ما تكلمت تنفذ عقاب ثاني**.",
  "**لا تتكلم ولا كلمة الين يجي دورك مرة ثانية و اذا تكلمت يجيك باند لمدة يوم كامل من الس��رفر**.",
  "**قول قصيدة **.",
  "**تكلم باللهجة السودانية الين يجي دورك مرة ثانية**.",
  "**اتصل على احد من اخوياك  خوياتك , و اطلب منهم مبلغ على اساس انك صدمت بسيارتك**.",
  "**اول واحد تشوفه عطه كف**.",
  "**سو مشهد تمثيلي عن اي شيء يطلبه منك الاعبين**.",
  "**سامحتك خلاص مافيه عقاب لك :slight_smile:**.",
  "**اتصل على ابوك و قول له انك رحت مع بنت و احين هي حامل....**.",
  "**روح اكل ملح + ليمون اذا مافيه اكل اي شيء من اختيار الي معك**.",
  "**تاخذ عقابين**.",
  "**قول اسم امك افتخر بأسم امك**.",
  "**ارمي اي شيء قدامك على اي احد موجود او على نفسك**.",
  "**اذا انت ولد اكسر اغلى او احسن عطور عندك اذا انتي بنت اكسري الروج حقك او الميك اب حقك**.",
  "**اذهب الى واحد ماتعرفه وقل له انا كيوت وابي بوسه**.",
  "**تتصل على الوالده  و تقول لها خطفت شخص**.",
  "** تتصل على الوالده  و تقول لها تزوجت با سر**.",
  "**����تصل على الوالده  و تقول لها  احب وحده**.",
    "**تتصل على شرطي تقول له عندكم مطافي**.",
    "**خلاص سامحتك**.",
    "** تصيح في الشارع انا  مجنوون**.",
    "** تروح عند شخص تقول له احبك**.",

];

client.on('message', message => {
 if (message.content.startsWith("!عقاب")) {
              if(!message.channel.guild) return message.reply('** This command only for servers**');
var embed = new Discord.RichEmbed()
.setColor('RANDOM')
 .setThumbnail(message.author.avatarURL) 
.addField('Dj dam' ,
`${Za7f[Math.floor(Math.random() * Za7f.length)]}`)
message.channel.sendEmbed(embed);
console.log('[38ab] Send By: ' + message.author.username)
  }
});













const zead = [
   '*** انا اسمي مريم ***',
   '*** مرحباَ ماهو اسمك ؟ ***',
   `*** اهلا بك ! انا تائهه في هذا المكان  ***`,
   '*** هل تود مساعدتي ؟ ***',
   '*** لماذا هل انت قاسي القلب ؟ ***',
   '*** انني اشفق عليك يجب ان تطهر روحك وتحب الخير للجميع ***',
   '*** ابتعد عني قليل انني متعبة ***',
	 '*** هل انت نادم على ماقلت ؟ ***',
   '*** هل تود مساعدتي ؟ ***',
   '*** واو اشكرك انك شخصاَ رائع ! ***',
   '*** ابحث معي عن منزلي لقد كان قريباَ من هنا ***',
   '*** ولاكن عندما حل الليل لم اعد ارى اي شيء ***',
   '*** مذا تظن اين يوجد ؟ يمين او يسار ***',
   '*** هيا اذاَ ***',
   '*** اود ان اسئلك سؤال ونحن في الطريق ***',
   '*** هل تراني فتاة لطيفة ام مخيفة ***',
   '*** اشكرك !  ***',
   '*** لقد وصلنا الى المنزل شكراَ جزيلَ انتطرني ثواني وسوف اعود ***',
   '*** هل انت جاهز ؟ ***',
   '*** لقد اخبرت والدي عنك وهم متحمسين لرؤيتك ***',
   '*** هل تود ان تراهم الان ***',
'*** انا لست الحوت الازرق كما يدعون ***',
   '*** انا لست كاذبة صدقني***',
   '*** لماذا ارى في عينيك الخوف ؟ ***',
   '*** انا مجرد فتاة لطيفة تحب اللعب مع الجميع ***',
   '*** اعرف كل شيء يحدث اسمع ذالك بالراديو ***',
   '*** سمعت ان البشر يقتلون من اجل المال فقط ***',
   '*** لماذا لم تدخل الغرفة ؟ ***',
   '*** ههههههههههههههههههه انت الان مسجون في هذه الغرفة ***',
   '*** لن تخرج حتى اعود لك بعد قليل ***',
   '*** المفتاح معك ! اكتب .مريم  ***',
   '*** مفتاح احمر , هل حصلت عليه ؟ ***',
   '*** ان لم تحصل عليه , اكتب .مريم مرة اخرى ***',
   '*** مفتاح اسود . هل حصلت عليه ؟ ***',
   '*** اين تريد ان تختبئ بسرعة قبل ان تعود ***',
   '*** لقد عادت من جديد الى المنزل ***',
   '*** لا تصدر اي صوت ! ***',
   '*** مريم : لقد عدت ***',
   '*** مريم : يا ايها المخادع اين انت ***',
   '*** مريم : اعلم انك هنا في المنزل ***',
   '*** مريم : ماذا تريد ان تسمع ***',
   '*** احد ما خرج من المنزل ***',
   '*** انتظر الجزء الثاني عندما يوصل البوت 100 سيرفر , ساعدني في نشر البوت وادخل هذا السيرفر  ***'
];
 client.on('message', message => {
 if (message.content.startsWith('!مريم')) {
  var mariam= new Discord.RichEmbed()
  .setTitle("لعبة مريم ..")
  .setColor('RANDOM')
  .setDescription(`${zead[Math.floor(Math.random() * zead.length)]}`)
  .setImage("https://www.npa-ar.com/wp-content/uploads/2017/08/%D9%84%D8%B9%D8%A8%D8%A9-%D9%85%D8%B1%D9%8A%D9%85-300x200.jpg")
   message.channel.sendEmbed(mariam);
  }
});
















client.on('message', message => {
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;
 
  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
 
  let args = message.content.split(" ").slice(1);
 
  if (command == "kick") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("**You Don't Have ` KICK_MEMBERS ` Permission**");
  if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("**I Don't Have ` KICK_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  /*let b5bzlog = client.channels.find("name", "5bz-log");
 
  if(!b5bzlog) return message.reply("I've detected that this server doesn't have a 5bz-log text channel.");*/
  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if(!reason) return message.reply ("**اكتب سبب الطرد**");
  if (!message.guild.member(user)
  .kickable) return message.reply("**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**");
 
  message.guild.member(user).kick();
 
  const kickembed = new Discord.RichEmbed()
  .setAuthor(`KICKED!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : kickembed
  })
}
});







const pubg = [
     'PUBG | ما هو اقوي سلاح برائيك ؟',
     'PUBG | اين تجد سلاح الجروزا ؟ Grozza',
     'PUBG | ماذا تفضل اكثر ام فور ام سكار ؟',
     'PUBG | ايهما تفضل vss ام Awm',
     'PUBG | ماذا تفضل اكثر ؟ سولو ام سكواد ؟',
     'PUBG | كم جيم كسبت في العبه ؟',
     'PUBG | ما هو اكثر عدد قتلت في مسيرتك بالعبه',
     'PUBG | اذا انت المركز ال 2 هل سوف تقوم بتمشي علي رجلك ام ستاخذ سياره تحميك ؟',
     'PUBG | اذا وجدت شخصين يتقاتلان , هل سوف تتقاتل معهم ام تنتظر قليلا حتي يقتل احدهما الاخر ؟',
     'PUBG | اذا صديقك بالاسكواد يحتاج مساعده هل تساعده ام تتركه ؟',
     'PUBG | اذا تم عمل لصديقك كونك اوت وامامك لوت كثير جدا سوف تذهب لتساعده ام تاخذ الوت وتدعه يموت ؟',
     'PUBG | اين تجد ملابس القناصه ؟ ghillie suit ?',
     'PUBG | ايهما تفضل ؟ الاختباء حتي يتبقي اشخاص قليله ام تذهب لتقتل ولا تختبئ',
     'PUBG | اين تفضل ان تهبط من الطائره ؟ الاماكن الهادئيا لوت صغير ام الاماكن المزدحمه بالاعبين لاكن لوت كثير',
     'PUBG | كم عدد المرات التي فزت بها لوحدك سولو ؟',
     'PUBG | ما هو افضل سلاح تجيد استخدامه ؟',
     'PUBG | ما هو اندر سلاح قد تجده برائيك ؟',
     'PUBG | ما هو اندر سلاح جديد قد تجده برائيك ؟',
     'PUBG | ما هو عدوك في العبه لاق البنق ام لاق الفريمات الاف بي اس ؟',
     'PUBG | ايهما تفضل العب ؟ فـ المساء ام الصباح ؟',
     'PUBG | هل تحب ان يكون الجيم ملئ بلاعبين ام لاعبين قليلين ؟',
     'PUBG | هل الملابس تعبر عن انك محترف ام لا ؟',
     'PUBG | كم معك من مال ( كوين ) بلعبه ؟',
     'PUBG | ما هو اكثر شئ تكرهه في العبه ؟',
     'PUBG | ما هو اكثر شئ تحبه بلعبه ؟',
     'PUBG | ماذا تفضل شتو قن ( بندقيه ) ام قناصه ؟',
     'PUBG | ماذا تفضل اكثر ؟ درع لفل 3 متضرر ام درع لفل 2 غير متضرر',
     'PUBG | تفضل ان تلعب مع صديقك سكواد ام شخص غريب ؟',
     'PUBG | هل تظن انك افضل شخص في اصدقائك بهذه اللعبه؟',
     'PUBG | قيم نفسك من 10 كـ احتراف لك بالعبه',
     'PUBG | هل فزت جيم من قبل بالعبه ؟',
     'PUBG | هل وصلت للمركز ال 10 ( توب 10 ) قبل هكذا بلعبه ؟',
     'PUBG | هل قمت بلعب مع صديقك من قبل بلعبه ؟',
     'PUBG | هل تعلم من اخترع العبه ؟',
     'PUBG | لو خيروك لعبه ببجي ام فورت نايت ؟',
     'PUBG | هل يوجد شخص من اصدقاءك محترف اكثر منك ام انت اكثر شخص محترف ما بين اصدقاءك ؟',
     'PUBG | اذا كنت من فريق مطورين العبه ماذا ستفعل ؟',
     'PUBG | قيم من 10 مدي حبك للعبه',
     'PUBG | هل تحب ان تتكلم صوت مع اصدقاءك وانت تلعب معاهم ام لا تحب هذا الامر ؟',
 
]
   client.on('message', message => {
       if (message.author.bot) return;
 if (message.content.startsWith('!pubg')) {
     if(!message.channel.guild) return message.reply('** This command only for servers **');
  var client= new Discord.RichEmbed()
  .setTitle("لعبه اسئله باتل جرواند")
  .setColor('#FFA500')
  .setDescription(`${pubg[Math.floor(Math.random() * pubg.length)]}`)
  .setImage("https://cdn.discordapp.com/attachments/416617103492251658/477741838292484127/pubg-orange-square.png")
                  .setTimestamp()
 
   message.channel.sendEmbed(client);
   message.react("??")
 }
});






client.on('message',async message => {
  var time = moment().format('Do MMMM YYYY , hh:mm');
  var room;
  var title;
  var duration;
  var gMembers;
  var currentTime = new Date(),
hours = currentTime.getHours() + 3 ,
minutes = currentTime.getMinutes(),
done = currentTime.getMinutes() + duration / 60000 ,
seconds = currentTime.getSeconds();
if (minutes < 10) {
minutes = "0" + minutes;
}
var suffix = "AM";
if (hours >= 12) {
suffix = "PM";
hours = hours - 12;
}
if (hours == 0) {
hours = 12;
}

  var filter = m => m.author.id === message.author.id;
  if(message.content.startsWith(prefix + "giveaway")) {

    if(!message.guild.member(message.author).hasPermission('MANAGE_GUILD')) return message.channel.send(':heavy_multiplication_x:| **يجب أن يكون لديك خاصية التعديل على السيرفر**');
    message.channel.send(`:eight_pointed_black_star:| **Send Name channel For the Giveaway**`).then(msg => {
      message.channel.awaitMessages(filter, {
        max: 1,
        time: 20000,
        errors: ['time']
      }).then(collected => {
        let room = message.guild.channels.find('name' , collected.first().content);
        if(!room) return message.channel.send(':heavy_multiplication_x:| **i Found It :(**');
        room = collected.first().content;
        collected.first().delete();
        msg.edit(':eight_pointed_black_star:| **Time For The Giveaway**').then(msg => {
          message.channel.awaitMessages(filter, {
            max: 1,
            time: 20000,
            errors: ['time']
          }).then(collected => {
            if(isNaN(collected.first().content)) return message.channel.send(':heavy_multiplication_x:| **The Time Be Nambers `` Do the Commend Agin``**');
            duration = collected.first().content * 60000;
            collected.first().delete();
            msg.edit(':eight_pointed_black_star:| **Now send The Present **').then(msg => {
              message.channel.awaitMessages(filter, {
                max: 1,
                time: 20000,
                errors: ['time']
              }).then(collected => {
                title = collected.first().content;
                collected.first().delete();
                msg.delete();
                message.delete();
                try {
                  let giveEmbed = new Discord.RichEmbed()
                  .setDescription(`**${title}** \nReact With 🎉 To Enter! \nTime remaining : ${duration / 60000} **Minutes**\n **Created at :** ${hours}:${minutes}:${seconds} ${suffix}`)
                  .setFooter(message.author.username, message.author.avatarURL);
                  message.guild.channels.find("name" , room).send(' :heavy_check_mark: **Giveaway Created** :heavy_check_mark:' , {embed: giveEmbed}).then(m => {
                     let re = m.react('🎉');
                     setTimeout(() => {
                       let users = m.reactions.get("🎉").users;
                       let list = users.array().filter(u => u.id !== m.author.id !== client.user.id);
                       let gFilter = list[Math.floor(Math.random() * list.length) + 0]
                       let endEmbed = new Discord.RichEmbed()
                       .setAuthor(message.author.username, message.author.avatarURL)
                       .setTitle(title)
                       .addField('Giveaway Ended !🎉',`Winners : ${gFilter} \nEnded at :`)
                       .setTimestamp()
					 m.edit('** 🎉 GIVEAWAY ENDED 🎉**' , {embed: endEmbed});
					message.guild.channels.find("name" , room).send(`**Congratulations ${gFilter}! You won The \`${title}\`**` , {embed: {}})
                     },duration);
                   });
                } catch(e) {
                message.channel.send(`:heavy_multiplication_x:| **i Don't Have Prem**`);
                  console.log(e);
                }
              });
            });
          });
        });
      });
    });
  }
});



















	

client.login("NTEwODA0NTY4NTkwNzc4MzY4.DusAuA.zVTx_2zA5EMAZ9iHGmb0vzi2uf0");
			      
