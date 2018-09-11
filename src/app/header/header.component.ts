import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
		
	isCategoriesActive: boolean = false;
	isMenuActive: boolean = false;
	isSearchActive: boolean = false;
	
	constructor() { }

	ngOnInit() {
	}
	
	setCategoriesStatus(event) {
		this.isCategoriesActive = event;
	}
	
	setMenuStatus(event) {
		this.isMenuActive = event;
	}
	
	setSearchStatus(event) {
		this.isSearchActive = event;
	}
}
