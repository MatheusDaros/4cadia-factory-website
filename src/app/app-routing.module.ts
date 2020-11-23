import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LandingSurveyComponent } from './landing-survey/landing-survey.component';
import { SurveyComponent } from './survey/survey.component';


const routes: Routes = [{ path: '', component: LandingPageComponent },{ path: 'survey', component: SurveyComponent },{ path: 'landing-survey', component: LandingSurveyComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
