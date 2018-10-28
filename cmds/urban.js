const Discord = require("discord.js");
const urban = require("urban");

module.exports.run = async (bot, message, args) => {
    if(args.length < 1) return message.channel.send("Please insert something..");
    let str = args.join(" ");
    
    urban(str).first(json => {
        if(!json) return message.channel.send("Hmm.. I don't know the answer to that.");
        
        let embed = new Discord.RichEmbed()
            .setTitle(json.word)
            .setDescription(json.definition)
            .addField("Upvotes", json.thumbs_up, true)
            .addField("Downvotes", json.thumbs_down, true)
            .setFooter(`Written by ${json.author}`);
        
        message.channel.send(embed);
    });
}

    module.exports.help = {
    name: "urban" 
}