const Discord = require("discord.js");
const client = new Discord.Client();
client.on('ready', () => {
  client.user.setGame('.help | By:7assawi.SA','https://www.twitch.tv/TEST-Broadcast');
  console.log('---------------');
  console.log(' Bot Is Online')
  console.log('---------------')
});
client.on('message', msg => {
if (msg.content === '.help') {
    msg.reply(':envelope: | تم ارسال الرساله في الخاص');
  }
});
client.on("message", message => {
    var prefix = ".";
 
            var args = message.content.substring(prefix.length).split(" ");
            if (message.content.startsWith(prefix + "clear")) {
   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**ليس لديك صلاحيات**');
        var msg;
        msg = parseInt();
      
      message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
      message.channel.sendMessage("", {embed: {
        title: "Done | تــم",
        color: 0x06DF00,
        description: "تم مسح الرسائل بنجاح",
		
      }}).then(msg => {msg.delete(3000)});
			}


});
 client.on('message' , message => {
	 if (message.content === '.help') {
              var embed  = new Discord.RichEmbed()
                .addField("**.help**" ,"يعلمك اوامر البوت")
				.addField("**.ping**" ,"يعلمك بنقك")
				.addField("**.id**" ,"يرسل رسالة فيها معلوماتك")
				.addField("**.avatar**" ,"يرسل رابط فيه صورت بروفايلك")
								.addField("**.new**" ,"تفتح تذكرة")
												.addField("**.close**" ,"تسكر تذكرة")
                .setColor('RANDOM')
.setColor('RANDOM')
  message.author.sendEmbed(embed);
 }
 });

client.on("message", message => {
      if (message.content === ".ping") {
      const embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .addField('**Ping:**' , `${Date.now() - message.createdTimestamp}` + ' ms')
  message.channel.sendEmbed(embed);
	  }
});
client.on('message', message => {
     if (message.content === ".id") {
     let embed = new Discord.RichEmbed()
  .setThumbnail(message.author.avatarURL) 
  .setColor("#9B59B6")
  .addField("اســـم الحســاب", `${message.author.username}`)
  .addField('كود الحساب الخاص', message.author.discriminator)
  .addField("الرقـــم الشـــخصي", message.author.id)
  .addField("تاريخ التسجيل", message.author.createdAt)
     
     
  message.channel.sendEmbed(embed);
    }
});
client.on('guildMemberAdd', member => {
    let channel = member.guild.channels.find('name', 'welcome🏡');
    let memberavatar = member.user.avatarURL
        if (!channel) return;
        let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(memberavatar)
        .addField(':bust_in_silhouette: | name : ', `${member}`)
        .addField(':microphone2: | Welcome!', `Welcome to RinoShop:money_mouth:, ${member}`)
        .addField(':id: | User :', "**[" + `${member.id}` + "]**")
        .addField(':family_mwgb: | Your are the member', `${member.guild.memberCount}`)
        .setTimestamp()

        channel.sendEmbed(embed);
});
client.on("message", (message) => {
    if (message.content.startsWith(".ban ")) {
      if(!message.member.hasPermission('BAN_MEMBERS')) return message.reply('⚠ ماعندك الصلاحيات');
        var member= message.mentions.members.first();
        member.ban().then((member) => {
            message.channel.send(member.displayName + " لقد تم طرده بنجاح :wave: ");
        }).catch(() => {
            message.channel.send(":x: هناك خطاء حاول مره أخرى:x: ");
        });
    }
});
client.on('message', message => {
    if (message.content === ".avatar") {
    message.reply(message.author.avatarURL); 
    }
});
var prefix = ".";
client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "say") {
	  var embed = new Discord.RichEmbed()
   message.channel.sendMessage(args.join("  "))
  }
});
var prefix = ".";
client.on('message', async message => {//Toxic Codes
          if(message.content.startsWith(prefix + "activate")) {//Toxic Codes
            message.member.addRole(message.guild.roles.find("name", "-Member"));
            message.reply("** تم تفعيلك استمتع 🚀   **")//Toxic Codes
			.then(msg => {msg.delete(3000)});
          }//Toxic Codes
        }); //Toxic Codes
client.on("message", (message) => {
   if (message.content.startsWith(".new")) {     
        const reason = message.content.split(" ").slice(1).join(" ");     
        if (!message.guild.roles.exists("name", "Support Team")) return message.channel.send(`This server doesn't have a \`Support Team\` role made, so the ticket won't be opened.\nIf you are an administrator, make one with that name exactly and give it to users that should be able to see tickets.`);
        if (message.guild.channels.exists("name", "ticket-{message.author.id}" + message.author.id)) return message.channel.send(`You already have a ticket open.`);    
        message.guild.createChannel(`ticket-${message.author.username}`, "text").then(c => {
            let role = message.guild.roles.find("name", "Support Team");
            let role2 = message.guild.roles.find("name", "@everyone");
            c.overwritePermissions(role, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true
            });    
            c.overwritePermissions(role2, {
                SEND_MESSAGES: false,
                READ_MESSAGES: false
            });
            c.overwritePermissions(message.author, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true
            });
            message.channel.send(`:white_check_mark: **تم إنشاء تذكرتك ، #${c.name}.**`);
            const embed = new Discord.RichEmbed()
                .setColor(0xCF40FA)
                .addField(`مرحباّ ${message.author.username}!`, `يرجى محاولة شرح سبب فتح هذه التذكرة بأكبر قدر ممكن من التفاصيل. سيكون فريق الدعم لدينا قريبا للمساعدة.`)
                .setTimestamp();
            c.send({
                embed: embed
            });
        }).catch(console.error);
    }
 
 
  if (message.content.startsWith(".close")) {
        if (!message.channel.name.startsWith(`ticket-`)) return message.channel.send(`You can't use the close command outside of a ticket channel.`);
 
        message.channel.send(`هل أنت متأكد؟ بعد التأكيد ، لا يمكنك عكس هذا الإجراء!\n للتأكيد ، اكتب\`.confirm\`. سيؤدي ذلك إلى مهلة زمنية في غضون 10 ثوانٍ وإلغائها`)
            .then((m) => {
                message.channel.awaitMessages(response => response.content === '.confirm', {
                        max: 1,
                        time: 10000,
                        errors: ['time'],
                    })   
                    .then((collected) => {
                        message.channel.delete();
                    })    
                    .catch(() => {
                        m.edit('Ticket close timed out, the ticket was not closed.').then(m2 => {
                            m2.delete();
                        }, 3000);
                    });
            });
    }
 
});
client.on('message', message => {
if (message.content.split(' ')[0] == '.bc')
 message.guild.members.forEach( member => {
         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
member.send( `${member} ` + "**" + `RinoBroadcast v1.0` + " : ** " + message.content.substr(3));
                                                            message.delete();
															
});
});
client.login(process.env.BOT_TOKEN);
