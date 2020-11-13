import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { environment } from 'src/environments/environment';

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LandingPageComponent } from "./landing-page/landing-page.component";
import { SurveyComponent } from "./survey/survey.component";
import { ModalModule } from "./_modal";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgMediumModule } from "ng-medium";
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { RecaptchaFormsModule, RecaptchaModule } from 'ng-recaptcha';
import { LandingSurveyComponent } from './landing-survey/landing-survey.component';
import { SurveyPageComponent } from './survey-page/survey-page.component';

@NgModule({
	declarations: [AppComponent, LandingPageComponent, SurveyComponent, LandingSurveyComponent, SurveyPageComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		ModalModule,
		NgbModule,
		NgMediumModule,
		FormsModule,
		ReactiveFormsModule,
		AngularFireModule.initializeApp(environment.firebaseConfig),
		AngularFirestoreModule,
		RecaptchaModule,
		RecaptchaFormsModule 
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
