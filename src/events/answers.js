module.exports = {
    name: "messageCreate",
    async execute(message) {
      if (message.author.bot || !message.guild) return;
  
      const msg = [
        `yes`,
        `no`,
        `mayyybe`,
        `idk`,
        `maybe`,
        `perhaps`,
        `perchance`,
        `mayhaps`,
        `nuh uh`,
        `yeah`,
        `nah`,
        `NO!`,
        `i dont know`,
        `yuh huh`,
        `YASSSS`
      ];
      const response = msg[Math.floor(Math.random() * msg.length)];
      if (message.content.toLowerCase().startsWith("rumbletone") && message.content.toLowerCase().endsWith("?"))
        {message.channel.send(`${response}`)}
    },
  };