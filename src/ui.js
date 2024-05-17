class UI {
  constructor() {
    this.weight = document.querySelector('#weight-input')
    this.height = document.querySelector('#height-input')
    this.display = document.querySelector('#display')
    this.idInput = document.querySelector('#id')
  }

  showInfo(displays) {
    let output = '';

    displays.forEach((display) => {
      output +=`
      <div class="card mb-3">
  <ul class="list list-group list-group-flush ">
    <li class="list-group-item border-bottom-0 name">Height: ${display.height}</li>
    <li class="list-group-item border-bottom-0 age">Weight: ${display.weight}</li><li class="list-group-item border-bottom-0 age">Result: ${display.result}</li>
  </ul>
  <div class="card-body">
      
    <a href="#" class="edit card-link" data-id="${display.id}" data-toggle="modal" data-target="#editModal">
    <i class="fa fa-pencil"></i>
    </a>
    <a href="#" class="delete card-link" data-id="${display.id}">
    <i class="fa fa-remove"></i>
    </a>
    
  </div>
</div> `;
     
    });

    this.display.innerHTML = output;
  }

  showAlert(message, className) {
    this.clearAlert();


    // Create div
    const div = document.createElement('div');
    // Add Classes
    div.className = className;
    // Add text
    div.appendChild(document.createTextNode(message));
    //Get parent
    const container = document.querySelector('.displayContainer');
    // get display
    const displays = document.querySelector('#display');
    // Insert alert div
    container.insertBefore(div, displays);

    // Timeout
    setTimeout(() => {
      this.clearAlert();
    }, 3000);
  }

    // Clear aler message
    clearAlert() {
      const currentAlert = document.querySelector('.alert');

      if(currentAlert) {
        currentAlert.remove();
      }
  }


  clearFields() {
    this.weight.value = '';
    this.height.value = '';
  }

}

export const ui = new UI();