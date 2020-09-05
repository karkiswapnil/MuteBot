module.exports = {
  name: "ping",
  description: "this is a ping command!",
  execute(message, args) {
    let role = message.guild.roles.cache.some((r) => r.name === "admin");

    if (message.member.roles.cache.some((r) => r.name === "admin")) {
      message.channel.send("pong!");
    } else {
      message.channel.send("You have no power over me!");
    }
  },
};
