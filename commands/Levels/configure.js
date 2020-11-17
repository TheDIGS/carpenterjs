const {Command} = require('klasa');

module.exports = class extends Command {
	
	constructor(...args) {
		super(...args, {
			name: 'configure',
			description: 'Configure your guild\'s levelset.',
			subcommands: true,
			usage: '<blacklist|xp> [options:channel]',
			usageDelim: ' ',
		})
	}
	
	async blacklist(message, [options]) {
		await message.guild.settings.update('levels.channelBlacklist', options);
	}

}