const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('help')
		.setDescription('Replies with all Dogestep BOT commands.'),
	async execute(interaction) {
		await interaction.reply('hiii!');
	},
};