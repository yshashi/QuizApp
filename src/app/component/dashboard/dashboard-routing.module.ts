import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { QuestionsComponent } from './questions/questions.component';
import { WelcomeComponent } from './welcome/welcome.component';


const routes: Routes = [
  {path:'', component:DashboardComponent,
  children:[
    {path:'', redirectTo : 'welcome', pathMatch:'full'},
    {path:'welcome', component: WelcomeComponent},
    {path:'question', component:QuestionsComponent}
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
