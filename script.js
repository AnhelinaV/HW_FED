const userName = document.getElementById('userName');
const userAge = document.getElementById('userAge');
const userWeight = document.getElementById('userWeight');
const userHeight = document.getElementById('userHeight');
const btnSave = document.getElementById('btnSave');


function saveData() {
  let userNameValue = userName.value;
  let userAgeValue = userAge.value;
  let userWeightValue = userWeight.value;
  let userHeightValue = userHeight.value;

  if (userNameValue == "" || userAgeValue == "" || userWeightValue == "" || userHeightValue == "") {
    alert('Please fill in the data');
  } else if (userAgeValue < 16 || userAgeValue > 60) {
    alert('Age is not suitable');
  } else if (userWeightValue < 60 || userWeightValue > 120) {
    alert('Weight  is not suitable');
  } else if (userHeightValue < 160 || userHeightValue > 195) {
    alert('Height  is not suitable');
  } else {
    alert('Congratulations! You are registered.')
  }

  clearAllInput();
}


function clearAllInput () {
  userName.value = "";
  userAge.value = "";
  userWeight.value = "";
  userHeight.value = "";
}