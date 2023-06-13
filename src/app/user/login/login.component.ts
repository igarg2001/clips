import { Component, OnInit } from '@angular/core';

interface ICredential {
  email: string;
  password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  credentials: ICredential = {
    email: '',
    password: '',
  };

  login() {
    console.log(this.credentials);
  }

  constructor() {}

  ngOnInit(): void {}
}
