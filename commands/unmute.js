module.exports.run = async (client, message, args) => {
    if(message.member.roles.some(r=>["Bot List Admin","Bot List Owner", "Bot List Moderator"].includes(r.name))) {
    let user = message.mentions.users.first()
    if(!user) return message.channel.send('Bot/User not found.')
    if(!user.bot) {
         message.guild.member(user.id).roles.map(r=>{
        message.guild.member(user.id).removeRole(message.guild.roles.find('name', r.name))
        })
        message.guild.member(user.id).addRole(message.guild.roles.find(r=> r.name === 'Member'))
        message.channel.send(`${user.username} has been unmuted!`)
        return;
    }
    message.guild.member(user.id).removeRole(message.guild.roles.find(r=> r.name === 'Muted'))
    message.guild.member(user.id).addRole(message.guild.roles.find(r=> r.name === 'Bots'))
    message.channel.send(`Bot Unmuted!`)
} else {
    message.channel.send('You are not a moderator/Admin.')
}
}

module.exports.help = {
    name: 'unmute'
}