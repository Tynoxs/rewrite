const Discord = require("discord.js");

    module.exports.run = async (bot, message, args) => {

        message.channel.send("(°-°)\\ ┬─┬").then(m => {
        setTimeout(() => {
            m.edit("(╯°□°)╯    ]").then(ms => {
                setTimeout(() => {
                    ms.edit("(╯°□°)╯  ︵  ┻━┻")
                }, 100)
            })
        }, 2500);

    });
}
    
    module.exports.help = {
    name: "tableflip" 
}