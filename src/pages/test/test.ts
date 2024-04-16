import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Item } from 'ionic-angular';
import { SpaceProvider } from '../../providers/space.service';

/**
 * Generated class for the TestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-test',
  templateUrl: 'test.html',
})
export class TestPage {
  bookmark: any;
  //examples: any = [1,2,3,4,5];
  myPostList :any;
  cancel:any;
  post:any;
  appliance: any;
  fontColor: any;
  //toggleValue: boolean = true;
  public isChecked: boolean = true;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private alertCtrl: AlertController,
    private spaceService:SpaceProvider) {
      this.getMyPosts();
  }

  // appliance = {
  //   state : true
  // };

  // get applianceState() {
  //   return this.appliance.state;
  // }

  // set applianceState(state: boolean) {
  //   this.appliance.state = state;
  // }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TestPage');
  }

  // toggleSwitch(switchName) {
  //   console.log(switchName + ' toggled');
  //   console.log('Toggle value=' + this.toggleValue);
  // }

  
  valid(event: Event,id) {
    
    let alert = this.alertCtrl.create({
      title: 'Turn off status',
      message: 'Do you want to turn off?',
      buttons: [
          {
              text: 'Cancel',
              role: 'cancel',
              
              handler: () => {
                //this.toggleValue = true;
                  console.log("Cancel");
                  event.preventDefault();
              },
              
          },
          {
            text: 'Yes',
            handler: () => {
              //var i = this.myPostList.length;
             // this.fontColor = 'red';

              console.log(id);
              //this.changePostStatus(id);
              
            }
          }
      ]
  });
  alert.present();
  }

  getMyPosts()
  {
    this.spaceService.getMyposts(2).subscribe(
      data => {
        this.myPostList = data;
        console.log(this.myPostList);
      }
    );
  }

  changePostStatus(id)
  {
    this.spaceService.putStatusPosts(id).subscribe();
  }


  add(ev){
    console.log("hi");
  }
    //this.examples[i].open = !this.examples[i].open;
    //alert("hi");
    
    // console.log(i);
    // let alert = this.alertCtrl.create ({
    //     title: 'On',
    //     message: 'Do you want to turn on?',
    //     buttons: [
    //       {
    //         text: 'Cancel',
    //         role: 'cancel',
    //         handler: () => { console.log("Cancelled");}
    //       },
    //       {
    //         text: 'Yes',
    //         handler: () => {
              
    //           console.log("Yes");}
    //       }
    //     ]
    // });
    // alert.present();
    // }

}
