const felh = document.querySelector("#felh");
const password = document.querySelector("#pass");
const form = document.querySelector("#text");
const register = document.querySelector(".teszt");
const pass = document.querySelector(".pass");
const localprefix = "Register";
const localkey = `${localprefix}-registered`;
const localkey2 = `${localprefix}-currentuser`;
const check = document.querySelector(".check");
let counter = 0;
//captcha//
let submitButton = document.getElementById("submit-button");
let userInput = document.getElementById("user-input");
let canvas = document.getElementById("canvas");
let reloadButton = document.getElementById("reload-button");
let text = "";


   
form.addEventListener("input", (e) => {
  let error1 = [];
  let error2 = [];
  let checkerror = [];
  pass.innerHTML = "";
  if (felh.value.length > 7) {
    register.removeAttribute("disabled");
  } else {
    error1.push("Nem elég hosszú a felhasználónév");
  }
  if (password.value.length > 7) {
    register.removeAttribute("disabled");
  } else {
    error2.push("Túl rövid a jelszó");
  }
  const s = [...password.value];
  let s2 = s.some((element) => {
    return element === element.toUpperCase();
  });
  if (s2 === true) {
    register.removeAttribute("disabled");
  } else {
    error2.push("Nagybetű/szám kötelező a jelszóban");
  }
  error2.forEach((errortwo) => {
    const div = document.createElement("div");
    div.innerHTML = errortwo;
    pass.appendChild(div);
  });
  error1.forEach((errorone) => {
    const div = document.createElement("div");
    div.innerHTML = errorone;
    pass.appendChild(div);
  });
  if (error1.length > 0 || error2.length > 0) {
    register.setAttribute("disabled", "");
  }
});
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let teszt = localStorage.getItem(localkey);
  let teszt2 = JSON.parse(teszt);
  let index = teszt2.findIndex((element) => {
    return element.regfnev === felh.value;
  });
   if (index == -1 || teszt2[index].regpw != password.value) {
    alert("Hibás jelszó/felhasználónév");
    counter++;
      } else {
    let currentfelh = teszt2[index].regfnev;
    teszt2[index].regdate = new Date().toLocaleString().replace(",", "");
    localStorage.setItem(localkey, JSON.stringify(teszt2));
    localStorage.setItem(localkey2, JSON.stringify(currentfelh));
    window.location.href = "../main/main.html";
  }
  if(counter >2){
    check.classList.add("show");
    const textGenerator = () => {
      let generatedText = "";
      /* String.fromCharCode gives ASCII value from a given number */
      // total 9 letters hence loop of 3
      for (let i = 0; i < 3; i++) {
        //65-90 numbers are capital letters
        generatedText += String.fromCharCode(randomNumber(65, 90));
        //97-122 are small letters
        generatedText += String.fromCharCode(randomNumber(97, 122));
        //48-57 are numbers from 0-9
        generatedText += String.fromCharCode(randomNumber(48, 57));
      }
      return generatedText;
    };
    //Generate random numbers between a given range
    const randomNumber = (min, max) =>
      Math.floor(Math.random() * (max - min + 1) + min);
    //Canvas part
    function drawStringOnCanvas(string) {
      //The getContext() function returns the drawing context that has all the drawing properties and functions needed to draw on canvas
      let ctx = canvas.getContext("2d");
      //clear canvas
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      //array of text color
      const textColors = ["black", "black"];
      //space between letters
      const letterSpace = 150 / string.length;
      //loop through string
      for (let i = 0; i < string.length; i++) {
        //Define initial space on X axis
        const xInitialSpace = 20;
        //Set font for canvas element
        ctx.font = "26px Roboto Mono";
        //set text color
        ctx.fillStyle = textColors[randomNumber(0, 1)];
        ctx.fillText(
          string[i],
          xInitialSpace + i * letterSpace,
          randomNumber(25, 40),
          100
        );
      }
    }
    //Initial Function
    function triggerFunction() {
      
      //clear Input
      userInput.value = "";
      text = textGenerator();
         //Randomize the text so that everytime the position of numbers and small letters is random
      text = [...text].sort(() => Math.random() - 0.5).join("");
      drawStringOnCanvas(text);
        }
    //call triggerFunction for reload button
    reloadButton.addEventListener("click", triggerFunction);
    //call triggerFunction when page loads
    window.onload = () => triggerFunction();
 window.onsubmit= () => triggerFunction();
    //When user clicks on submit
    register.addEventListener("click", () => {
      //check if user input  == generated text
      let checkerror = [""];
      pass.innerHTML = "";
      if (userInput.value.length < 1) {
        register.setAttribute("disabled", "");
      }
      if (userInput.value === text) {
      } else {
        checkerror.push("Hibás captcha ellenőrzés!");
        checkerror.forEach((check) => {
          const div = document.createElement("div");
          div.innerHTML = check;
          pass.appendChild(div);
          register.setAttribute("disabled", "");
        });
      }
    });
  }
   
  
});
