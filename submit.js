module.exports.run = async (client, message, args) => {
    var Discord = require('discord.js')
    var moment = require('moment')
    var ID = args[0]
    var prefix = args[1]
    if(!ID) return message.channel.send('Please provide a ID and prefix. [vsubmit (ID) (prefix)')
    var embed = new Discord.RichEmbed()
    .setTitle('New Bot Submission! <:pUwu:518162481215176719>')
    .addField('Author', message.author.username)
    .addField('Time of submit:', moment(message.createdAt).format('MM/DD/YYYY hh:mm:ss'))
    .setFooter('Give the admins 24-48 hours to test your bot.')
    message.channel.send(embed)
    let channe = client.channels.get('518176836522344455')
    if(channe) channe.send(embed)

    let admin_channel = client.channels.get('518173114413350933')
    if(admin_channel) admin_channel.send(
    {embed: new Discord.RichEmbed()
    .setTitle('New Bot!')
    .addField('Author', message.author.tag)
    .addField('ID', message.author.id)
    .addField('Invite', `https://discordapp.com/oauth2/authorize?client_id=${ID}&permissions=0&scope=bot`)
    .addField('Prefix', prefix)})
}

module.exports.help = {
    name: 'submit'
}