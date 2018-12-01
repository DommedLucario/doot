module.exports.run = async (client, message, args) => {
    if(message.member.roles.some(r=>["Bot List Admin","Bot List Owner", "Bot List Moderator"].includes(r.name))) {
    let user = message.mentions.users.first()
    let reason = args.join(' ').slice(22)
    if(!user) return message.channel.send('Bot not found.')
    if(!user.bot){
        message.guild.member(user.id).roles.map(r=>{
        message.guild.member(user.id).removeRole(message.guild.roles.find('name', r.name))
        })
        message.guild.member(user.id).addRole(message.guild.roles.find(r=> r.name === 'Muted'))
        message.channel.send(`${user.username} has been muted!`)
        return;
}
    message.guild.member(user.id).roles.map(r=>{
    message.guild.member(user.id).removeRole(message.guild.roles.find('name', r.name))
    })
    message.guild.member(user.id).addRole(message.guild.roles.find(r=> r.name === 'Muted'))
    client.channels.get('518176836522344455').send(`${user.username} has been muted! Reason: ${reason}`)
    message.channel.send(`Bot ${user} muted.`)
} else {
    message.channel.send('You are not a moderator/Admin.')
}
}

module.exports.help = {
    name: 'mute'
}