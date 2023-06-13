import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  name = new FormControl('', [Validators.required, Validators.minLength(4)]);
  email = new FormControl('', [Validators.required, Validators.email]);
  age = new FormControl('', [
    Validators.required,
    Validators.min(18),
    Validators.max(120),
  ]);
  password = new FormControl('', [
    Validators.required,
    Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm),
  ]);
  confirmPassword = new FormControl('', [Validators.required]);
  phoneNumber = new FormControl('', [Validators.required, Validators.minLength(14), Validators.maxLength(14)]);
  registerForm = new FormGroup({
    name: this.name,
    email: this.email,
    age: this.age,
    password: this.password,
    confirmPassword: this.confirmPassword,
    phoneNumber: this.phoneNumber,
  });

  showAlert: boolean = false;
  alertColor: string = 'blue';
  alertMessage: string = 'Please wait... Registering...';

  register() {
    this.showAlert = true;
    this.alertColor = 'blue';
    this.alertMessage = 'Please wait... Registering...';
    setTimeout(() => {
      this.alertMessage = 'Registered Successfully';
    }, 2000);
  }

  constructor() {
    console.log(this.registerForm.status === 'INVALID');
  }

  ngOnInit(): void {}
}
