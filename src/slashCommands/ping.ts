import { SlashCommandBuilder, EmbedBuilder } from "discord.js";
import { SlashCommand } from "../types";

const command: SlashCommand = {
  command: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Shows the bot's ping"),
  execute: (interaction) => {
    interaction.client.log.log("Pong!");
    interaction.client.log.log(
      "testing i18n: " + interaction.client.i18n.t("en", "hero cta")
    );
    interaction.reply({
      embeds: [
        new EmbedBuilder()
          .setAuthor({ name: "MRC License" })
          .setDescription(`🏓 Pong! \n 📡 Ping: ${interaction.client.ws.ping}`),
      ],
    });
  },
  cooldown: 10,
};

export default command;
