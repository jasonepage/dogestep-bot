const { SlashCommandBuilder } = require('discord.js');
const { addCoins } = require('../db/usersModel');
const { adminDiscordId } = require('../config.json')

module.exports = {
	data: new SlashCommandBuilder()
		.setName('claimdaily')
		.setDescription('Gives coins as a daily reward.'),
    
	async execute(interaction) {
        // Add the card to the specified User's inventory
		addCoins(interaction.user.id, interaction.options.getInteger('amount'))
        interaction.reply('done!')},
};
