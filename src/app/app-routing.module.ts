import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Composant1Component } from './Home/composant1.component';
import { Composant2Component } from './Login/composant2.component';
import { SigninComponent } from './Login/signin/signin.component';
import { AuthGuard } from './Login/_helpers/auth.guard';
import { UserPageComponent } from './UserAuth/user-page.component';



const routes: Routes = [
  { path: 'composant1', component: Composant1Component },
  { path: 'composant2', component: Composant2Component },
  { path: 'userAuth', component: UserPageComponent, canActivate: [AuthGuard] },
  { path: 'signin', component: SigninComponent},
  { path: '**', redirectTo: 'composant1' },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }