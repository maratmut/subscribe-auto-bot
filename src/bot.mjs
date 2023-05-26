import TeleBot from "telebot"

const bot = new TeleBot(process.env.TELEGRAM_BOT_TOKEN)

// Обрабатываем событие start
bot.on(['/start'], async (msg) => {
    // Отправляем приветственное сообщение
    await bot.sendMessage(msg.chat.id, `Привет, ${msg.from.first_name}!`);
  });
  
  // Обрабатываем событие подписки на канал
  bot.on('new_chat_members', async (msg) => {
    // Проверяем, что пользователь подписался на нужный канал
    if (msg.chat.username === 'название_канала') {
      // Отправляем сообщение о подтверждении подписки
      await bot.sendMessage(msg.chat.id, `Спасибо за подписку, ${msg.from.first_name}!`);
    }
  });
  

export default bot
