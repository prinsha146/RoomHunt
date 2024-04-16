import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HomePage } from '../home/home';
import { SignupPage } from '../signup/signup';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  siginForm : FormGroup;
  constructor(public navCtrl: NavController, public navParams: NavParams, private form:FormBuilder) {
    this.siginForm = this.form.group({
      phone: ['', Validators.compose([Validators.required])],
      password: ['',Validators.compose([Validators.required])]
    });
   
  }

  signin()
  {
    console.log(this.siginForm.value);
    this.navCtrl.push(HomePage);
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  goToSignup()
  {
    console.log('signup');
    this.navCtrl.push(SignupPage);
  }

}
