module.exports.run = async (client, message, args) => {
    if(message.guild.member(message.author.id).roles.some(r=>['Bot List Admin', 'Bot List Moderator', 'Bot List Owner'].includes(r.name))) {
        let val = args[0]
        message.channel.bulkDelete(val)
    } else {
        message.channel.send('You are not an admin/moderator.')
    }
   
}

module.exports.help = {
    name: 'del'
}