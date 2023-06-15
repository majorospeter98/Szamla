const localprefix = "Register";
const localkey = `${localprefix}-szamla`;
const table = document.querySelector("#table");
let szamlak = localStorage.getItem(localkey);
let szamlainfos = JSON.parse(szamlak);
if (szamlainfos == undefined) {
  szamlainfos = [];
}
for (let i = 0; i < szamlainfos.length; i++) {
  table.innerHTML +=
    "<tr><td>" +
    szamlainfos[i]["vasarlonev"] +
    "</td><td>" +
    szamlainfos[i]["kiallitasdatum"] +
    "</td><td>" +
    szamlainfos[i]["esedekessegdatum"] +
    "</td><td>" +
    szamlainfos[i]["tetelnev"] +
    "</td><td>" +
    szamlainfos[i]["komment"] +
    "</td><td>" +
    szamlainfos[i]["ar"] +
    "</tr>";
}
table.addEventListener("click", (e) => {
  const target = e.target.matches("td");
  window.location.href = "../szamlaview/szamlaview.html";
});
