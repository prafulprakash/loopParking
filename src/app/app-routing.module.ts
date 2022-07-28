import { SpotSwapComponent } from './spot-swap/spot-swap.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';

const routes: Routes = [
  {path:"login",component:LoginPageComponent},
  {path:"home",component:HomePageComponent},
  {path:"how-it-works",component:HowItWorksComponent},
  {path:"spot-swap",component:SpotSwapComponent},
  {path:"**",redirectTo:'/login', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}
