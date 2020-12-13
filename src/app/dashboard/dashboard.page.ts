import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  userEmail: string;
  userData : any = null;

  constructor(
    private db: AngularFirestore,
    private navCtrl: NavController,
    private afAuth: AngularFireAuth
  ) { }

  ngOnInit() {
    this.userDetails().subscribe((res:any) => {
      console.log(res);
      if (res !== null) {
        this.db.collection('users').doc(res.uid).get().subscribe((res) => {
          this.userData = res.data();
        });
        this.userEmail = res.email;
      } else {
        //this.navCtrl.navigateBack('');
      }
    }, err => {
      console.log('err', err);
    })

  }

  userDetails() {
    return this.afAuth.user
  }

  logout() {
    this.logoutUser()
      .then(res => {
        this.navCtrl.navigateBack('');
      })
      .catch(error => {
        console.log(error);
      })
  }

  logoutUser() {
    return new Promise((resolve, reject) => {
      if (this.afAuth.currentUser) {
        this.afAuth.signOut()
          .then(() => {
            resolve();
          }).catch((error) => {
            reject();
          });
      }
    })
  }

}