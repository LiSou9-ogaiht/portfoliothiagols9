const busca = document.getElementById("searchBar");
const filtro = document.getElementById("categoryFilter");
const livros = document.querySelectorAll(".cartao-livro");

// 🔎 Busca + filtro categoria
function filtrar() {
    const texto = busca.value.toLowerCase();
    const categoria = filtro.value;

    livros.forEach(livro => {
        const titulo = livro.querySelector("h3").textContent.toLowerCase();
        const autor = livro.querySelector("p").textContent.toLowerCase();
        const cat = livro.dataset.categoria;

        const matchTexto = titulo.includes(texto) || autor.includes(texto);
        const matchCategoria = categoria === "todos" || categoria === cat;

        livro.style.display = (matchTexto && matchCategoria) ? "block" : "none";
    });
}

busca.addEventListener("input", filtrar);
filtro.addEventListener("change", filtrar);

// 🌙 Modo escuro
document.getElementById("toggleDark").addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

// 🎠 Carrossel
const lista = document.getElementById("bookList");

document.getElementById("next").onclick = () => {
    lista.scrollBy({ left: 300, behavior: "smooth" });
};

document.getElementById("prev").onclick = () => {
    lista.scrollBy({ left: -300, behavior: "smooth" });
};
