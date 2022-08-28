const { SlashCommandBuilder } = require('discord.js');
const { getQNA } = require('../models/guildIdModel');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('qna')
		.setDescription('Replies with qna!')
        .addStringOption(option =>
            option.setName('input')
                .setDescription('The input to echo back')
                .setRequired(true)),
	async execute(interaction) {
		getQNA((data) => {
            let answer = '';
            Object.keys(data).map((key) => {
                if (data[key].question === interaction.options.getString('input')) { // checks if option (arg) is equal to db question
                    answer = data[key].answer;
                }
            });
            if (answer) {
                interaction.reply(`${answer}`);
            } else {
                interaction.reply('sorry.');
            }
        });
	},
}; 
