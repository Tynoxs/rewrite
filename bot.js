const Discord = require("discord.js");
const fs = require("fs");
const prefix = '>';

const bot = new Discord.Client({disableEveryone: true});
bot.commands = new Discord.Collection();
bot.mutes = require("./mutes.json");

//Fetch Commands
fs.readdir("./cmds/", (err, files) => {
	if(err) console.error(err);
	
	let jsfiles = files.filter(f => f.split(".").pop() === "js");
	if(jsfiles.length <= 0) {
		console.log("No commands found!");	
		return;
	}
	
	console.log(`Loading ${jsfiles.length} commands!`);
	
	jsfiles.forEach((f, i) => {
		let props = require(`./cmds/${f}`);
		bot.commands.set(props.help.name, props);
	});
});

	//Bot startup
  	bot.on('ready', () => {
        bot.user.setStatus('available');
        bot.user.setPresence({ game: { name: 'Say /help', type: 0 } });
        
        bot.setInterval(() => {
            for(let i in bot.mutes) {
                let time = bot.mutes[i].time;
                let guildId = bot.mutes[i].guild;
                let guild = bot.guilds.get(guildId);
                let member = guild.members.get(i);
                let mutedRole = guild.roles.find(r => r.name === "muted");
                if(!mutedRole) continue;
                
                if(Date.now() > time) {
                    member.removeRole(mutedRole);
                    delete bot.mutes[i];
                    
                    fs.writeFile("./mutes.json", JSON.stringify(bot.mutes), err => {
                        if(err) throw err;
                        console.log(":sound: Unmuted " + member.user.tag);
                    });
                }
            }
        }, 5000)    
	});

	//Bot reacts to
	bot.on('message', async message => {  
    
	//Gets commands
           
    if (message.author.bot) {
        message.guild.channels.find("id", "501258481718788097").setName("Member Count: " + message.guild.memberCount);
    }       
           
    if(message.author.bot) return;
	if(message.channel.type === "dm") return;
		
	let messageArray = message.content.split(/\s+/g);
	let command = messageArray[0];
	let args = messageArray.slice(1);
		
	if(!command.startsWith(prefix)) return;
		
	let cmd = bot.commands.get(command.slice(prefix.length));
	if (cmd) cmd.run(bot, message, args);

	});
		
	client.login(process.env.BOT_TOKEN);