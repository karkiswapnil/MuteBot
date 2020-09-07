const Discord = require("discord.js");

const client = new Discord.Client();

const prefix = "?";

const fs = require("fs");

client.commands = new Discord.Collection();

const commandFiles = fs
  .readdirSync("./commands/")
  .filter((file) => file.endsWith(".js"));
for (const file of commandFiles) {
  const command = require(`./commands/${file}`);

  client.commands.set(command.name, command);
}

client.once("ready", () => {
  console.log("Mute Bot Ready to kick some ass!");
});

client.on("message", async (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();

  message
    .delete({ timeout: 15000 })
    .then((msg) =>
      console.log(
        `Deleted message from ${msg.author.username} after 15 seconds`
      )
    )
    .catch(console.error);

  if (command === "ping") {
    client.commands.get("ping").execute(message, args);
  }
  if (command === "mute") {
    client.commands.get("mute").execute(message, args);
  }

  if (command === "unmute") {
    client.commands.get("unmute").execute(message, args);
  }
});

client.login(process.env.token);
