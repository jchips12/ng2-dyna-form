import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormArray, FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  constructor( @Inject(FormBuilder) private fb: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.buildForm();
  }
  
  resetForm() {
    this.registerForm = this.buildForm();
  }

  private buildForm() {
    return this.fb.group({
      first_name: this.fb.control(null),
      last_name: this.fb.control(null),
      phone: this.fb.control(null),
      email: this.fb.control(null),
      gender: this.fb.control(null),
      addresses: this.fb.array([
        this.initAddress()
      ]),


    });
  }

  register() {
    console.log(this.registerForm);
  }

  initAddress() {
    return this.fb.group({
      street: this.fb.control(null),
      zip: this.fb.control(null),
      city: this.fb.control(null)
    })
  }

  addAddress() {
    let formArray = <FormArray>this.registerForm.controls['addresses'];
    formArray.push(this.initAddress());
  }

  removeAddress(index: number) {
    let formArray = <FormArray>this.registerForm.controls['addresses'];
    formArray.removeAt(index);
  }

}
