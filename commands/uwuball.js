const Discord = require("discord.js");
const {
	SlashCommandBuilder
} = require('@discordjs/builders');

const data = new SlashCommandBuilder()
	.setName('uwuball')
	.setDescription("Just like 8Ball, but uwu")
	.addStringOption(option => option.setName('question').setDescription('Ask the uwuBall away!').setRequired(true));
module.exports.execute = async (client, interaction) => {
	const input = interaction.options.getString("question")
	const answers = ['It is certain.', 'It is decidedly so.', 'Without a doubt.', 'Yes definitely.', 'You may rely on it.', 'As I see it, yes.', 'Most likely.', 'Outlook good.',
		'Yes.', 'Signs point to yes.', 'Reply hazy, try again.', 'Ask again later.', 'Better not tell you now.',
		'Cannot predict now.', 'Concentrate and ask again.', 'Don\'t count on it.', 'My reply is no.',
		'My sources say no.', 'Outlook not so good.', 'Very doubtful.'
	];
	const pick = Math.round(Math.random() * answers.length);
	return interaction.reply({
		content: `You asked: "` + input + `" \nAll I can say to that is: ` + answers[pick],
		ephemeral: false
	});

};
module.exports.options = {
	...data.toJSON()
};


module.exports.config = {
	enabled: true,
};