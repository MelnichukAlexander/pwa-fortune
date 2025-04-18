const fortunes = [
  "Да, без сомнений!",
  "Лучше не сейчас.",
  "Скоро всё станет ясно.",
  "Не рассчитывай на это.",
  "Абсолютно!",
  "Пока туманно. Попробуй снова.",
  "Всё зависит от тебя.",
  "Шанс велик. Действуй!"
];

function getFortune() {
  const box = document.getElementById("fortune-box");
  const random = Math.floor(Math.random() * fortunes.length);
  box.textContent = fortunes[random];
}

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js');
  });
}
