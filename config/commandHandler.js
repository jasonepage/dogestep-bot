const { Collection } = require("discord.js");
const fs = require('node:fs'); // import filesearch
const path = require('node:path'); // import node.js native filepath

// Command handling (maintaining commands, exported to event handler)
const commands = new Collection(); //
const commandFiles = fs.readdirSync("./commands").filter(file => file.endsWith('.js')); // 

for (const file of commandFiles) {
	const command = require(`../commands/${file}`);
	// Set a new item in the Collection
	// With the key as the command name and the value as the exported module
	commands.set(command.data.name, command);
}

module.exports = commands;