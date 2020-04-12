import { Component, OnInit } from '@angular/core';
// import { AuthProviders,AuthMethods} from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
// import { AngularFire, AuthProviders, AuthMethods,FirebaseListObservable } from 'angularfire2';
// import { FirebaseListObservable, AngularFire, AuthProviders, AuthMethods} from 'angularfire2';
import {  AngularFireObject, AngularFireList, AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
//  items: FirebaseListObservable<any>;
  name: any;
  msgVal = '';

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
