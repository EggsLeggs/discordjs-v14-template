# discordjs-v14-template
This is a template which was created for porting the GateKeeper bot to discord.js v14 from Pycord. The template isn't completely finished but should run without any issues. If you have any issues, please open an issue on the GitHub repository.

This template was built on top of [discordjs-v14-template-ts](https://github.com/MericcaN41/discordjs-v14-template-ts)

## Features
- 💙 Typescript
- 🔼 Prisma ORM
- 🎌 Command translations using i18n
- ⚡ Sharding via a custom sharding manager
- 📑 Enhanced logging 
- 💬 Slash commands (incl. Autocomplete)
- 📁 Event Handler
- ⏱️ Command Cooldowns & Permission

## Installation
1. Clone the repository and create a .env file in the root directory with the following content:
```env
DISCORD_BOT_TOKEN=your_token
DISCORD_BOT_CLIENT_ID=your_client_id
DATABASE_URL=your_database_url
```
2. Install the dependencies using `npm install`
3. Build the project using `npm run build`
4. Run the bot using `npm start`

### Things that need improving
- [ ] Add more translations as an example
- [ ] Add more commands as an example
- [ ] Add more events as an example
- [ ] Finish the logging system using chalk and pino