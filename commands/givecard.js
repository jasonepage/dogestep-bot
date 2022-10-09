const { SlashCommandBuilder } = require('discord.js');
const { addCoins } = require('../db/usersModel');
const { adminDiscordId } = require('../config.json')

module.exports = {
	data: new SlashCommandBuilder()
		.setName('givecard')
		.setDescription('Gives any card to requested user.')
        .addStringOption(option =>
            option.setName('user')
                .setDescription('Select any user.')
                .setRequired(true))
        .addStringOption(option =>
            option.setName('card')
                .setDescription('Select any card.') // Change this to a choice option? and import list of cards
                .setRequired(true))
        .addIntegerOption(option =>
            option.setName('amount')
                .setDescription('Select any amount.')
                .setRequired(true)),
    
	async execute(interaction) {
        // Only allow Bot Owner to preform command
        if (interaction.user.id !== adminDiscordId) {
            interaction.reply('You need to be an Admin to use this command.');
        } else {
        // Add the card to the specified User's inventory
		addCoins(interaction.options.getString('user'), interaction.options.getInteger('amount'))
        interaction.reply('done!')};
	},
}; 
