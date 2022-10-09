const { SlashCommandBuilder } = require('discord.js');
const { getUserInventory } = require('../db/usersModel');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('inventory')
		.setDescription('Replies with the inventory of any user.')
        .addStringOption(option =>
            option.setName('user')
                .setDescription('Returns the inventory of a user.')
                .setRequired(true)),

	async execute(interaction) {
		getUserInventory(interaction.options.getString('user'))
        .then(value => {
            interaction.reply(`${value}`);
        }).catch(error => {
            interaction.reply(`${error}`)
        }); 
	},
}; 
