module.exports = {
  name: "unmute",
  description: " Unmute everyone in channel!",
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

          member.voice.setMute(false);
        }
        message.channel
          .send("Sonorus!!!")
          .then((message) => message.delete({ timeout: 15000 }))
          .catch(console.error);
      } else {
        message
          .reply("You need to join a voice channel first!")
          .then((message) => message.delete({ timeout: 15000 }))
          .catch(console.error);
      }
    } else {
      message.channel
        .send("You have no power over me!")
        .then((message) => message.delete({ timeout: 15000 }))
        .catch(console.error);
    }
  },
};
