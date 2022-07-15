
let para = document.createElement("p");
let grap = document.createTextNode("Fillout the form to make the S.S.C MarkSheet.")
para.appendChild(grap);
console.log(para)
document.querySelector("#para").appendChild(para); 

function save_data() {
    var naam = document.querySelector("#saveServer")
    let mail = document.querySelector("#mail")
    let roll = document.querySelector("#roll")
    let school = document.querySelector("#school")
    let urdu = document.querySelector("#urdu")
    let english = document.querySelector("#english")
    let pak_std = document.querySelector("#pak")
    let islamiat = document.querySelector("#islam")
    let maths = document.querySelector("#math")
    let bio_theory = document.querySelector("#bioth")
    let bio_practical = document.querySelector("#biop")
    let physics_theory = document.querySelector("#phyth")
    let physics_practical = document.querySelector("#phyp")
    let chemist = document.querySelector("#chem")
    let pract = document.querySelector("#prac")
    localStorage.setItem("Chemistry(Practical)",pract.value)
    localStorage.setItem("Chemistry(Theory)", chemist.value);
    localStorage.setItem("Name", naam.value)
    localStorage.setItem("Father Name", mail.value)
    localStorage.setItem("Roll no.", roll.value)
    localStorage.setItem("School", school.value)
    localStorage.setItem("Urdu", urdu.value)
    localStorage.setItem("English", english.value)
    localStorage.setItem("Pak.Studies", pak_std.value)
    localStorage.setItem("Islamiat", islamiat.value)
    localStorage.setItem("Mathematics", maths.value)
    localStorage.setItem("Biology(Theory)", bio_theory.value)
    localStorage.setItem("Biology(Practical)", bio_practical.value)
    localStorage.setItem("Physics(Theory)", physics_theory.value)
    localStorage.setItem("Physics(Practical)", physics_practical.value)

}




