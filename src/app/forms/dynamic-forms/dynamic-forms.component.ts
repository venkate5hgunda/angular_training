import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { zipCodeValidator } from '../validators';

@Component({
  selector: 'app-dynamic-forms',
  templateUrl: './dynamic-forms.component.html',
  styleUrls: ['./dynamic-forms.component.css']
})
export class DynamicFormsComponent implements OnInit {

  constructor() { }

  
  userForm: FormGroup = new FormGroup({
    name: new FormControl(null,[Validators.required, Validators.minLength(5)]),
    email: new FormControl(null,{updateOn: 'change', validators: [Validators.required, Validators.minLength(10)] }),
    address: new FormArray([this.newAddressItem()])
  }, {updateOn: 'change'});

  ngOnInit() {

  }

  public get addressObj(): FormArray {
    return this.userForm.get('address') as FormArray;
  }

  newAddressItem() {
    return new FormGroup({
      city: new FormControl(null,{updateOn: 'submit', validators: [Validators.required]}),
      state: new FormControl(null, {updateOn: 'change', validators: [Validators.required]}),
      pincode: new FormControl(null, {updateOn: 'change', validators: [Validators.required, zipCodeValidator]})
    });
  }

  addAddress() {
    this.addressObj.push(this.newAddressItem());
  }

  removeAddress(i: number) {
    this.addressObj.removeAt(i);
  }

}
