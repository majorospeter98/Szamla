let vasarlo = document.querySelector("#vasarlonev");
let kidatum = document.querySelector("#kidatum");
let esdatum = document.querySelector("#esdatum");
let tetelnev = document.querySelector("#tetelnev");
let komment = document.querySelector("#komment");
let ar = document.querySelector("#ar");
let form = document.querySelector("#form");
let submit = document.querySelector(".submit");
let errorlist = document.querySelector(".errorlist");
const localprefix = "Register";
const localkey = `${localprefix}-szamla`;
const firebaseConfig = {
  apiKey: "AIzaSyA50meeZYrXld4SlI5123_RCaGz12ysJ20",
  authDomain: "form-7be29.firebaseapp.com",
  databaseURL: "https://form-7be29-default-rtdb.firebaseio.com",
  projectId: "form-7be29",
  storageBucket: "form-7be29.appspot.com",
  messagingSenderId: "439039098640",
  appId: "1:439039098640:web:60c5c0753210d9430daf95",
  measurementId: "G-DK48VHYYQQ",
};
firebase.initializeApp(firebaseConfig);
const connect = firebase.database().ref("szamla");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let errors = [];
  errorlist.innerHTML = "";

  if (vasarlonev.value.length < 7) {
    errors.push("Túl Rövid a vásarlónév");
  }
  if (kidatum.value.length < 7) {
    errors.push("Túl Rövid a kiállítás dátuma.");
  }
  if (esdatum.value.length < 7) {
    errors.push("Túl Rövid az esedékesség dátuma");
  }
  if (tetelnev.value.length < 7) {
    errors.push("Túl Rövid a tétel neve");
  }
  if (komment.value.length < 7) {
    errors.push("Túl Rövid a komment");
  }
  errors.forEach((error) => {
    let div = document.createElement("div");
    div.innerHTML = error;
    errorlist.appendChild(div);
  });
  if (errors.length < 1) {
    alert("Sikeres mentés");
    szamla1 = vasarlo.value;
    szamla2 = kidatum.value;
    szamla3 = esdatum.value;
    szamla4 = tetelnev.value;
    szamla5 = komment.value;
    szamla6 = ar.value;
    let szamlauser = {
      vasarlonev: szamla1,
      kiallitasdatum: szamla2,
      esedekessegdatum: szamla3,
      tetelnev: szamla4,
      komment: szamla5,
      ar: szamla6,
    };
    let teszt = localStorage.getItem(localkey);
    let teszt2 = JSON.parse(teszt);
    if (teszt2 == null) {
      teszt2 = [];
    }
    teszt2.push(szamlauser);
    connect.push(teszt2);
    localStorage.setItem(localkey, JSON.stringify(teszt2));
  }
});
