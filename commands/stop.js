module.exports = {
  name: 'stop',
  aliases: ['disconnect', 'leave'],
  inVoiceChannel: true,
  run: async (client, message) => {
    const queue = client.distube.getQueue(message)
    if (!queue) return message.channel.send(`Queue something first pls, thanks.`)
    queue.stop()
    message.channel.send(`Bro, who STOPPED THE QUEUE`)
  }
}
