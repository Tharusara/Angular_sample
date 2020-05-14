import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PostsComponent } from './posts/posts.component';
import { DetailsComponent } from './details/details.component';
import { MessageComponent } from './message/message.component';
import { CrudComponent } from './Crud2/crud/crud.component';
import { ContactlistComponent } from './Crud2/contactlist/contactlist.component';
import { ContactformComponent } from './Crud2/contactform/contactform.component';
import { AuthGuard } from './helpers/auth.guard';
import { LoginComponent } from './login/login.component';
import { PeoplelistComponent } from './Crud2/peoplelist/peoplelist.component';
// import { OktaCallbackComponent } from '@okta/okta-angular';


const routes: Routes = [
  {path: '', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'people', component: PeoplelistComponent, canActivate: [AuthGuard]},
  { path: 'login', component: LoginComponent },
      // otherwise redirect to home
  // { path: '**', redirectTo: '' },
  {path: 'about', component: AboutComponent, canActivate: [AuthGuard]},
  {path: 'contact', component: ContactComponent, canActivate: [AuthGuard]},
  {path: 'posts', component: PostsComponent, canActivate: [AuthGuard]},
  {path: 'details', component: DetailsComponent, canActivate: [AuthGuard]},
  {path: 'message', component: MessageComponent, canActivate: [AuthGuard]},
  {path: 'crud', component: CrudComponent, canActivate: [AuthGuard]},
  {path: 'contactlist', component: ContactlistComponent, canActivate: [AuthGuard]},
  // { path: 'implicit/callback', component: OktaCallbackComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
