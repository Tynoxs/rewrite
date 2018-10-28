const fs = module.require("fs");
const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("No.");
    
    let toMute = message.mentions.members.first() || message.guild.members.get(args[0]);
    if(!toMute) return message.channel.send("Who should I unmute? :eyes:");
    
    let role = message.guild.roles.find(r => r.name === "muted");
    
    if(!role || !toMute.roles.has(role.id)) return message.channel.send("This User isn't muted?");
    
    await toMute.removeRole(role);
    
    delete bot.mutes[toMute.id];
                    
    fs.writeFile("./mutes.json", JSON.stringify(bot.mutes), err => {
        if(err) throw err;
        message.channel.send(":sound: Unmuted " + toMute.user.tag + ".");
    });
}

    module.exports.help = {
    name: "unmute" 
}