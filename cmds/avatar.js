module.exports.run = async (bot, message, args) => {
    let userAvatar = message.mentions.users.first() || message.author;
    let msg = await message.channel.send("Generating Avatar...");
    
    await message.channel.send({files: [
        {
            attachment: userAvatar.displayAvatarURL,
            name: "avatar.png"
        }
    ]});
    
    msg.delete();
}

    module.exports.help = {
    name: "avatar" 
}