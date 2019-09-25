import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent implements OnInit {

  constructor() { }

  saveData(userForm: NgForm ) {
    console.log('form submitted', userForm);
  }

  loadData(formData: NgForm) {
    const user = {
      name: 'test', email: 'a@b.com'
    };
    formData.form.setValue(user);
  }

  patchData(formData: NgForm) {
    const user = {
      name: 'test'
    };
    formData.form.patchValue(user);
  }

  ngOnInit() {
  }

}
