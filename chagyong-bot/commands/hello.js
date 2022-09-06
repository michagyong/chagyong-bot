const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('착용')
		.setDescription('Replies with Pong!'),
	async execute(interaction) {
		await interaction.reply('미착용!');
	},
};