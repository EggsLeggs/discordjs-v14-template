import { ShardingManager } from "discord.js";
import { env } from "./env";
import { join } from "path";

const botFile = join(__dirname, "./bot.js");
const manager = new ShardingManager(botFile, {
  token: env.DISCORD_BOT_TOKEN,
  totalShards: 2,
});

manager.on("shardCreate", (shard) =>
  console.log(`🚀 Successfully launched shard ${shard.id}`)
);

manager.spawn();
