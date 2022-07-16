module.exports = {
	name: 'ready',
	once: true, // the once property is a boolean that specifies if the event should run only once
	execute(client) {
		console.log(`Ready! Logged in as ${client.user.tag}!`);
	},
};