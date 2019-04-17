import { Component, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { UserData } from '../../providers/user-data';

import { UserOptions } from '../../interfaces/user-options';



@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  styleUrls: ['./login.scss'],
})
export class LoginPage {
  submitted = false;
  public backgroundImage = 'assets/img/background-5.jpg';
  constructor(
    public userData: UserData,
    public router: Router
  ) { }

  login(form: NgForm) {
    this.router.navigateByUrl('/app/tabs/schedule');
  }

  goToSignup() {
    this.router.navigateByUrl('/signup');
  }
}
