import TeleBot from "telebot"

const bot = new TeleBot(process.env.TELEGRAM_BOT_TOKEN)

// Обрабатываем событие start
bot.on(['/start'], (msg) => {
  // Отправляем запрос на подтверждение подписки на канал
  bot.api.call('restrictChatMember', {
    chat_id: '-1001380460033',
    user_id: msg.from.id,
    can_send_messages: true,
    can_send_media_messages: true,
    can_send_other_messages: true,
    can_add_web_page_previews: true,
    until_date: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 365 // На год вперед
  }).then(() => {
    // Пишем сообщение об успешной подписке
    bot.sendMessage(msg.chat.id, 'Вы успешно подписались на наш канал!');
  }).catch((error) => {
    console.error(error);
    bot.sendMessage(msg.chat.id, 'Произошла ошибка при подписке. Попробуйте позже.');
  });
});
  

export default bot
