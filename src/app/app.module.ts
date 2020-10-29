import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SurveyComponent } from './survey/survey.component';
import { ModalModule } from './_modal';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgMediumModule } from 'ng-medium';

@NgModule({
	declarations: [AppComponent, LandingPageComponent, SurveyComponent],
	imports: [BrowserModule, AppRoutingModule, ModalModule, NgbModule, NgMediumModule, FormsModule, ReactiveFormsModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
