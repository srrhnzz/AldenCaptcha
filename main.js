let sizeStates = {};

const correctPattern = {
  select1: true, select2: true, select3: true, select4: false,
  select5: true, select6: true, select7: true, select8: false,
  select9: true, select10: true, select11: true, select12: true,
  select13: true, select14: true, select15: true, select16: true
};

for (const divId in correctPattern) {
  sizeStates[divId] = false;
}

function toggleSize(elementId) {
  const myDiv = document.getElementById(elementId);
  const checkDiv = myDiv.children[0];
  const gago = document.getElementsByClassName('bobo')[0];
  sizeStates[elementId] = !sizeStates[elementId];
  //console.log(`Toggled ${elementId}: sizeStates=${sizeStates[elementId]}`);
  if (sizeStates[elementId]) {
    myDiv.style.transform = "scale(0.8)";
    checkDiv.style.display = 'block';
    gago.style.display = 'none';  
  } else {
    myDiv.style.transform = "scale(1)";
    checkDiv.style.display = 'none';
    gago.style.display = 'none';  
  }
}

function verifyPattern() {
  for (const divId in correctPattern) {
    //console.log(`Comparing ${divId}: sizeStates=${sizeStates[divId]}, correctPattern=${correctPattern[divId]}`);
    if (sizeStates[divId] !== correctPattern[divId]) {
      //console.log(`Mismatch at ${divId}`);
      return false;
    }
  }
  return true;
}

function checkResult() {
  const bobo = document.getElementsByClassName('bobo')[0];
  const checkbox = document.getElementById('checkbox');
  const gago = document.getElementById("recaptcha");
  if (verifyPattern()) {
    checkbox.src = 'checked.png';
    gago.style.display = "none";
  } else {
    //console.log("Access Denied!");
    bobo.style.display = 'block';
  } 
}

  function showRecaptcha() {
      const gago = document.getElementById("recaptcha");
      gago.style.display = "";
    }
    document.addEventListener("click", function(event) {
      var recaptcha = document.getElementById("recaptcha");
      var image = document.querySelector("img[alt='Captcha']");
      if (recaptcha && event.target !== recaptcha && !recaptcha.contains(event.target) && event.target !== image) {
        recaptcha.style.display = "none";
      }
    });
