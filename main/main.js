let localprefix= "Register";
let localkey= `${localprefix}-registered`;
const localkey2= `${localprefix}-currentuser`;
let teszt=  document.querySelector(".teszt");
let currentuserdata=localStorage.getItem(localkey);
let data2=JSON.parse(currentuserdata)
let currentuser=localStorage.getItem(localkey2);
let currentuser2= JSON.parse(currentuser);
let data3=data2.find(element => {
    return element.regfnev === currentuser2;
})
if (data3 != undefined){
    teszt.innerHTML=currentuser2 + " Utolsó belépés dátuma:"+ data3.regdate;
} 


