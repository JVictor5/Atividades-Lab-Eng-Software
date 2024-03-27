let countMen = 0;
let countWomen = 0;
let countTotal = 0;

window.onload = function () {
  loadPage();
};

function reset() {
  countMen = 0;
  countWomen = 0;
  countTotal = 0;
  loadPage();
}

function updateCounters(gender, action) {
  if (gender === "men") {
    countMen += action === "add" ? 1 : -1;
  } else if (gender === "women") {
    countWomen += action === "add" ? 1 : -1;
  }
  countTotal += action === "add" ? 1 : -1;
  loadPage();
}

function loadPage() {
  const container = document.getElementById("container");
  container.innerHTML = "";

  const mainContainer = document.createElement("div");
  mainContainer.setAttribute(
    "style",
    "width: 70%; display: grid; grid-template-columns: 1fr 1fr; justify-content: center;"
  );

  const containerTotal = document.createElement("div");
  containerTotal.setAttribute(
    "style",
    "margin: auto; padding-left: 90px; display: flex; flex-direction: column; align-items: center; grid-column: span 3;"
  );

  const buttonReset = document.createElement("img");
  buttonReset.src = "https://cdn-icons-png.freepik.com/512/2618/2618245.png";
  buttonReset.onclick = reset;
  buttonReset.setAttribute(
    "style",
    "margin-right: 30px; width: 60px; height: 60px;"
  );

  const title = document.createElement("h1");
  title.textContent = "Total";

  const counterTotalArea = document.createElement("div");
  counterTotalArea.textContent = countTotal;
  counterTotalArea.setAttribute(
    "style",
    "padding: 10px 40px; border: solid; border-radius: 10px; font-size: 25px;"
  );

  containerTotal.appendChild(title);
  containerTotal.appendChild(counterTotalArea);
  containerTotal.appendChild(buttonReset);

  const menSection = createGenderSection("Men", "men");
  const womenSection = createGenderSection("Women", "women");
  mainContainer.appendChild(containerTotal);
  mainContainer.appendChild(menSection);

  const spaceDiv = document.createElement("div");
  spaceDiv.style.width = "200px";
  mainContainer.appendChild(spaceDiv);

  mainContainer.appendChild(womenSection);

  container.appendChild(mainContainer);
}

function createGenderSection(titleText, gender) {
  const section = document.createElement("div");
  section.className = "gender-section";
  section.setAttribute("style", "width: 200px");

  const title = document.createElement("h2");
  title.textContent = titleText;

  const image = document.createElement("img");
  image.src =
    gender === "men"
      ? "https://cdn.icon-icons.com/icons2/2643/PNG/512/male_man_people_person_avatar_white_tone_icon_159363.png"
      : "https://i.pinimg.com/originals/a6/58/32/a65832155622ac173337874f02b218fb.png";
  image.setAttribute("style", "width: 200px; height: 200px;");

  const buttonAdd = document.createElement("img");
  buttonAdd.src =
    "https://static.vecteezy.com/system/resources/previews/000/582/976/original/button-plus-icon-vector.jpg";
  buttonAdd.onclick = () => updateCounters(gender, "add");
  buttonAdd.setAttribute("style", "width: 50px; height: 50px;");

  const buttonRemove = document.createElement("img");
  buttonRemove.src = "https://static.thenounproject.com/png/261368-200.png";
  buttonRemove.onclick = () => updateCounters(gender, "remove");
  buttonRemove.setAttribute("style", "width: 35px; height: 35px;");

  const counterArea = document.createElement("div");
  counterArea.textContent = gender === "men" ? countMen : countWomen;

  const buttonContainer = document.createElement("div");
  buttonContainer.className = "button-container";
  buttonContainer.style.padding = "10px";
  buttonContainer.style.display = "flex";
  buttonContainer.style.alignItems = "center";

  buttonContainer.appendChild(buttonAdd);
  buttonContainer.appendChild(buttonRemove);

  section.appendChild(title);
  section.appendChild(image);
  section.appendChild(buttonContainer);
  section.appendChild(counterArea);

  return section;
}
