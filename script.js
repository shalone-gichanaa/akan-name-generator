const maleNames = [
  "Kwasi",
  "Kwadwo",
  "Kwabena",
  "Kwaku",
  "Yaw",
  "Kofi",
  "Kwame"
];

const femaleNames = [
  "Akosua",
  "Adwoa",
  "Abenaa",
  "Akua",
  "Yaa",
  "Afua",
  "Ama"
];


document.getElementById("akanForm").addEventListener("submit", function (event) {
  event.preventDefault(); 

  
  const birthdate = document.getElementById("birthdate").value;
  const genderInput = document.querySelector('input[name="gender"]:checked');
  const result = document.getElementById("result");

  
  if (!birthdate) {
    alert("Please select your birthdate");
    return;
  }

  if (!genderInput) {
    alert("Please select your gender");
    return;
  }

  
  const dateParts = birthdate.split("-");
  const year = parseInt(dateParts[0]);
  const month = parseInt(dateParts[1]);
  const day = parseInt(dateParts[2]);

  
  if (day < 1 || day > 31 || month < 1 || month > 12) {
    alert("Invalid date or month");
    return;
  }
  
  const CC = Math.floor(year / 100);
  const YY = year % 100;

  
  const dayOfWeek =
    ((4 * CC - 2 * CC - 1) +(45 * YY) +(10 * (month + 1)) +day) %7;

  
  let akanName;

  if (genderInput.value === "male") {
    akanName = maleNames[dayOfWeek];
  } else {
    akanName = femaleNames[dayOfWeek];
  }

  
  result.textContent = `Your Akan name is ${akanName}`;
});
