const fs = module.require("fs");
const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("No.");
    
    let toMute = message.mentions.members.first() || message.guild.members.get(args[0]);
    if(!toMute) return message.channel.send("Who should I mute? :eyes:");
    
    if(toMute.id === "506087502508195870") return message.channel.send("I WILL NEVER MUTE MYSELF!");
    if(toMute.id === message.author.id) return message.channel.send("You really should be able to mute yourself.");
    if(toMute.highestRole.position >= message.member.highestRole.position) return message.channel.send("Ouh, don't try to mute someone higher than yourself :no_mouth:.");
    
    let role = message.guild.roles.find(r => r.name === "muted");
    if(!role) {
        try {
            role = await message.guild.createRole({
                name: "muted",
                color: "#000000",
                permission: []
            });
            
            message.guild.channels.forEach(async (channel, id) => {
               await channel.overwritePermissions(role, {
                   SEND_MESSAGES: false,
                   ADD_REACTIONS: false
               }); 
            });
        } catch(e) {
            console.log(e.stack);
        }
    }
    
    if(toMute.roles.has(role.id)) return message.channel.send("Can't mute a User twice :confused:.");
    
    bot.mutes[toMute.id] = {
        guild: message.guild.id,
        time: Date.now() + parseInt(args[1]) * 60000
    }
    
    await toMute.addRole(role);
    
    fs.writeFile("./mutes.json", JSON.stringify(bot.mutes, null, 4), err => {
        if(err) throw err;
        message.channel.send(":mute: Muted " + toMute.user.tag + ".");
    }); 
}

    module.exports.help = {
    name: "mute" 
}