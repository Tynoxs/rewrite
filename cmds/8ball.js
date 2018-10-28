const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {

    let questionball = args.join(" ");
    
    if(!questionball) return message.channel.send("That does not look like a question.");
       		if (questionball) {
       			function random_queball(qball)
         	{
   
         		return qball[Math.floor(Math.random()*qball.length)];
      
         	}
 
         	const qball = [
 			    "It is certain.", 
 			    "It is decidedly so.", 
 			    "Without a doubt.", 
 			    "Yes - definitely", 
 			    "You may rely on it.",
 			    "As I see it, yes.",
 			    "Most likely.",
                "Outlook good.",
                "Yes.",
                "Signs point to yes.",
                "Reply hazy, try again.",
                "Ask again later.",
                "Better not tell you now.",
                "Cannot predict now.",
                "Concentrate and ask again.",
                "Don't count on it.",
                "My reply is no.",
                "My sources say no.",
                "Outlook not so good.",
                "Very doubtful.",
                "50/50",
                "My sources say no, but they also said Hillary would win.",
 			    "Trump uses me when deciding to go to war."];
         	message.channel.send(":8ball: " + random_queball(qball));
       					}
}

module.exports.help = {
    name: "8ball" 
}