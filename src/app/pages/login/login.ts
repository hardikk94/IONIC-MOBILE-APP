import { Component, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ConferenceData } from './../../providers/conference-data';
import { UserData } from '../../providers/user-data';
import { ToastController } from '@ionic/angular';
import { UserOptions } from '../../interfaces/user-options';



@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  styleUrls: ['./login.scss'],
})
export class LoginPage {
  submitted = false;
  public backgroundImage = 'assets/img/background-5.jpg';
  public email
  constructor(
    public userData: UserData,
    public configData: ConferenceData,
    public toastCtrl: ToastController,
    public router: Router
  ) { }

  async login(form: NgForm) {
    let data = this.configData.getpatientList().subscribe(async (users) => {
      let findIndex = users.findIndex((user) => user.email === this.email)
      if (findIndex !== -1) {
        this.userData.login(this.email, users[findIndex]).then((result) => {
          this.router.navigateByUrl('/app/tabs/schedule');
        })
      }
      else {
        const toast = await this.toastCtrl.create({
          message: 'Invalid username and password.Please try again.',
          duration: 3000
        });
        await toast.present();
      }
    })
  }

  goToSignup() {
    this.router.navigateByUrl('/signup');
  }
}
