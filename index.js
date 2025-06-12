const { setDefaultResultOrder } = require('dns');
setDefaultResultOrder('ipv4first');

const { Client, GatewayIntentBits } = require("discord.js");
const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages , GatewayIntentBits.MessageContent],
});

client.on("messageCreate", (message) => {
    if(message.author.bot) return;
  if(message.content.startsWith("create")) {
    const url = message.content.split("create")[1];
    message.reply("Your Short Url Gnerating : " + url)
    return
  };
  message.reply({
    content: "Hello from bot ",
  });
});

client.on("interactionCreate" , interaction => {
   interaction.reply("Pong !!")
})
client.login('MTM4MjYwMDY2NzMzMTQyODQyMw.GnP6iS.oXAM7o8cXF5HmlRfug-g-VP1N8oJT8EfcSxZOU');
