const Discord = require('discord.js')
const client = new Discord.Client()
const fs = require('fs')
client.commands = new Discord.Collection()

fs.readdir('./commands', (err, files) => {
    if(err) console.log(err.stack)
    const jsfile = files.filter(f => f.split('.').pop() === 'js')
    if(jsfile.length <= 0) return console.log('No Commands')
    jsfile.forEach((f, i) => {
        let props = require(`./commands/${f}`)
        console.log(`${i}: ${f}`)
        client.commands.set(props.help.name, props)
    });
})

client.on('guildMemberAdd', member => {
    if(member.user.bot) return member.addRole(member.guild.roles.find(r => r.name === 'Waiting For Testing')).then(()=>{
        let channel = client.channels.get('518176850346770452')
        if(channel) channel.send(`<:bottag:518246267760017408> New Member: ${member.user.username}`)
    })
    let role =member.guild.roles.find(r => r.name === 'Member')
    member.addRole(role).catch(console.error)
    let channel = client.channels.get('518176850346770452')
    if(channel) channel.send(`New Member: ${member.user.username}`)
})

client.on('ready', () => {
    client.user.setActivity(`${client.users.size} users.`, {type: 'LISTENING'})
    console.log('Ready!')
    console.log(client.generateInvite(['READ_MESSAGES', 'KICK_MEMBERS', 'MANAGE_CHANNELS', 'BAN_MEMBERS', 'ADMINISTRATOR', 'VIEW_AUDIT_LOG']).then(i => console.log(i)))
})

client.on('message', async(message, err) => {
    if(message.channel.type =="dm") return;
    if(message.author.bot) return;
    let prefix = 'v'
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase()

    let commandfile = client.commands.get(cmd.slice(prefix))
    if(commandfile) commandfile.run(client, message, args, Discord)


})

client.login('NTE4MTU5Nzc5MjY1MzgwMzUz.DuNE1Q.UbnZdKq3SdhR432IszBtVyeNZMc')
