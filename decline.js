module.exports.run = async (client, message, args) => {
    if(message.guild.member(message.author.id).roles.some(r=>['Bot List Admin', 'Bot List Moderator', 'Bot List Owner'].includes(r.name))) {
        let ID = args[0]
        let oID = args[1]
        let reason = args.join(' ').slice(37)
        let channe = client.channels.get('518176836522344455')
        if(channe) channe.send(`Bot <@${ID}> has been declined by ${message.author.tag} (Submitter: <@${oID}>) (Reason: ${reason})`)
        message.channel.send('Declined.')
    } else {
        message.channel.send('You are not an admin/moderator.')
    }
   
}

module.exports.help = {
    name: 'decline'
}