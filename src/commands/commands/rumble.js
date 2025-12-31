const fs = require("fs/promises");

module.exports = {
    data: {
        name: "rumble",
        description: "rumble",
        "integration_types": [0, 1],
        "contexts": [0, 1, 2]
    },
    async execute(interaction) {
        await interaction.reply({ content: `rumble` });
      },
}