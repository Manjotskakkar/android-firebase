import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private navCtrl: NavController,
    private afAuth: AngularFireAuth
  ) {
    this.userDetails().subscribe((res:any) => {
      if (res !== null) {
        this.navCtrl.navigateBack('/dashboard');
      } else {
        this.navCtrl.navigateBack('/login');
      }
    }, err => {
      this.navCtrl.navigateBack('/login');
    })
  }

  userDetails() {
    return this.afAuth.user
  }

}
