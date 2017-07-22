class InputButtonComponent extends HTMLElement {
  static get observedAttributes() { return ['data-value']; }  
  constructor() {
    super();

    // Create a shadow root
    const shadow = this.attachShadow({mode: 'open'});

    // Create a standard input element and set it's attributes.
    const input = document.createElement('input');
    input.type = 'text';
    input.value = this.getAttribute('data-value');  
    this.input = input;
    // Create a standard button element and set it's attributes.      
    const button = document.createElement('button');
    button.innerText = this.getAttribute('data-button-text');  
    // Add the image to the shadow root.
    shadow.appendChild(input);
    shadow.appendChild(button);

    // Add an event listener to the button.
    button.addEventListener('click', () => {
        eval(this.getAttribute('data-button-action'))(input.value); // DO NOT DO THIS IN REAL WORLD!! EVAL IS EVIL!
    });  
  }

  attributeChangedCallback(attr, oldValue, newValue) {
      if (attr == 'data-value') {
          this.input.value = newValue;
      }
  }
    
}

// Define the new element
customElements.define('input-button', InputButtonComponent);


/* usage
<input-button 
  data-value="my value" 
  data-button-action="alert"
  data-button-text="send"></input-button>
*/