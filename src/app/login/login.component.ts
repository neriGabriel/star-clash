import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public frmLogin: any = {
    email: '',
    senha: ''
  };

  constructor() { }

  ngOnInit(): void {
  }

  public login(): void {
    alert(this.frmLogin.email+ " | "+ this.frmLogin.senha);
  }

}
