import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NgMediumStyles } from 'ng-medium/lib/models/ngMediumStyles';
import { environment } from 'src/environments/environment';
import { ModalService } from '../_modal';

@Component({
  selector: 'app-survey-page',
  templateUrl: './survey-page.component.html',
  styleUrls: ['./survey-page.component.css']
})
export class SurveyPageComponent implements OnInit {
	form: FormGroup;

	Industry = ["Healthcare", "Government", "Insurance", "Finance", "Notary", "Education", "Construction", "Food", "Information", "Other"];

	constructor(private formBuilder: FormBuilder) {
		this.form = this.formBuilder.group({
			industry: [""],
		});
	}

	feedUrl = environment.mediumFeedUrl;

	feedStyle: NgMediumStyles = environment.mediumStyle;

	ngOnInit(): void {
	}

	changeForm(){
		if (this.form.controls.industry.value == "Other") return;
		this.feedUrl = environment.mediumFeedUrl + "/tagged/" + this.form.controls.industry.value;
	}
}
