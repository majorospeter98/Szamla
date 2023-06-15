let localprefix= "Register";
let localkey= `${localprefix}-registered`;
const localkey2= `${localprefix}-currentuser`;
let info=  document.querySelector(".info");
let currentuserdata=localStorage.getItem(localkey);
let data2=JSON.parse(currentuserdata)
let currentuser=localStorage.getItem(localkey2);
let currentuser2= JSON.parse(currentuser);
let user=data2.find(element => {
    return element.regfnev === currentuser2;
})
if (user != undefined){
    info.innerHTML=currentuser2 + " Utolsó belépés dátuma:"+ user.regdate;
} 


