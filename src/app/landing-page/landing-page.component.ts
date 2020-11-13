import { Component, ElementRef, HostListener, OnInit, ViewChild } from "@angular/core";
import { ModalService } from "../_modal";
import exitIntent from "../../../node_modules/exit-intent-mobile-bugfix/src/exit-intent.js"
import { NgMediumStyles } from "ng-medium/lib/models/ngMediumStyles";
import { environment } from "src/environments/environment";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
	selector: "app-landing-page",
	templateUrl: "./landing-page.component.html",
	styleUrls: ["./landing-page.component.css"],
})
export class LandingPageComponent implements OnInit {
	form: FormGroup;

	Industry = ["Healthcare", "Government", "Insurance", "Finance", "Notary", "Education", "Construction", "Food", "Information", "Other"];

	constructor(private modalService: ModalService, private formBuilder: FormBuilder) {
		this.form = this.formBuilder.group({
			industry: [""],
		});
	}

	feedUrl = environment.mediumFeedUrl;

	feedStyle: NgMediumStyles = environment.mediumStyle;

	ngOnInit(): void {
		const removeExitIntent = exitIntent({
			maxDisplays: 1,
			eventThrottle: 100,
			showAfterInactiveSecondsDesktop: 30,
			showAfterInactiveSecondsMobile: 5,
			onExitIntent: () => {
				this.onMouseLeave();
			},
		});
	}

	openModal(id: string) {
		this.modalService.open(id);
	}

	closeModal(id: string) {
		this.modalService.close(id);
	}

	onMouseLeave() {
		this.openModal("popup-mouseleave");
	}

	changeForm(){
		if (this.form.controls.industry.value == "Other") return;
		this.feedUrl = environment.mediumFeedUrl + "/tagged/" + this.form.controls.industry.value;
	}
}
