// FIXME: using this: https://github.com/MericcaN41/discordjs-v14-template-ts/blob/main/src/index.ts
// and https://github.com/fellipeutaka/discord-bot-template/blob/main/src/index.ts

import { Client, Collection, GatewayIntentBits } from "discord.js";
// import { commands } from "./commands";
// import { deployCommands } from "./deploy-commands";
import { env } from "./env";
import { readdirSync } from "fs";
import { join } from "path";
import { SlashCommand } from "./types";
import { Logger } from "./lib/logger";
import { i18nInstance } from "./lib/i18n";
import { dbClient } from "./lib/db";

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.slashCommands = new Collection<string, SlashCommand>();
client.cooldowns = new Collection<string, number>();

client.log = new Logger(client.shard?.ids);
client.i18n = new i18nInstance();
client.db = new dbClient().db;

const handlersDir = join(__dirname, "./handlers");
readdirSync(handlersDir).forEach((handler) => {
  if (!handler.endsWith(".js") && !handler.endsWith(".ts")) return;
  // eslint-disable-next-line @typescript-eslint/no-var-requires -- dynamic import
  require(`${handlersDir}/${handler}`)(client);
});

client.login(env.DISCORD_BOT_TOKEN);
