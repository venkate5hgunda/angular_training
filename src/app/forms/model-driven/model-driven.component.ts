import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { zipCodeValidator } from '../validators';

@Component({
  selector: 'app-model-driven',
  templateUrl: './model-driven.component.html',
  styleUrls: ['./model-driven.component.css']
})
export class ModelDrivenComponent implements OnInit {

  constructor() { }

  userForm: FormGroup = new FormGroup({
    name: new FormControl(null,[Validators.required, Validators.minLength(5)]),
    email: new FormControl(null,{updateOn: 'change', validators: [Validators.required, Validators.minLength(10)] }),
    address: new FormGroup({
      city: new FormControl(null,{updateOn: 'submit', validators: [Validators.required]}),
      state: new FormControl(null, {updateOn: 'change', validators: [Validators.required]}),
      pincode: new FormControl(null, {updateOn: 'change', validators: [Validators.required, zipCodeValidator]})
    })
  }, {updateOn: 'blur'});

  ngOnInit() {
  }

  public get addressObj(): FormGroup {
    return this.userForm.get('address') as FormGroup;
  }

}
