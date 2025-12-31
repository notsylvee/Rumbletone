const { Interaction } = require("discord.js");

module.exports = {
    name: 'interactionCreate',
    async execute(interaction, client) {
        if (!interaction.isCommand()) return;

        const command = client.commands.get(interaction.commandName);

        const user = [
            "1018686464000807003", /*sylv*/
            "1205751345077026897", /*rumble*/
        ]

        if (command.owner == true) {
            if (!user.includes(interaction.user.id))
        return await interaction.reply({
          content: `Invalid permission`,
          ephemeral: true,
        });
    }

        if (!command) return
        
        try{


            await command.execute(interaction, client);
        } catch (error) {
            console.log(error);
            await interaction.reply({
                content: 'There was an error while executing this command!', 
                ephemeral: true
            });
        } 

    },
    


};