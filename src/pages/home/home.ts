import { Component } from '@angular/core';
import { NavController, AlertController, Refresher } from 'ionic-angular';
import { DetailsPage } from '../details/details';
import { SpaceProvider } from '../../providers/space.service';
import { BookmarkServiceProvider } from '../../providers/bookmark-service/bookmark-service';
import { TestPage } from '../test/test';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  postList: any;
  post: any;
  fontCo: any;
  fontColor: any;
  data: any;
  id: any;
  spaceId: any;
  bookmark: Array<any>;
  num: any;

  constructor(
    public navCtrl: NavController, 
    private alertCtrl: AlertController,
    private spaceService: SpaceProvider,
    private bookmarkService: BookmarkServiceProvider) {
      this.getRecentPosts();
      //this.getRecentPostById(this.id);
      
    }

   bookmarks(id){
      let bookmark = {
        SeekerId : 1,
        AvailableSpaceId : id
      }      
      console.log(id);
      var idtochange = document.getElementById('id');
      console.log("Id of Icon "+ idtochange);
      if (this.fontColor != '#009688') {
        let alert = this.alertCtrl.create({
          title: 'Bookmark',
          message: 'Do you want to bookmark this post?',
          buttons: [
            {
              text: 'Cancel',
              role: 'cancel',
              handler: () => {
                console.log('Cancel clicked');
              }
            },
            {
              text: 'Yes',
              handler: () => {
                this.postBookmark(bookmark);
                this.fontColor = '#009688';
                console.log('Yes clicked');
                console.log(id);
              }
            }
          ]
        });
        alert.present();
      } 

      else {
        let alert = this.alertCtrl.create({
          title: 'Remove Bookmark',
          message: 'Do you want to remove bookmark?',
          buttons: [
            {
              text: 'Cancel',
              role: 'cancel',
              handler: () => {
                console.log('Cancel clicked');
              }
            },
            {
              text: 'Yes',
              handler: () => {
                this.fontColor = '#222';
                this.removeBookmark(id);
                window.location.reload();
                console.log('Yes clicked');
                console.log(id);
              }
            }
          ]
        });
        alert.present();
      }
   }

   reports(id)
   {
     console.log(id);
     if (this.fontCo != '#f53d3d') {
      let alert = this.alertCtrl.create({
        title: 'Report',
        message: 'Do you want to report this post?',
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            handler: () => {
              console.log('Cancel clicked');
            }
          },
          {
            text: 'Yes',
            handler: () => {
              this.fontCo = '#f53d3d';
              console.log('Yes clicked');
              this.putReport(id);
            }
          }
        ]
      });
      alert.present();
    }
     
   }

  doRefresh(refresher) {
    console.log('Begin async operation', refresher);
    this.getRecentPosts();
    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }


  // addEvent(id) {
  //   console.log(id);
  //   if (this.fontColor != '#009688') {
  //     let alert = this.alertCtrl.create({
  //       title: 'Bookmark',
  //       message: 'Do you want to bookmark this post?',
  //       buttons: [
  //         {
  //           text: 'Cancel',
  //           role: 'cancel',
  //           handler: () => {
  //             console.log('Cancel clicked');
  //           }
  //         },
  //         {
  //           text: 'Yes',
  //           handler: () => {
  //             this.fontColor = '#009688';
  //             console.log('Yes clicked');
  //             //this.getRecentPostById(this.id);
  //             this.postBookmark(this.bookmark);
  //             //this.GoToDetails();
  //             console.log(id);
  //           }
  //         }
  //       ]
  //     });
  //     alert.present();
  //   }
  //   else {
  //     let alert = this.alertCtrl.create({
  //       title: 'Remove Bookmark',
  //       message: 'Do you want to remove bookmark?',
  //       buttons: [
  //         {
  //           text: 'Cancel',
  //           role: 'cancel',
  //           handler: () => {
  //             console.log('Cancel clicked');
  //           }
  //         },
  //         {
  //           text: 'Yes',
  //           handler: () => {
  //             this.fontColor = '#222';
  //             console.log('Yes clicked');
  //           }
  //         }
  //       ]
  //     });
  //     alert.present();
  //   }
  // }


  // addEvents() {
  //   if (this.fontCo != '#f53d3d') {
  //     let alert = this.alertCtrl.create({
  //       title: 'Report',
  //       message: 'Do you want to report this post?',
  //       buttons: [
  //         {
  //           text: 'Cancel',
  //           role: 'cancel',
  //           handler: () => {
  //             console.log('Cancel clicked');
  //           }
  //         },
  //         {
  //           text: 'Yes',
  //           handler: () => {
  //             this.fontCo = '#f53d3d';
  //             console.log('Yes clicked');
  //           }
  //         }
  //       ]
  //     });
  //     alert.present();
  //   }
  //   else {
  //     let alert = this.alertCtrl.create({
  //       title: 'Unreport',
  //       message: 'Do you want to unreport?',
  //       buttons: [
  //         {
  //           text: 'Cancel',
  //           role: 'cancel',
  //           handler: () => {
  //             console.log('Cancel clicked');
  //           }
  //         },
  //         {
  //           text: 'Yes',
  //           handler: () => {
  //             this.fontCo = '#222';
  //             console.log('Yes clicked');
  //           }
  //         }
  //       ]
  //     });
  //     alert.present();
  //   }
  
  // }

  GoToDetails()
  {
    this.navCtrl.push(DetailsPage);
  }

  //data consumption
  getRecentPosts()
  {
    this.spaceService.getAvailableSpace().subscribe(
      data => {
        this.postList =data;
        console.log(this.postList);
      }
    );
  }

  getRecentPostById(id)
  {
    this.spaceService.gerAvailableSpaceById(id).subscribe(
      data => {
        this.post = data;
        console.log(this.post);
      }
    );
  }
  
  getBookmarks(id)
  {
    this.bookmarkService.getBookmarkById(id).subscribe(
      data => {
        this.post = data;
        console.log(this.post);
      }
    );
  }

  postBookmark(bookmark)
  {
    this.bookmarkService.postBookmark(bookmark).subscribe();
  }

  removeBookmark(id)
  {
    this.bookmarkService.deleteBookmark(id).subscribe();
  }

  putReport(report)
  {
    this.spaceService.putreportPosts(report).subscribe();
  }

  GoToTest()
  {
    this.navCtrl.push(TestPage);
  }
}

