const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('서버정보')
		.setDescription('see 서버정보'),
	async execute(interaction) {
		await interaction.reply(`Server name: ${interaction.guild.name}\n Total members: ${interaction.guild.memberCount}`);
	},
};