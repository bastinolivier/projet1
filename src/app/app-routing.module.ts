import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SigninComponent } from './Login/signin/signin.component';
import { AuthGuard } from './Login/_helpers/auth.guard';
import { UserPageComponent } from './UserAuth/user-page.component';
import {NewsPageComponent} from './UserAuth/news-page/news-page.component';
import {ToolsPageComponent} from './UserAuth/tools-page/tools-page.component'; 
import { ContactComponent } from './UserAuth/contact/contact.component';
import { HomeComponent } from './Home/home.component';
import { LoginComponent } from './Login/login/login.component';



const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'userAuth', component: UserPageComponent, canActivate: [AuthGuard]}, 
  {path: 'newsPage' , component: NewsPageComponent, canActivate: [AuthGuard]},
  {path: 'toolsPage' , component: ToolsPageComponent, canActivate: [AuthGuard]},
  {path: 'humanRessource' , component: ContactComponent, canActivate: [AuthGuard]},
  { path: 'signin', component: SigninComponent},
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }