// console.log('heelo')
// let today = new Date();
// let date = today.getDate();
// let month = today.getMonth()+1;
// let year = today.getUTCFullYear();
// if(date<10){
//     date = "0" + date;
// }
// if(month<10){
//     month = "0"+ month;
// }
// let maxDate = year +"-"+month +"-"+date;
// document.getElementById("startDate").setAttribute("max", maxDate);
// document.getElementById("endDate").setAttribute("min", maxDate);
//
// console.log(maxDate);

let nameValue;
let emailValue;
let countryCodeValue;
let phoneValue;
let nidValue;
let startDate;
let endDate;
let birthDateValue;
document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById("myForm").addEventListener("submit", function(e) {
        e.preventDefault()
        nameValue = document.getElementById("name").value;
        emailValue = document.getElementById("email").value;
        countryCodeValue = document.getElementById("countryCode").value;
        phoneValue = document.getElementById("phone").value;
        nidValue = document.getElementById("nid").value;
        startDate = document.getElementById("startDate").value;
        endDate = document.getElementById("endDate").value;
        birthDateValue = document.getElementById("birthDate").value;


        document.getElementById("userName").innerText = nameValue;
        document.getElementById("userEmail").innerText = emailValue;
        document.getElementById("userPhone").innerText = countryCodeValue +" " + phoneValue;
        document.getElementById("userNid").innerText = nidValue;
        document.getElementById("userStartDate").innerText = startDate;
        document.getElementById("userEndDate").innerText = endDate;
        document.getElementById("userBirthDate").innerText = birthDateValue;



        document.getElementById("second-part").style.display="block";
        document.getElementById("first-part").style.display="none";
        document.getElementById("third-part").style.display="none";
    });
});



//second-part


document.getElementById("plusButton").addEventListener("click", function(e) {
    e.preventDefault() // Cancel the default action
    let educationForm = document.getElementById("education-form");
    let div = document.createElement("div");
    div.innerHTML=`
        <label>Degree Type:</label>
         <select class="degreeType">
             <option value="SSC">SSC</option>
             <option value="HSC">HSC</option>
             <option value="Honours">Honours</option>
             <option value="Diploma">Diploma</option>
             <option vlaue="Masters">Masters</option>
         </select>
         <label>Year Started:</label>
         <input type="date" name="" class="start-year" placeholder="Started Year">
         <label>Year Completed:</label>
         <input type="date" name="" class="end-year" placeholder="Completed Year">
    `
    educationForm.appendChild(div);
});

document.getElementById("previousButton").addEventListener("click", function(e) {
    e.preventDefault() // Cancel the default action

    document.getElementById("second-part").style.display="none";
    document.getElementById("third-part").style.display="none";
    document.getElementById("first-part").style.display="block";
});


let degreeArray=[];
let startYearArray =[];
let endYearArray=[];
document.getElementById("nextButton2").addEventListener("click", function(e) {
    e.preventDefault() // Cancel the default action

    let degreeElements = document.getElementsByClassName("degreeType");
    let startYears = document.getElementsByClassName("start-year");
    let endYears = document.getElementsByClassName("end-year");

   degreeArray=[];
   startYearArray=[];
   endYearArray=[];

    for(let d of degreeElements){
       degreeArray.push(d.value);
    }
    for(let s of startYears){
        // console.log(s.value);
        let startYearValue = s.value.split("-")[0];
       startYearArray.push(startYearValue);
    }
    for(let e of endYears){
        let endYearValue = e.value.split("-")[0];
        endYearArray.push(endYearValue);

    }
    document.getElementById("userDegree").textContent = degreeArray.join(", ");
    document.getElementById("userDStartYear").textContent = startYearArray.join(", ");
    document.getElementById("userDEndYear").textContent = endYearArray.join(", ");


    document.getElementById("second-part").style.display="none";
    document.getElementById("first-part").style.display="none";
    document.getElementById("third-part").style.display="block";

});


document.getElementById("previousButton2").addEventListener("click", function(e) {
    // e.preventDefault()
    document.getElementById("second-part").style.display="block";
    document.getElementById("first-part").style.display="none";
    document.getElementById("third-part").style.display="none";
});

document.getElementById("submitButton").addEventListener("click", function(e) {
    // e.preventDefault()
   fetch("https://63aa7051594f75dc1dd0658b.mockapi.io/api/v1/employee/employeeInformation", {
       method: 'POST',
       body: JSON.stringify({
           name: nameValue,
           email: emailValue,
           countryCode: countryCodeValue,
           phone: phoneValue,
           nid: nidValue,
           startDate: startDate,
           endDate: endDate,
           birthDate: birthDateValue,
           degree: degreeArray,
           yearStart: startYearArray,
           yearEnd: endYearArray
       }),
       headers: {
           "Content-type": "application/json"
       }
   })
       .then(res => res.json())
       .then(data => {
           console.log(data);
       })

});

// console.log(startYearArray);
// console.log(endYearArray);
// console.log(degreeArray);