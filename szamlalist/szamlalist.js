const localprefix = "Register";
const localkey = `${localprefix}-szamla`;
const table = document.querySelector("#table");
let teszt = localStorage.getItem(localkey);
let teszt2 = JSON.parse(teszt);
if (teszt2 == undefined) {
  teszt2 = [];
}
for (let i = 0; i < teszt2.length; i++) {
  table.innerHTML +=
    "<tr><td>" +
    teszt2[i]["vasarlonev"] +
    "</td><td>" +
    teszt2[i]["kiallitasdatum"] +
    "</td><td>" +
    teszt2[i]["esedekessegdatum"] +
    "</td><td>" +
    teszt2[i]["tetelnev"] +
    "</td><td>" +
    teszt2[i]["komment"] +
    "</td><td>" +
    teszt2[i]["ar"] +
    "</tr>";
}
table.addEventListener("click", (e) => {
  const target = e.target.matches("td");
  window.location.href = "../szamlaview/szamlaview.html";
});
