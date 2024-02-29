window.addEventListener("load", function () {
  elemekElerese1();
  elemekElerese2();
  elemekElerese3();
  elemekElerese4();
});

function elemekElerese1() {
  const ELEM = document.querySelectorAll("#f1")[0];
  console.log(ELEM.innerHTML);
}
function elemekElerese2() {
  /**Ide jön az 2.  feladat */
  const ELEM2 = document.querySelectorAll("#ide")[0];
  console.log(ELEM2);
  ELEM2.innerHTML = "<p>Jó reggelt!</p>";
}
function elemekElerese3() {
  /**Ide jön az 3. feladat */
  const ELEM2 = document.querySelectorAll(".ide")[0];
  console.log(ELEM2);
  ELEM2.innerHTML = "<p>Jó reggelt!</p>";
}
function elemekElerese4() {
  /**Ide jön az 4. feladat */
  const LISTA = document.getElementsByClassName("megjelenito")[0];
    console.log(LISTA)
  let txt = "<div >"
  for (let index = 0; index < 5; index++) {
    txt += `<p> ${[Math.floor(Math.random()*21+10)]} </p>`;
  }
  txt += "</div>"
  LISTA.innerHTML= txt
  console.log(txt);
}
