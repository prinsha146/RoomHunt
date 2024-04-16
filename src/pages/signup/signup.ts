import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { LoginPage } from '../login/login';

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  signup:FormGroup;
  

  constructor(private formBuilder : FormBuilder, private navctrl : NavController) {
    this.signup = this.formBuilder.group({
      name : ['',Validators.compose([Validators.required])],
      address : ['',Validators.compose([Validators.required])],
      contact : ['',Validators.compose([Validators.required])],
      email : '',
      password : ['',Validators.compose([Validators.required])],
      pass : ['',Validators.compose([Validators.required])]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  goToLogin()
  {
    this.navctrl.push(LoginPage);
  }
}
