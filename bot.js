const TelegramBot = require("node-telegram-bot-api");

const bot = new TelegramBot(process.env.TELEGRAM_BOT_TOKEN, { polling: true });

const shouldDeleteMessage = (message) => message !== "👍";

bot.on("message", async (message) => {
  try {
    if (
      `${message.chat.id}` === process.env.TARGET_CHAT_ID &&
      shouldDeleteMessage(message.text)
    ) {
      await bot.deleteMessage(message.chat.id, message.message_id);
    }
  } catch (e) {
    console.error("Failed to delete", e);
  }
});
