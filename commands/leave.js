module.exports = {
  name: 'leave',
  run: async (client, message) => {
    client.distube.voices.leave(message)
    message.channel.send(`k fk you too`)
  }
}
