import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-show-errors',
  templateUrl: './show-errors.component.html',
  styleUrls: ['./show-errors.component.css']
})
export class ShowErrorsComponent implements OnInit {

  @Input() ctrl: FormControl;

  ERROR_MESSAGE = {
    required: () => `This field is required`,
    minlength: (minlengthObject) => `This does not meet the requirement. Minimum length is: ${minlengthObject.allowedCode}`,
    zipCode: (zipCodeObject) => `The code entered is invalid: ${zipCodeObject.allowedCode}`
  };

  constructor() { }

  ngOnInit() {
  }

  shouldShowErrors(): boolean {
    return this.ctrl && this.ctrl.errors && this.ctrl.touched;
  }
  listOfErrors(): string[] {
    return Object.keys(this.ctrl.errors).map(
      err => this.ERROR_MESSAGE[err](this.ctrl.getError(err))
    );
  }
}
