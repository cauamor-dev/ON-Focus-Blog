document.addEventListener('DOMContentLoaded', async () => {
    const id = window.location.hash.replace('#', '');
    const container = document.getElementById('noticia-detalhe');

    try {
        const response = await fetch('noticias.json');
        const noticias = await response.json();
        const noticia = noticias.find(n => n.id == id);

        if (noticia) {
            container.innerHTML = `
                <div style="background:#fff3cd;color:#856404;padding:16px 20px;border-radius:8px;border:1px solid #ffeeba;margin-bottom:24px;font-weight:600;font-size:1.1em;">
                    🚧 Em construção: O conteúdo completo estará disponível em breve!
                </div>
                <h1 style="font-family:'Bebas Neue',sans-serif;font-size:2.2em;color:#ff8c00;">${noticia.titulo}</h1>
                <img src="${noticia.imagem}" alt="${noticia.titulo}" style="max-width:100%;border-radius:12px;margin:24px 0;">
                <div style="margin-bottom:18px;">
                    ${noticia.tags.map(tag => `<span class="tag" style="margin-right:8px;">${tag}</span>`).join(' ')}
                </div>
                <p style="font-size:1.1em;line-height:1.7;">${noticia.conteudo}</p>
            `;
        } else {
            container.innerHTML = '<p>Notícia não encontrada.</p>';
        }
    } catch (e) {
        container.innerHTML = '<p>Erro ao carregar notícia.</p>';
    }
}); 