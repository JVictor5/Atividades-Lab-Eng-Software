// =-=-=-=-=-=-=-= Questão 1 =-=-=-=-=-=-=-=

function q1() {
  let n = prompt("Digite um dado: ", "");
  let local = document.getElementById("resultadoQ1");

  if (confirm("Quer ver o tipo do dado?")) {
    if (parseInt(n) == n) {
      local.innerHTML = "Seu dado e um numero";
    } else if (parseFloat(n) == n) {
      local.innerHTML = "Seu dado e um numero";
    } else {
      local.innerHTML = "Seu dado e uma string";
    }
  } else {
    local.innerHTML = "Obrigado por visitar esta página";
  }
}

// =-=-=-=-=-=-=-= Questão 2 =-=-=-=-=-=-=-=
function q2() {
  let n = prompt("Digite um número inteiro positivo:", "");
  let numero = parseInt(n);

  if (!isNaN(numero) && numero > 0) {
    let ePrimo = true;
    if (numero <= 1) {
      ePrimo = false;
    } else {
      for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
          ePrimo = false;
          break;
        }
      }
    }
    if (ePrimo) {
      alert("O número " + numero + " é primo.");
    } else {
      alert("O número " + numero + " não é primo.");
    }
  } else {
    alert("Por favor, digite um número inteiro positivo válido.");
  }
}

// =-=-=-=-=-=-=-= Questão 3 =-=-=-=-=-=-=-=
function q3() {
  let n = prompt("Digite um numero: ", "");
  if (!isNaN(n) && n > 0) {
    num = n % 2;

    if (num == 0) {
      alert("Numero e par");
    } else {
      alert("Numero e impar");
    }
  } else {
    alert("Por favor, digite um número inteiro positivo válido.");
  }
}

// =-=-=-=-=-=-=-= Questão 4 =-=-=-=-=-=-=-=
function q4() {
  let n = prompt("Digite um numero: " + "");
  num = n;
  if (!isNaN(n) && n >= 0) {
    for (var i = n - 1; i >= 1; i--) {
      n *= i;
    }
    alert("Fatorial do numero " + num + " é: " + n);
  } else {
    alert("Por favor, digite um número inteiro positivo válido.");
  }
}
