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
  let errors=[];
  errorlist.innerHTML = "";
  const value1 = document.getElementById("nev").value;
  const value2 = document.getElementById("fnev").value;
let value3=document.getElementById("pw").value;
  if (nev.value.length < 7) {
   errors.push("Túl rövid a név")
   }
    if (fnev.value.length < 7 ) {
    errors.push("Túl rövid a felhasználónév");
   }
  if (value1 === value2) {
    errors.push("Nem lehet egyenlő a felhasználónév és a név.");
  }
  if (pw.value.length < 7) {
    errors.push("Túl rövid a jelszó");
  } 
  const upper = [...pw.value];
  let uppercheck = upper.some((element) => {
    return element === element.toUpperCase();
  });
  if (uppercheck === true) {
      } else {
    errors.push("Nagybetű/szám kötelező a jelszóban");
  }
  errors.forEach((errortwo) => {
    let div = document.createElement("div");
    div.innerHTML = errortwo;
    errorlist.appendChild(div);
  });
   if (errors.length > 0 ) {
    register.setAttribute("disabled", "");
  } else {
    register.removeAttribute("disabled");
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
  let getregister = localStorage.getItem(localkey);
  let register = JSON.parse(getregister);
  if (register == null) {
    register = [];
  }
  let finduser = register.find((user) => {
    return user.regfnev === fnev.value;
  })
   if (finduser != undefined) {
    window.alert("Van már ilyen felhasználónév");
  } else {
    alert("Sikeres regisztráció");
    register.push(regusers);
    localStorage.setItem(localkey, JSON.stringify(register));
        window.location.href = "../login/index.html";
        connect.push(register);
  }
});
