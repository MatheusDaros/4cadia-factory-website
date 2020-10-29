import { Component, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
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
	intro: boolean;
  pre: boolean;
  result: boolean;

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

  surveyElements: any;

	constructor(private elementRef: ElementRef, private formBuilder: FormBuilder) {
		this.form = this.formBuilder.group({
			answers: [''],
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
    const duration = (new Date()).getTime() - this.lastTime.getTime();
    const optionNumber = this.form.value.answers;
    const selectedOption = this.selectedElement.options[optionNumber];
    this.scoreOut += selectedOption.value1;
    this.scoreIn += selectedOption.value2;
    this.answerTable.push({question: this.selectedElement.question, answer: selectedOption.name, time: duration});
    this.lastTime = new Date();
    if (selectedOption.target === "finish"){
      this.result = true;
    }
    else if (selectedOption.target === "intro-article"){
      this.pre = true;
    }
    else {
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
}
