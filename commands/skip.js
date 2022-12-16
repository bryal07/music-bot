module.exports = {
  name: 'skip',
  inVoiceChannel: true,
  run: async (client, message) => {
    const queue = client.distube.getQueue(message)
    if (!queue) return message.channel.send(`Queue something first pls, thanks.`)
    try {
      const song = await queue.skip()
      message.channel.send(`Dogwater Song anyways. Now playing:\n${song.name}`)
    } catch (e) {
      message.channel.send(`${e}`)
    }
  }
}
