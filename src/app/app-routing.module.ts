import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SurveyComponent } from './survey/survey.component';


const routes: Routes = [{ path: '', component: LandingPageComponent },{ path: 'survey', component: SurveyComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
