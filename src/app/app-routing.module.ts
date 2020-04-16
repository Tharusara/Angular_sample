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
// import { OktaCallbackComponent } from '@okta/okta-angular';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'posts', component: PostsComponent},
  {path: 'details/:id', component: DetailsComponent},
  {path: 'message', component: MessageComponent},
  {path: 'crud', component: CrudComponent},
  {path: 'contactlist', component: ContactlistComponent},
  {path: 'contactform', component: ContactformComponent},
  // { path: 'implicit/callback', component: OktaCallbackComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
