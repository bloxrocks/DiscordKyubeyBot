const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('hello')
        .setDescription('Hello World'),
    async execute(interaction){
        await interaction.reply("Hello World. Would You like to make a wish?")
    }
}