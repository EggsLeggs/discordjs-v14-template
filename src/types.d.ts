import {
  SlashCommandBuilder,
  Collection,
  AutocompleteInteraction,
  ChatInputCommandInteraction,
} from "discord.js";
import { Logger } from "./lib/logger";
import { i18nInstance } from "./lib/i18n";
import { dbClient } from "./lib/db";

export interface SlashCommand {
  command: SlashCommandBuilder;
  execute: (interaction: ChatInputCommandInteraction) => void;
  autocomplete?: (interaction: AutocompleteInteraction) => void;
  modal?: (interaction: ModalSubmitInteraction<CacheType>) => void;
  cooldown?: number; // in seconds
}

interface GuildOptions {
  prefix: string;
}

export type GuildOption = keyof GuildOptions;
export interface BotEvent {
  name: string;
  once?: boolean | false;
  execute: (...args) => void;
}

declare module "discord.js" {
  export interface Client {
    slashCommands: Collection<string, SlashCommand>;
    commands: Collection<string, Command>;
    cooldowns: Collection<string, number>;
    log: Logger;
    i18n: i18nInstance;
    db: PrismaClient;
  }
}
