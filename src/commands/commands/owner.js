const { SlashCommandBuilder } = require("@discordjs/builders");
const { EmbedBuilder } = require("discord.js");

module.exports = {
  owner: true,
  data: new SlashCommandBuilder()
    .setName("owner")
    .setDescription("Owner only commands")
    .addSubcommand((command) =>
      command
        .setName("status")
        .setDescription("Set bot status (bot owner only)")
        .addStringOption((option) =>
          option
            .setName("type")
            .setDescription("The status type")
            .addChoices(
              { name: "Watching", value: `${4}` },
              { name: "Playing", value: `${1}` },
              { name: "Listening to", value: `${3}` },
              { name: "Competing in", value: `${6}` },
              { name: "Streaming", value: `${2}` },
            )
            .setRequired(true),
        )
        .addStringOption((option) =>
          option
            .setName("status")
            .setDescription("What to change the bot status to")
            .setMaxLength(128)
            .setRequired(true),
        ),
    )
    .addSubcommand((command) =>
      command
        .setName("say")
        .setDescription("Make the bot say anything (bot owner only)")
        .addStringOption((option) =>
          option
            .setName("message")
            .setDescription("The message you want the bot to say")
            .setRequired(true),
        ),
    ),
  async execute(interaction, client) {
    const command = interaction.options.getSubcommand();

    switch (command) {
      case "status":
        const { options } = interaction;
        const status = options.getString("status");
        const type = options.getString("type");

        client.user.setActivity({
          name: status,
          type: type - 1,
          url: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`,
        });

        const embed = new EmbedBuilder()
          .setColor("f3b3a2")
          .setDescription(
            `The bots status has been set to \`${status}\``,
          );

        await interaction.reply({ embeds: [embed], ephemeral: true });
    }
    switch (command) {
      case "say":
        const { options } = interaction;
        const message = options.getString("message");

        await interaction.channel.send(message);
        await interaction.reply({
          content: "Message sent",
          ephemeral: true,
        });
    }
  },
};
