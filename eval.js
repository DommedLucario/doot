module.exports.run = async (client, message, args) => {
    if(message.author.id != '231956829159161856') return;
    try{
        const code = args.join(" ");
          if(code.includes('bot.token')) return message.channel.send('NO BOT TOKEN FOR U')
          if(message.channel.type != "dm"){
          if(code.includes('process')) return message.channel.send('we made the mistake one don\'nt do it.');
          }
          let evaled = eval(code);

          if (typeof evaled !== "string")
            evaled = require("util").inspect(evaled);
          if(evaled.length > 1998) {
            bot.hastebin(evaled, 'xl', message)
          }
          message.channel.send(clean(evaled), {code:"xl"});
        } catch (err) {
          message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
        }
}

function clean(text) {
    if (typeof(text) === "string")
      return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
    else
        return text;
  }
  
module.exports.help = {
    name: 'eval'
}
    
