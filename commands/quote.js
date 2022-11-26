const Discord = require("discord.js");
const {
    SlashCommandBuilder
} = require('@discordjs/builders');

let fs = require("fs")
const readFileLines = filename =>
    fs.readFileSync(filename)
    .toString('UTF8')
    .split('\n');

let arr = readFileLines('./quote.txt');

const animu = arr;



const data = new SlashCommandBuilder()
    .setName('quote')
    .setDescription("Replies with a random animu quote :3");
module.exports.execute = async(client, interaction) => {
    return interaction.reply({
        content: animu[Math.floor(Math.random() * animu.length)],
        ephemeral: false
    });

};
module.exports.options = {
    ...data.toJSON()
};


module.exports.config = {
    enabled: true,
};