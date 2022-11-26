const Discord = require("discord.js");
const {
    SlashCommandBuilder
} = require('@discordjs/builders');

const data = new SlashCommandBuilder()
    .setName('ping')
    .setDescription("Hewwo? Is this thing on?");
module.exports.execute = async(client, interaction) => {
    return interaction.reply({
        content: `pong! im alive, i think... \nmy ping is: ${Math.floor(client.ws.ping)}ms`,
        ephemeral: false
    });

};
module.exports.options = {
    ...data.toJSON()
};


module.exports.config = {
    enabled: true,
};