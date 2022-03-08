document.addEventListener("DOMContentLoaded", onkoKirjautunut);


function onkoKirjautunut() {
    if (localStorage.getItem("kirjautunut") === 'kylla') {
        document.getElementById('tervetulo_tekti').textContent += localStorage.getItem("nimi");
        document.getElementById("kirjautumis_lomake").style.display = "none";

    } else {

        document.getElementById("kirjautumis_lomake").style.display = "table";
        document.getElementById("uloskirjautumis_lomake").style.display = "none";
    }
}
function kirjaudu() {
    localStorage.setItem("nimi", document.getElementById("nimi").value);
    localStorage.setItem("kirjautunut", "kylla");
}
function kirjauduUlos() {
localStorage.removeItem("nimi");
localStorage.setItem("kirjautunut", "ei");
}