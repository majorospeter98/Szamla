const firebaseConfig = {
  apiKey: "AIzaSyA50meeZYrXld4SlI5123_RCaGz12ysJ20",
  authDomain: "form-7be29.firebaseapp.com",
  databaseURL: "https://form-7be29-default-rtdb.firebaseio.com",
  projectId: "form-7be29",
  storageBucket: "form-7be29.appspot.com",
  messagingSenderId: "439039098640",
  appId: "1:439039098640:web:4782ceb0baae4c150daf95",
  measurementId: "G-3ZMD12N4BB",
};
firebase.initializeApp(firebaseConfig);
const connect = firebase.database().ref("register");
let nev = document.querySelector("#nev");
const fnev = document.querySelector("#fnev");
const pw = document.querySelector("#pw");
const form = document.querySelector("#registerform");
const register = document.querySelector(".register");
let localprefix = "Register";
let localkey = `${localprefix}-registered`;
let errorlist = document.querySelector(".errorlist");
let users = [];
form.addEventListener("input", (e) => {
  let error1 = [];
  let error2 = [];
  let error3 = [];

  errorlist.innerHTML = "";
  const value1 = document.getElementById("nev").value;
  const value2 = document.getElementById("fnev").value;
let value3=document.getElementById("pw").value;
let numberorno=/\d/;
let tesztnumber=numberorno.test(value3)
  if (nev.value.length > 7) {
    register.removeAttribute("disabled");
  } else {
    register.setAttribute("disabled", "");
    error1.push("Túl rövid a név");
  }
 
  if (fnev.value.length > 7) {
    register.removeAttribute("disabled");
  } else {
    register.setAttribute("disabled", "");
    error2.push("Túl rövid a felhasználónév");
  }
  if (value1 != value2) {
    register.removeAttribute("disabled");
  } else {
    register.setAttribute("disabled", "");
    error3.push("Nem lehet egyenlő a felhasználónév és a név.");
  }
  if (pw.value.length > 7) {
    register.removeAttribute("disabled");
  } else {
    register.setAttribute("disabled", "");
    error3.push("Túl rövid a jelszó");
  }
  const s = [...pw.value];
  let s2 = s.some((element) => {
    return element === element.toUpperCase();
  });
  if (s2 === true && tesztnumber === true) {
    register.removeAttribute("disabled");
  } else {
    register.setAttribute("disabled", "");
    error3.push("Nagybetűt vagy számot is tartalmaznia kell a jelszónak");
  }
  error2.forEach((errortwo) => {
    let div = document.createElement("div");
    div.innerHTML = errortwo;
    errorlist.appendChild(div);
  });
  error1.forEach((errorone) => {
    let div = document.createElement("div");
    div.innerHTML = errorone;
    errorlist.appendChild(div);
  });
  error3.forEach((errorthree) => {
    let div = document.createElement("div");
    div.innerHTML = errorthree;
    errorlist.appendChild(div);
  });
  if (error1.length > 0 || error2.length > 0 || error3.length > 0) {
    register.setAttribute("disabled", "");
  } else {
  }
});
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let user1 = nev.value;
  let user2 = fnev.value;
  let user3 = pw.value;
  let regusers = {
    regnev: user1,
    regfnev: user2,
    regpw: user3,
    regdate: "",
  };
  let teszt = localStorage.getItem(localkey);
  let teszt2 = JSON.parse(teszt);
  if (teszt2 == null) {
    teszt2 = [];
  }
  let finduser = teszt2.find((user) => {
    return user.regfnev === fnev.value;
  })
   if (finduser != undefined) {
    window.alert("Van már ilyen felhasználónév");
  } else {
    alert("Sikeres regisztráció");
    teszt2.push(regusers);
    localStorage.setItem(localkey, JSON.stringify(teszt2));
        window.location.href = "../login/login.html";
        connect.push(teszt2);
  }
});
