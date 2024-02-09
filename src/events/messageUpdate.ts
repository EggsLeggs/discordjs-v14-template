import { ChannelType, Message } from "discord.js";
import { BotEvent } from "../types";

const event: BotEvent = {
  name: "messageUpdate",
  execute: async (oldMessage: Message, newMessage: Message) => {
    newMessage.client.log.log(
      `Message updated: ${newMessage.content} (was: ${oldMessage.content})`
    );
  },
};

export default event;
