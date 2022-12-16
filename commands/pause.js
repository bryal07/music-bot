module.exports = {
  name: 'pause',
  aliases: ['pause', 'hold'],
  inVoiceChannel: true,
  run: async (client, message) => {
    const queue = client.distube.getQueue(message)
    if (!queue) return message.channel.send(`Queue something first pls, thanks.`)
    if (queue.paused) {
      queue.resume()
      return message.channel.send('Resumed the song for you')
    }
    queue.pause()
    message.channel.send('Paused the song for you')
  }
}
