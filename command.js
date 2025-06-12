const { REST, Routes } = require('discord.js');

const commands = [
  {
    name: 'create',
    description: 'creates Short URL',
  },
];

const rest = new REST({ version: '10' }).setToken(discord-token);

async function registerCommands() {
  try {
    console.log('Started refreshing application (/) commands.');

    await rest.put(Routes.applicationCommands(bot_number), { body: commands });

    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }
}

registerCommands(); // Call the async function
