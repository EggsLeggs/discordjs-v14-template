import { Client } from "discord.js";
import { BotEvent } from "../types";

const event: BotEvent = {
  name: "ready",
  once: true,
  execute: (client: Client) => {
    // TODO: Make a logger command and use it here. It should show the shard ids managed by the client.
    // maybe attach the logger to the client object
    client.log.log(`💪 Logged in as ${client.user?.tag}`);
  },
};

export default event;
