const Discord = require("discord.js");

    module.exports.run = async (bot, message, args) => {
        
    if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("No.");
    if (!message.mentions.users.first()) return message.channel.send("Ban who? :eyes:");
    let ment = message.mentions.users;
    let text = [];
    
    ment.forEach(m => {

        if (!message.guild.member(m).bannable) {
            message.channel.send(":no_entry_sign: I can't ban: "+m.username+".");          
        } else {
            message.guild.ban(message.guild.member(m)).then(() => {
                text.push(m.username)
            }).catch(err => message.channel.send(":no_entry_sign: Error banning: "+m.username+"."))
        }
    });
    setTimeout(function() {
        if (text.length === 0) return;
        message.channel.send(":white_check_mark: "+text.join(", ")+" has been banned. :hammer:", {split:true});
        console.log(message.guild.name+" Banned "+text.join(", "))
    }, 1000);
}

module.exports.help = {
    name: "ban" 
}

