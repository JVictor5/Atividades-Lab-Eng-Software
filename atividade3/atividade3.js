// =-=-=-=-=-=-=-= Questão 1 =-=-=-=-=-=-=-=

// =-=-=-=-=-=-=-= Questão 2 =-=-=-=-=-=-=-=
function horaRelogio() {
  let dateToday = new Date();
  let hr = dateToday.getHours();
  let min = dateToday.getMinutes();
  let s = dateToday.getSeconds();

  if (hr < 10) hr = "0" + hr;
  if (min < 10) min = "0" + min;
  if (s < 10) s = "0" + s;

  document.getElementById("horas").textContent = hr;
  document.getElementById("minutos").textContent = min;
  document.getElementById("segundos").textContent = s;

  setTimeout(horaRelogio, 1000);
}
horaRelogio();
// =-=-=-=-=-=-=-= Questão 3 =-=-=-=-=-=-=-=
function verificarPalindromo() {
  const texto = document
    .getElementById("campoTexto")
    .value.toLowerCase()
    .replace(/[^a-z]/g, "");

  const textoInvertido = texto.split("").reverse().join("");

  if (texto === textoInvertido) {
    alert("É um palíndromo!");
  } else {
    alert("Não é um palíndromo.");
  }
}
