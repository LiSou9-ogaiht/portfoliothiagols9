document.querySelector("#btn-novo").addEventListener("click", artigoAdicionar);
const listaOn = document.querySelector("#lista-on ul");
const listaOff = document.querySelector("#lista-off ul");
const artigoInput = document.querySelector("#artigo");
const qtdInput = document.querySelector("#qtd");
const artigoForm = document.querySelector("form");
 
function artigoAdicionar() {
if (artigoInput.value != "") {
    const artigo = document.createElement("li");

    artigo.innerText = artigoInput.value;
    artigo.innerText += " : " + qtdInput.value;
    
    artigo.addEventListener("click", artigoComprar);
 
    listaOn.appendChild(artigo);
    artigoForm.reset();    
    }

    
    artigoInput.focus();
}
 
function artigoComprar() {
    const lista = this.parentNode.parentNode.id;
    if (lista == "lista-on") {
        listaOff.appendChild(this);
    } else {
        listaOn.appendChild(this);
    }
}

