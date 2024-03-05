// =-=-=-=-=-=-=-= Questão 1 =-=-=-=-=-=-=-=
const dado = document.getElementById("dado");
const lista = document.getElementById("lista");
const vet = [];

function adicionar() {
  event.preventDefault();
  vet.push(dado.value);
  vet.sort();
  document.getElementById("form").reset();
  mostrar();
}

function mostrar() {
  lista.innerHTML = "";
  for (let i = 0; i < vet.length; i++) {
    console.log(vet[i]);
    lista.innerHTML += `<li class="conteudoLi">${vet[i]}</li>`;
  }
}
