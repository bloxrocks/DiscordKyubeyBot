const { Events, Message } = require('discord.js');

module.exports = {
    name: Events.MessageCreate,
    async execute(message) {
        if (message.author.bot) return;

        if (message.content.toLowerCase().includes("i wish")) {     
            await message.reply("Is that the Wish that will make your soul gem shine?");
        }
    }
};