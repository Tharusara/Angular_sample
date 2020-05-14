import { Component, OnInit } from '@angular/core';
// import { AuthProviders,AuthMethods} from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
// import { FirebaseListObservable} from 'angularfire2/database/index/FirebaseListObservable';
// import { AngularFire, AuthProviders, AuthMethods,FirebaseListObservable } from 'angularfire2';
import {  AngularFireObject, AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Observable, from } from 'rxjs';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
//  items: FirebaseListObservable<any>;
  items: AngularFireList<any>;
  name: any;
  msgVal = '';
  test;

//   constructor(public db: AngularFireDatabase, public afAuth: AngularFireAuth) {
//     this.items = db.list('/messages');
//     // this.items = db.list('/messages', {
//     //       query: {
//     //         limitToLast: 5
//     //       }
//     //     });
//     afAuth.authState.subscribe(auth => {
//           if (auth) {
//             this.name = auth;
//           }
//         });
// }

  // constructor(public af: AngularFire) {
  //   this.items = af.database.list('/messages', {
  //     query: {
  //       limitToLast: 5
  //     }
  //   });

  //   this.af.auth.subscribe(auth => {
  //     if (auth) {
  //       this.name = auth;
  //     }
  //   });
  //  }

  ngOnInit() {
  }
  // login() {
  //   this.afAuth.auth.signInWithPopup({
  //     provider: AuthProviders.Facebook,
  //     method: AuthMethods.Popup,
  //   });
  // }
//   login() {
//     this.af.auth.login({
//       provider: AuthProviders.Facebook,
//       method: AuthMethods.Popup,
//     });
//   }

//   chatSend(theirMessage: string) {
//     this.items.push({ message: theirMessage, name: this.name.facebook.displayName});
//     this.msgVal = '';
// }
}
