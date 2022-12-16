module.exports = {
  name: 'nowplaying',
  aliases: ['np'],
  inVoiceChannel: true,
  run: async (client, message, args) => {
    const queue = client.distube.getQueue(message)
    if (!queue) return message.channel.send(`Queue something first pls, thanks.`)
    const song = queue.songs[0]
    message.channel.send(`I'm playing **\`${song.name}\`**, by ${song.user}`)
  }
}
