const fs = require('node:fs'); // import filesearch
const path = require('node:path'); // import node.js native filepath
const { Client, Collection, GatewayIntentBits } = require('discord.js'); // import discord.js, import intents
const { token } = require('./config.json'); // import dogestep bot credentials

const client = new Client({ intents: [GatewayIntentBits.Guilds] }); // define new discord Bot client

// Event handling ("./events", examples: "ready" / "interactionCreate")
const eventsPath = path.join(__dirname, 'events');
const eventFiles = fs.readdirSync(eventsPath).filter(file => file.endsWith('.js'));

for (const file of eventFiles) {
	const filePath = path.join(eventsPath, file);
	const event = require(filePath);
	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args));
	} else {
		client.on(event.name, (...args) => event.execute(...args));
	}
};

client.login(token);