window.addEventListener("load", function () {
  elemekElerese1();
  elemekElerese2();
  elemekElerese3();
  elemekElerese4();
  elemekFormazasa();
  esemenyKezeles1();
  esemenyKezeles2();
  esemenyKezeles3();
  esemenyKezeles4();
});

function elemekElerese1() {
  /*const ELEM = document.querySelectorAll("#f1")[0];
    console.log(ELEM.innerHTML);*/

    const elemELEM = $("#f1");
    console.log(elemELEM);
}
function elemekElerese2() {
  /**Ide jön az 2.  feladat 
    const ELEM2 = document.querySelectorAll("#ide")[0];
    console.log(ELEM2);
    ELEM2.innerHTML = "<p>Jó reggelt!</p>";*/
  
    const elemjoELEM = $("#ide");
    elemjoELEM.html("<p>Jó reggelt!</p>")

}
function elemekElerese3() {
  /**Ide jön az 3. feladat 
    const ELEM2 = document.querySelectorAll(".ide")[0];
    console.log(ELEM2);
    ELEM2.innerHTML = "<p>Jó reggelt!</p>";*/

    const elemjo2ELEM = $(".ide");
    elemjo2ELEM.html("<p>Jó reggelt!</p>")
}
function elemekElerese4() {
  /**Ide jön az 4. feladat 
    const LISTA = document.getElementById("lista");
    console.log(LISTA);
    let txt = "<ul>";
    for (let index = 0; index < 5; index++) {
      txt += `<li> ${[Math.floor(Math.random() * 21 + 10)]} </li>`;
    }
    txt += "</ul>";
    LISTA.innerHTML = txt;
    console.log(txt);*/

    const LISTA = $("#lista");
    let txt = "<ul>";
    for (let index = 0; index < 5; index++) {
      txt += `<li> ${[Math.floor(Math.random() * 21 + 10)]} </li>`;
    }
    txt += "</ul>";
    LISTA.html(txt);

}
function elemekFormazasa() {
  /*const FORMAZAS = document.querySelector("#lista")[0];
    FORMAZAS.classList.add(".formazott")*/

    const FORMAZAS = $("#lista")
    FORMAZAS.addClass("formazott")
}
function esemenyKezeles1() {
  /*const ESEMENY = document.querySelector("#lista")[0];
    ESEMENY.addEventListener("esemeny", fvenynev)*/

    const ESEMENY = $("#lista")
    ESEMENY.on("click", function(){
        const ELEM2 = $(".kattintasutan")
        ELEM2.eq(0).html(ESEMENY.eq(0).html())
    });
    
}
function esemenyKezeles2() {
  /*const ESEMENY2 = document.querySelectorAll(".feladat")[0];
    ESEMENY2.innerHTML = "<button>OK</button>";
    ESEMENY2.addEventListener("esemeny", fvenynev)*/
    const ESEMENY2 = $(".feladat")
    ELEM3.eq(0).html("<button>OK</button>")
    ESEMENY2.on("click", function(){
        const ELEM3 = $(".kattintasutan")
        ELEM3.eq(0).html(ESEMENY2.eq(0).html())
    });
}
function esemenyKezeles3() {}
function esemenyKezeles4() {}
