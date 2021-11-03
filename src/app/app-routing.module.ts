import { LoginComponent } from './component/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './component/register/register.component';

const routes: Routes = [
  {  path:'', redirectTo:'login', pathMatch:'full'},
  {  path:'login', component:LoginComponent},
  {  path:'register', component:RegisterComponent},
  {path:'home',loadChildren:()=>import('./component/dashboard/dashboard.module').then(a=>a.DashboardModule)},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
