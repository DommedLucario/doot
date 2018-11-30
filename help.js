module.exports.run = async (client, message, args) => {
    var Discord = require('discord.js')
    var embed = new Discord.RichEmbed()
    .setTitle('ABL Commands')
    .addField('help', 'View This Message.')
    .addField('submit', 'Submit a bot to the server.')
    message.channel.send(embed)
}

module.exports.help = {
    name: 'help'
}