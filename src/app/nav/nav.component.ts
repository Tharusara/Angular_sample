import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../_services/authentication.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
appTitle = 'My App';
  constructor(
    // private router: Router,
    // private authenticationService: AuthenticationService
                  ) { }

  ngOnInit(): void {
  }
//   logout() {
//     this.authenticationService.logout();
//     this.router.navigate(['/login']);
// }
}
