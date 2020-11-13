import { Component, ElementRef, HostListener, OnInit, ViewChild } from "@angular/core";
import { ModalService } from "../_modal";
import exitIntent from "../../../node_modules/exit-intent-mobile-bugfix/src/exit-intent.js"

@Component({
	selector: "app-landing-page",
	templateUrl: "./landing-page.component.html",
	styleUrls: ["./landing-page.component.css"],
})
export class LandingPageComponent implements OnInit {

	constructor(private modalService: ModalService) {
	}

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
}
