var ssc = document.querySelector(".ssc")
var SSC = `<h1>BOARD OF SECONDARY EDUCATION <br> KARACHI </h1>`
ssc.insertAdjacentHTML('beforebegin',SSC);

var stat = document.querySelector(".statement");
var ement = `STATEMENT OF MARKS <br> <b>S.S.C EXAMINATION <br> (FOR SUCCESSFUL CANDIDATE ONLY) </b>`
stat.insertAdjacentHTML('beforebegin',ement);


var para = document.querySelector(".para");
var PARA = `GRADE IN COMPONENT-III <br> AWARDED BY SCHOOL IN <br><br>XXXXXXXXXXXXX <br> <br> GRADE: XXXX <br> <br> DATE: 29-07-2022`
para.insertAdjacentHTML('beforebegin',PARA)

var sa = document.querySelector(".saleem")
var Sa = `(MUHAMMAD SALEEM KHAN) <br> <br> CONTROLLER OF EXAMINATIONS`
sa.insertAdjacentHTML('afterbegin',Sa)

var right = document.querySelector(".right")
var Right = `E.&.O.E <br> <b> For Important Notes Turn Over </b>`
right.insertAdjacentHTML("afterbegin",Right)

document.querySelector("#a").innerHTML=localStorage.getItem("Roll no.");
let  namme = localStorage.getItem("Name");
namme = namme.toUpperCase();
document.querySelector("#b").innerHTML= namme;
let f_nam = localStorage.getItem("Father Name");
f_nam = f_nam.toUpperCase();
document.querySelector("#c").innerHTML= f_nam;
let school_nam = localStorage.getItem("School");
school_nam = school_nam.toUpperCase();
document.querySelector("#d").innerHTML = school_nam;


let k = document.querySelector(".urdu").innerHTML=localStorage.getItem("Urdu");
let a = document.querySelector(".english").innerHTML=localStorage.getItem("English");
let b = document.querySelector(".pak").innerHTML=localStorage.getItem("Pak.Studies");
let c = document.querySelector(".islam").innerHTML=localStorage.getItem("Islamiat");
let d = document.querySelector(".maths").innerHTML=localStorage.getItem("Mathematics");
let e = document.querySelector(".bioth").innerHTML=localStorage.getItem("Biology(Theory)");
let f = document.querySelector(".biop").innerHTML=localStorage.getItem("Biology(Practical)");
let g = document.querySelector(".phyth").innerHTML=localStorage.getItem("Physics(Theory)");
let h = document.querySelector(".phyp").innerHTML=localStorage.getItem("Physics(Practical)");
let i = document.querySelector(".chemth").innerHTML=localStorage.getItem("Chemistry(Theory)");
let j = document.querySelector(".chemp").innerHTML=localStorage.getItem("Chemistry(Practical)");

a = Number (a)
b = Number (b)
c = Number (c)
d = Number (d)
e = Number (e)
f = Number (f)
g = Number (g)
h = Number (h)
i = Number (i)
j = Number (j)
k = Number (k)

const sum = parseInt( a + b + c + d + e + f + g + h + i + j + k)
console.log(sum)
document.querySelector(".total").innerHTML = sum
var percentage = (sum / 850)*100
console.log (percentage.toFixed(1))

switch(true){
    case (percentage <=99 && percentage >=80):
        document.querySelector('.grade').innerHTML = 'A-One';
        break;
    case (percentage <=79 && percentage >=70):
        
        document.querySelector('.grade').innerHTML = 'A'

        break;    
    case (percentage <=69 && percentage >=60):
       
        document.querySelector('.grade').innerHTML = 'B'

        break;
    case (percentage <=59 && percentage >=40):
        document.querySelector('.grade').innerHTML = 'C'
        break;
    case (percentage <=49 && percentage >=40):
        document.querySelector('.grade').innerHTML = 'D'
        break; 
    case (percentage <=39 && percentage >=1):
        document.querySelector('.grade').innerHTML = 'Fail'
              break;  
    default:  
   
    document.querySelector('.grade').innerHTML = 'Invalid SCORE'

}


if (k < 45) {
    document.querySelector(".u_pass").innerHTML = "F"
    document.querySelector('.grade').innerHTML = 'Fail'
}
if (a < 45) {
   document.querySelector(".e_pass").innerHTML = "F"
   document.querySelector('.grade').innerHTML = 'Fail'

}
if (b < 33){
   document.querySelector(".pk_pass").innerHTML = "F"
   document.querySelector('.grade').innerHTML = 'Fail'

}
if (c < 33){
   document.querySelector(".i_pass").innerHTML = "F"
   document.querySelector('.grade').innerHTML = 'Fail'
}

if (d < 45){
    document.querySelector(".m_pass").innerHTML = "F"
    document.querySelector('.grade').innerHTML = 'Fail'

}if (e < 33){
    document.querySelector(".bt_pass").innerHTML = "F"
    document.querySelector('.grade').innerHTML = 'Fail'

}if (f < 15){
    document.querySelector(".bp_pass").innerHTML = "F"
    document.querySelector('.grade').innerHTML = 'Fail'

}if (g < 33){
    document.querySelector(".pt_pass").innerHTML = "F"
    document.querySelector('.grade').innerHTML = 'Fail'

}if (h < 15){
    document.querySelector(".pp_pass").innerHTML = "F"
    document.querySelector('.grade').innerHTML = 'Fail'

}
if (i < 33){
    document.querySelector(".ct_pass").innerHTML = "F"
    document.querySelector('.grade').innerHTML = 'Fail'

}if (j < 15){
    document.querySelector(".cp_pass").innerHTML = "F"
    document.querySelector('.grade').innerHTML = 'Fail'
}