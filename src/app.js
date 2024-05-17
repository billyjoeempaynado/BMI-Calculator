import { http } from './http'; // to import the http post, delete, update
import { ui } from './ui';
// Get posts on DOM load

document.addEventListener('DOMContentLoaded', getDisplay);

//Listen for display
document.querySelector('.compute').addEventListener('click', addDisplay);

// Listed for kilo
document.querySelector('#weight-option').addEventListener('click', kiloDisplay);

function getDisplay() {
  http.get('http://localhost:3000/display')
  .then(data => ui.showInfo(data))
  .catch(err => console.log(err));
}


function addDisplay (e) {
  const weight = document.getElementById('weight-input').value;
  const height = document.getElementById('height-input').value;
  const id = document.querySelector('#id').value;

  const data = {
    weight,
    height,
    id   
  }  

  if(id === '') {
    // Create Post
    // Create display info
    http.post('http://localhost:3000/display', data)
    .then(data => {
      ui.showAlert('Your Info has been added', 'alert alert-success');
      ui.clearFields();
      getDisplay();
    })
    .catch(err => console.log(err));
    } else {
    }
  


  e.preventDefault();
}

function kiloDisplay() {
  const weightInput = document.getElementById('weight-input');
  const weightOption = document.getElementById('weight-option');
  const heightInput = document.getElementById('height-input');
  const heightOption = document.getElementById('height-option');

  // Change weight placeholder based on selected option
  weightOption.addEventListener('change', () => {
    weightInput.placeholder = weightOption.value === 'kg' ? 'Kilo' : 'Pounds';
  });

    // Change height placeholder based on selected option
    heightOption.addEventListener('change', () => {
      heightInput.placeholder = heightOption.value === 'cm' ? 'Centimeter' : 'Feet';
    });

  
}