    function gago() {
  console.log('fuck')
  const sound = new Howl({
  src: ['tanginamo.mp3'],
  autoplay: true,
}); }

let sizeStates = {};

const correctPattern = {
  select1: true, select2: true, select3: true, select4: false,
  select5: true, select6: true, select7: true, select8: false,
  select9: true, select10: true, select11: true, select12: true,
  select13: true, select14: true, select15: true, select16: true
};

for (const divId in correctPattern) {
  sizeStates[divId] = false; // Initialize with false
}

function toggleSize(elementId) {
  const myDiv = document.getElementById(elementId);
  const checkDiv = myDiv.children[0];
  sizeStates[elementId] = !sizeStates[elementId];
  console.log(`Toggled ${elementId}: sizeStates=${sizeStates[elementId]}`);
  if (sizeStates[elementId]) {
    myDiv.style.transform = "scale(0.8)";
    checkDiv.style.display = 'block';
  } else {
    myDiv.style.transform = "scale(1)";
    checkDiv.style.display = 'none';
  }
}

function verifyPattern() {
  for (const divId in correctPattern) {
    console.log(`Comparing ${divId}: sizeStates=${sizeStates[divId]}, correctPattern=${correctPattern[divId]}`);
    if (sizeStates[divId] !== correctPattern[divId]) {
      console.log(`Mismatch at ${divId}`);
      return false;
    }
  }
  return true;
}

function checkResult() {
  const gago = document.getElementsByClassName('bobo')[0]; 
  if (verifyPattern()) {
    window.location.href = 'kupal.html';
    console.log("Access Accepted!");
  } else {
    console.log("Access Denied!");
    gago.style.display = 'block';  
  } 
}