module.exports = {
  name: "mute",
  description: "Mute everyone in channel!",
  execute(message, args) {
    if (message.member.roles.cache.some((r) => r.name === "admin")) {
      /** old implementaion */
      if (message.member.voice.channel) {
        let channel = message.guild.channels.cache.get(
          message.member.voice.channel.id
        );
        for (const [memberID, member] of channel.members) {
          // following if statement to mute everyone but the invoker:
          // if (member != message.member)
          member.voice.setMute(true);
        }
        message.channel.send("Silencio!!!");
      } else {
        message.reply("You need to join a voice channel first!");
      }
    } else {
      message.channel.send("You have no power over me!");
    }
  },
};
