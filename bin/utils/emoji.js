const emojis = [
  '🌟',
  '🚀',
  '🎯',
  '💪',
  '🔥',
  '🏆',
  '🥇',
  '🌈',
  '🙌',
  '🤩',
  '💥',
  '🎉',
  '✨',
  '🌅',
  '🏅',
  '⚡',
  '⭐',
  '🌻',
  '🌠',
  '📈',
  '🏔️',
  '🌄',
  '🛡️',
  '💎',
  '🤝',
  '🏹',
  '📝',
  '🔑',
  '🧠',
  '📣',
  '💫',
];

function getRandomEmote() {
  return emojis[Math.floor(Math.random() * emojis.length)];
}

module.exports = {
  getRandomEmote,
  emojis,
};
