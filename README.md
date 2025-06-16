# Discord Bot – Short URL Command Bot

A simple Discord bot built with Node.js and Discord.js v14+ that responds to the `/create` slash command and message commands to simulate short URL creation.

## 🛠️ Tech Stack

- **Node.js**
- **Discord.js v14+**

---

## 📁 Project Structure

```
discord-bot/
├── index.js           # Main bot logic (responds to messages and interactions)
├── command.js         # Slash command registration
├── .env               # Environment variables (bot key, app ID, etc.)
├── package.json
└── README.md
```

---

## ⚙️ Requirements

- Node.js v18+ (Discord.js v14 requires Node 16.9+)
- Discord Bot Token
- Discord Application ID
- Guild ID (for development/testing slash commands)

---

## 📦 Installation

1. Clone this repository:

```bash
git clone https://github.com/your-username/discord-bot.git
cd discord-bot
```

2. Install dependencies:

```bash
npm install discord.js
```

3. Create a `.env` file in the root directory and add the following:

```
BOT_TOKEN=your_discord_bot_token
CLIENT_ID=your_discord_app_id
```

4. Update the following placeholders in your `command.js`:

```js
.setToken(process.env.BOT_TOKEN)
Routes.applicationCommands(process.env.CLIENT_ID)
```

---

## 🚀 How to Run the Bot

1. **Register Slash Commands:**

```bash
node command.js
```

This registers the `/create` slash command with your bot.

2. **Start the Bot:**

```bash
node index.js
```

---

## 🧪 Bot Usage

### 🟢 Slash Command

Type `/create` in your server — the bot will respond (handled in `interactionCreate` event).

### 🟢 Text Command

Send:

```
create https://example.com
```

The bot will respond:

```
Your Short Url Generating : https://example.com
```

All other messages will be responded with:

```
Hello from bot
```

---

## 🔐 Security Note

Never commit your `.env` or real tokens to version control. Use `.gitignore`:

```
.env
```

---

## ✅ To-Do

- Add actual short URL generation using APIs like Bitly or TinyURL.
- Add error handling and validations.
- Deploy to a server (Heroku, Render, etc.)

---

## 📄 License

This project is licensed under the MIT License.
