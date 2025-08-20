const { Events, Message } = require('discord.js');
const { KyubeySay } = require('../KyubeySay.js');

module.exports = {
    name: Events.MessageCreate,
    async execute(message) {
        if (message.author.bot) return;

        if (message.content.toLowerCase().includes("i wish")) {    
            await message.reply(KyubeySay());
        }
    }
};