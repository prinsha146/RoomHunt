import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Refresher } from 'ionic-angular';
import { DetailsPage } from '../details/details';
import { SpaceProvider } from '../../providers/space.service';
import { BookmarkServiceProvider } from '../../providers/bookmark-service/bookmark-service';

/**
 * Generated class for the BookmarkPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-bookmark',
    templateUrl: 'bookmark.html',
})
export class BookmarkPage {
    bookmarkList:any;
    names: any;
    id: any;
    fontColor: any;
    fontCo: any;
    post:any;
    posts: Array<any> = [];
    constructor(public navCtrl: NavController, private alertCtrl: AlertController,
        public navParams: NavParams,
        private spaceService:SpaceProvider,
        private bookmarkService:BookmarkServiceProvider) {
        this.getBookmarkPosts();
    }



    ionViewDidLoad() {
        console.log('ionViewDidLoad BookmarkPage');
    }


    remove(id,i) {
        // if (this.fontColor != '#009688') {
        //     let alert = this.alertCtrl.create({
        //         title: 'Bookmark',
        //         message: 'Do you want to bookmark this post?',
        //         buttons: [
        //             {
        //                 text: 'Cancel',
        //                 role: 'cancel',
        //                 handler: () => {
        //                     console.log('Cancel clicked');
        //                 }
        //             },
        //             {
        //                 text: 'Yes',
        //                 handler: () => {
        //                     this.fontColor = '#009688';
        //                     console.log('Yes clicked');
        //                 }
        //             }
        //         ]
        //     });
        //     alert.present();
        // }
            //  if (this.id == this.post.AvailableSpace.AvailableSpaceId){

            //  }
            //
                //this.fontColor = '#009688';
                var a = this.posts.length;
                console.log(a);
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
                            //this.fontColor = '#222';
                            console.log('Yes clicked');
                            this.removeBookmark(id);
                            console.log(id);
                            
                        }
                    }
                ]
            });
            alert.present();
       // }
    }

    report(id)
    {
        let alert = this.alertCtrl.create({
            title: 'Report Post',
            message: 'Do you want to report post?',
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
                        console.log('Yes clicked');
                        this.reportPost(id);
                        console.log(id);
                        
                    }
                }
            ]
        });
        alert.present();
    }

    doRefresh(refresher) {
        console.log('Begin async operation', refresher);
        this.getBookmarkPosts();
        setTimeout(() => {
          console.log('Async operation has ended');
          refresher.complete();
        }, 2000);
      }

    GoToDetails()
    {
        this.navCtrl.push(DetailsPage);
    }

    getBookmarkPosts()
    {
        this.spaceService.getBookmarkedPosts(1).subscribe(
            data => {
                this.bookmarkList = data;
                console.log(this.bookmarkList);
            }
        )
    }

    removeBookmark(id)
  {
    this.bookmarkService.deleteBookmark(id).subscribe();
  }

  reportPost(id)
  {
      this.spaceService.putreportPosts(id).subscribe();
  }

}



