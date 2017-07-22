import { Component, OnInit, OnChanges, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
@Component({
    selector: 'input-button',
    template: `<input type="text" [value]="innerValue" #input />
        <button (click)="buttonAction.emit(input.value)">{{buttonText}}</button>`,
})
export default class InputButtonComponent implements OnChanges{
    innerValue;
    @Input() value;
    @Input() buttonText;
    @Output() buttonAction = new EventEmitter<String>();

    ngOnChanges(changes) {
        this.innerValue = changes.value;
    }
}


/* usage
<input-button 
  [value]="my value" 
  [buttonText]="Send"
  (buttonAction)="alert($event)"></input-button>
*/