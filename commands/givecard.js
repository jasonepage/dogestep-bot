const { SlashCommandBuilder } = require('discord.js');
const { addQNA } = require('../models/guildIdModel');
const { adminDiscordId } = require('../config.json')

module.exports = {
	data: new SlashCommandBuilder()
		.setName('givecard')
		.setDescription('Gives any card to requested user.')
        .addStringOption(option =>
            option.setName('server')
                .setDescription('Select any server.')
                .setRequired(true))
        .addStringOption(option =>
            option.setName('user')
                .setDescription('Select any user.')
                .setRequired(true))
        .addStringOption(option =>
            option.setName('card')
                .setDescription('Select any card.') // Change this to a choice option? and import list of cards
                .setRequired(true)),
    
	async execute(interaction) {
        // Only allow Bot Owner to preform command
        if (interaction.user.id !== adminDiscordId) {
            interaction.reply('You need to be an Admin to use this command.');
        } else {
        // add Card to User's inventory/database
		addQNA(interaction.options.getString('server'), interaction.options.getString('card'), interaction.options.getString('user'))
        interaction.reply('done!')};
	},
}; 
