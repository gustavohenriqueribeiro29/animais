document.addEventListener('DOMContentLoaded', () => {
  // --- LÓGICA DO BOTÃO DE CURTIDA ---
  const likeBtn = document.getElementById('like-btn');
  const likeCountSpan = document.getElementById('like-count');
  const likeTextSpan = document.getElementById('like-text');

  let isLiked = false;
  let likes = 0; // Inicia do zero conforme solicitado

  likeBtn.addEventListener('click', () => {
    if (!isLiked) {
      // Se não curtiu ainda, incrementa e curte
      likes++;
      isLiked = true;
      likeBtn.classList.add('liked');
      likeTextSpan.textContent = 'Curtido!';
    } else {
      // Se já estava curtido, ao clicar novamente "descurte"
      likes--;
      isLiked = false;
      likeBtn.classList.remove('liked');
      likeTextSpan.textContent = 'Curtir';
    }

    // Atualiza o texto da quantidade no HTML
    likeCountSpan.textContent = likes;
  });


  // --- LÓGICA DO MODO CLARO / ESCURO ---
  const themeToggleBtn = document.getElementById('theme-toggle');
  const body = document.body;

  themeToggleBtn.addEventListener('click', () => {
    // Alterna a classe 'dark-mode' no elemento <body>
    body.classList.toggle('dark-mode');

    // Altera o ícone e texto do botão de acordo com o tema atual
    if (body.classList.contains('dark-mode')) {
      themeToggleBtn.textContent = '☀️ Modo Claro';
    } else {
      themeToggleBtn.textContent = '🌙 Modo Escuro';
    }
  });
});