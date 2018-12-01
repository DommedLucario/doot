module.exports.run = async (client, message, args) => {
    let user = message.mentions.users.first()
    if(!user) return message.channel.send(`User not found.`)
    let channel = client.channels.get('518176836522344455')
    if(channel) channel.send(`${message.author.username} applied ${user.username} for certifcation!`)
    channel = client.channels.get('518173114413350933')
    if(channel) channel.send(`${message.author.username} applied ${user.username} for certification!`)
    message.channel.send('Applied!')

}

module.exports.help = {
    name: 'certify'
}