import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSignUp()
  {
    this.router.navigate(['sign-up']);
  }

  onLogIn()
  {
    this.router.navigate(['MyAccount']);
  }

  onCancel()
  {
    this.router.navigate(['home']);
  }
}
