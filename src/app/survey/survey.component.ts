import { Component, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgMediumStyles } from 'ng-medium/lib/models/ngMediumStyles';
import { environment } from 'src/environments/environment';
import * as surveyTable from './survey.json';

@Component({
	selector: 'app-survey',
	templateUrl: './survey.component.html',
	styleUrls: ['./survey.component.css'],
})
export class SurveyComponent implements OnInit, OnDestroy {
	feedUrl = environment.mediumFeedUrl;

	feedStyle: NgMediumStyles = environment.mediumStyle;

	form: FormGroup;
	formContact: FormGroup;

	intro: boolean;
	pre: boolean;
	result: boolean;
	finalForm: boolean;

	scoreOut: number;
	scoreIn: number;

	startTime: Date;
	lastTime: Date;
	endTime: Date;

	answerTable: any[];

	selectedElement: {
		question: string;
		options: { name: string; value1: number; value2: number; target: string }[];
	};

	resultStrategy: string;
	resultDescription: string;

	surveyElements: any;

	constructor(private elementRef: ElementRef, private formBuilder: FormBuilder) {
		this.form = this.formBuilder.group({
			answers: [''],
		});
		this.formContact = this.formBuilder.group({
			name: ['', Validators.required],
			company: [''],
			role: [''],
			email: ['', Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])],
			phone: [''],
			terms: [false, Validators.requiredTrue],
			agree: [false, Validators.requiredTrue],
		});
		this.surveyElements = (surveyTable as any).default;
		this.scoreOut = 0;
		this.scoreIn = 0;
		this.answerTable = [];
	}

	savedBg: any;

	ngOnInit(): void {
		this.savedBg = this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor;
		this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#071D49';
		this.intro = true;
		this.result = false;
	}

	ngOnDestroy(): void {
		this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = this.savedBg;
	}

	start() {
		this.intro = false;
		this.setForm('start');
		this.startTime = new Date();
		this.lastTime = new Date();
	}

	next() {
		const duration = new Date().getTime() - this.lastTime.getTime();
		const optionNumber = this.form.value.answers;
		const selectedOption = this.selectedElement.options[optionNumber];
		this.scoreOut += selectedOption.value1;
		this.scoreIn += selectedOption.value2;
		this.answerTable.push({ question: this.selectedElement.question, answer: selectedOption.name, time: duration });
		this.lastTime = new Date();
		if (selectedOption.target.substr(0, 6) === 'finish') {
			this.pre = true;
			this.result = true;
			this.endTime = this.lastTime;
			const outsource = this.scoreOut >= this.scoreIn;
			this.resultStrategy = outsource ? 'outsource the project' : 'develop the project internally';
			if (selectedOption.target === 'finish-startup') {
				this.resultDescription = outsource
					? 'Trying to develop blockchain projects internally in your startup at your stage might be very risky, and the re\
          wards might not be worth it. You have high chances of spending your budget without generating much value from the\
           technology once (or if) your project is completed. Outsourcing your project with experts would considerably redu\
          ce your risks, and could be very strategic to deliver high value from this project'
					: 'Your startup has a lot of factors indicating that you should develop your blockchain MVP in-house. Outsourcing\
           might be a good second option once your company reaches scale-up phase';
			} else {
				this.resultDescription = outsource
					? 'Trying to develop blockchain projects internally in your company at your state might be very risky, and the re\
          wards might not be worth it. You have high chances of spending your budget without generating much value from the\
           technology once (or if) your project is completed. Outsourcing your project with experts would considerably redu\
          ce your risks, and could be very strategic to deliver high value from this project'
					: 'Your company or group is able to take care of blockchain projects internally. Congratulations!';
			}
		} else if (selectedOption.target === 'intro-article') {
			this.pre = true;
		} else {
			this.setForm(selectedOption.target);
		}
	}

	setForm(id: string) {
		this.selectedElement = this.surveyElements[id];
		this.form = this.formBuilder.group({
			answers: [''],
		});
		this.form.controls.answers.patchValue(0);
	}

	finish() {
		this.pre = false;
		this.result = true;
	}

	final() {
		this.result = false;
		this.finalForm = true;
	}

	send() {
		const payload = {
			form: this.formContact.value,
			survey: this.answerTable,
			date: this.lastTime.toUTCString(),
			score: { outsource: this.scoreOut, inhouse: this.scoreIn, diff: this.scoreOut - this.scoreIn },
		};
		console.log(payload);
	}
}
