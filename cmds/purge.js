const Discord = require("discord.js");

    module.exports.run = async (bot, message, args) => {
        
        var delText = args[0];
        var delInteger = parseInt(delText, 10);
        let toDelete = delInteger + 1;
        
        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("No.");
        if(!args[0]) return message.channel.send("How many do you want to delete?");
        if(args[0] < 1) return message.channel.send("Why 0? Cmon..");
          
        if (args[0] > 10) return message.channel.send(":x: Sorry, I can only delete 10 messages at once.");
 		
        if (args[0] < 20) {
          message.channel.bulkDelete(toDelete).then(() => {
 	      message.channel.send(":white_check_mark: Deleted " + "**" + args[0] + "**" + " messages. :scissors:"); 
 		
     	});
        }
    }
        
    module.exports.help = {
    name: "purge" 
}