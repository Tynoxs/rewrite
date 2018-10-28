const Discord = require("discord.js");

    module.exports.run = async (bot, message, args) => {

        if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("No.");
        if (!message.mentions.users.first()) return message.channel.send("Kick who? :eyes:")
        let ment = message.mentions.users;
        let text = []
        
        ment.forEach(m => {
        if (!message.guild.member(m).kickable) {
            message.channel.send(":no_entry_sign: I can't kick: "+m.username);          
        } else {
            message.guild.member(m).kick().then(() => {
                text.push(m.username)
            }).catch(err => message.channel.send(":no_entry_sign: Error banning: "+m.username))
        }
    });
    setTimeout(function() {
        if (text.length === 0) return;
        message.channel.send(":white_check_mark: "+text.join(", ")+" has been kicked. :hole:", {split:true});
    }, 1000);
}
    
module.exports.help = {
    name: "kick" 
}