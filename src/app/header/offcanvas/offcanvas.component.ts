import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';

@Component({
	selector: 'app-offcanvas',
	templateUrl: './offcanvas.component.html',
	styleUrls: ['./offcanvas.component.scss']
})
export class OffcanvasComponent implements OnInit, OnChanges {
	
	@Input() сategoriesStatus: boolean;
	@Input() menuStatus: boolean;
	
	isCategoriesActive: boolean = false;
	isMenuActive: boolean = false;
	
	constructor() {}

	ngOnInit() {
	}
	
	ngOnChanges(changes: SimpleChanges) {
        if (changes.сategoriesStatus) {
            this.isCategoriesActive = changes.сategoriesStatus.currentValue;
        }
        if (changes.menuStatus) {
            this.isMenuActive = changes.menuStatus.currentValue;
        }
    }
}
