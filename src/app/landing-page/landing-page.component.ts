import { Component, HostListener, OnInit } from '@angular/core';
import { ModalService } from '../_modal';
import exitIntent from 'exit-intent';

@Component({
	selector: 'app-landing-page',
	templateUrl: './landing-page.component.html',
	styleUrls: ['./landing-page.component.css'],
})
export class LandingPageComponent implements OnInit {
	constructor(private modalService: ModalService) {}

	ngOnInit(): void {
    const removeExitIntent = exitIntent({
      threshold: 50,
      maxDisplays: 1,
      eventThrottle: 100,
      onExitIntent: () => {
        this.onMouseLeave();
      }
    })
	}

	openModal(id: string) {
		this.modalService.open(id);
	}

	closeModal(id: string) {
		this.modalService.close(id);
	}

	onMouseLeave() {
		this.openModal('popup-mouseleave');
	}
}
