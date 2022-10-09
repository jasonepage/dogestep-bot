const commands = require("../config/commandHandler")
const config = require("../config.json")

module.exports = {
	name: 'interactionCreate',
	execute(interaction) {
        if (!interaction.isChatInputCommand()) return;
        console.log(`User ${interaction.user.tag} in channel #${interaction.channel.name} triggered an interaction.`);
    
        const command = commands.get(interaction.commandName);
    
        if (!command) return;
    
        try {
            command.execute(interaction);
        } catch (error) {
            console.error(error);
            interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
        }
    },
};
