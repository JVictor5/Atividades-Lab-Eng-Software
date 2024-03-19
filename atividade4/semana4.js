document.querySelectorAll('input[type="radio"]').forEach(function (radio) {
  radio.addEventListener("change", function () {
    if (document.getElementById("aluno").checked) {
      document.getElementById("alunos").style.display = "block";
      document.getElementById("professores").style.display = "none";
    } else if (document.getElementById("professor").checked) {
      document.getElementById("alunos").style.display = "none";
      document.getElementById("professores").style.display = "block";
    }
  });
});

function Pessoa() {
  var nome;
  var email;
  var data_nasc;
  var tele_fic;
  var tele_celu;

  this.setNome = function (vNome) {
    this.nome = vNome;
  };
  this.getNome = function () {
    return this.nome;
  };

  this.setEmail = function (vEmail) {
    this.email = vEmail;
  };
  this.getEmail = function () {
    return this.email;
  };

  this.setData = function (vData) {
    this.data_nasc = vData;
  };
  this.getData = function () {
    return this.data_nasc;
  };

  this.setTeleF = function (vTeleF) {
    this.tele_fic = vTeleF;
  };
  this.getTeleF = function () {
    return this.tele_fic;
  };

  this.setTeleC = function (vTeleC) {
    this.tele_celu = vTeleC;
  };
  this.getTeleC = function () {
    return this.tele_celu;
  };
}

function Aluno() {
  Pessoa.call(this);

  var curso;

  this.setCurso = function (vCurso) {
    this.curso = vCurso;
  };
  this.getCurso = function () {
    return this.curso;
  };
}

function Professor() {
  Pessoa.call(this);

  var area;
  var lattes;

  this.setArea = function (vArea) {
    this.area = vArea;
  };
  this.getArea = function () {
    return this.area;
  };

  this.setLattes = function (vLattes) {
    this.lattes = vLattes;
  };
  this.getLattes = function () {
    return this.lattes;
  };
}

function main() {
  event.preventDefault();

  if (document.getElementById("aluno").checked) {
    var aluno = new Aluno();
    aluno.setNome(document.getElementById("nome").value);
    aluno.setEmail(document.getElementById("email").value);
    aluno.setData(document.getElementById("data_nascimento").value);
    aluno.setTeleF(document.getElementById("telefone_fixo").value);
    aluno.setTeleC(document.getElementById("celular").value);
    aluno.setCurso(document.getElementById("curso").value);
    console.log(aluno);
    adicionarLinhaTabelaAlunos(aluno);
  } else if (document.getElementById("professor").checked) {
    var professor = new Professor();
    professor.setNome(document.getElementById("nome").value);
    professor.setEmail(document.getElementById("email").value);
    professor.setData(document.getElementById("data_nascimento").value);
    professor.setTeleF(document.getElementById("telefone_fixo").value);
    professor.setTeleC(document.getElementById("celular").value);
    professor.setArea(document.getElementById("area_atuacaos").value);
    professor.setLattes(document.getElementById("lattes").value);
    adicionarLinhaTabelaProfessores(professor);
  }

  limparCampos();
}

function adicionarLinhaTabelaAlunos(aluno) {
  var linha = $("<tr>");
  linha.append($("<td>").text(aluno.getNome()));
  linha.append($("<td>").text(aluno.getEmail()));
  linha.append($("<td>").text(aluno.getData()));
  linha.append($("<td>").text(aluno.getTeleF()));
  linha.append($("<td>").text(aluno.getTeleC()));
  linha.append($("<td>").text(aluno.getCurso()));

  $("#corpo-tabela-alunos").append(linha);
}

function adicionarLinhaTabelaProfessores(professor) {
  var linha = $("<tr>");
  linha.append($("<td>").text(professor.getNome()));
  linha.append($("<td>").text(professor.getEmail()));
  linha.append($("<td>").text(professor.getData()));
  linha.append($("<td>").text(professor.getTeleF()));
  linha.append($("<td>").text(professor.getTeleC()));
  linha.append($("<td>").text(professor.getArea()));
  linha.append($("<td>").text(professor.getLattes()));

  $("#corpo-tabela-professores").append(linha);
}

function limparCampos() {
  document.getElementById("nome").value = "";
  document.getElementById("email").value = "";
  document.getElementById("data_nascimento").value = "";
  document.getElementById("telefone_fixo").value = "";
  document.getElementById("celular").value = "";
  document.getElementById("matricula").value = "";
  document.getElementById("curso").value = "";
  document.getElementById("lattes").value = "";
  document.getElementById("area_atuacao").value = "";
}

$(document).ready(function () {
  $("#formContainer, #tablesContainer").hide();

  $("#btnAdicionar").click(function () {
    $("#formContainer").show();
    $("#tablesContainer").hide();
  });

  $("#btnListar").click(function () {
    $("#formContainer").hide();
    $("#tablesContainer").show();
  });
});
