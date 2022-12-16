module.exports = {
  name: 'volume',
  aliases: ['v', 'set', 'set-volume'],
  inVoiceChannel: true,
  run: async (client, message, args) => {
    const queue = client.distube.getQueue(message)
    if (!queue) return message.channel.send(`Queue something first pls, thanks.`)
    const volume = parseInt(args[0])
    if (isNaN(volume)) return message.channel.send(`thats not a number, try again`)
    queue.setVolume(volume)
    message.channel.send(`Volume set to \`${volume}\``)
  }
}
