const { REST, Routes } = require('discord.js');

const commands = [
  {
    name: 'create',
    description: 'creates Short URL',
  },
];

const rest = new REST({ version: '10' }).setToken("MTM4MjYwMDY2NzMzMTQyODQyMw.GnP6iS.oXAM7o8cXF5HmlRfug-g-VP1N8oJT8EfcSxZOU");

async function registerCommands() {
  try {
    console.log('Started refreshing application (/) commands.');

    await rest.put(Routes.applicationCommands("1382600667331428423"), { body: commands });

    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }
}

registerCommands(); // Call the async function