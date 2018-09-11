import { Component, OnInit, Output, EventEmitter, Input, OnChanges, SimpleChanges, Renderer2 } from '@angular/core';

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnChanges {
	
	@Input() searchStatus: boolean;
	
	@Output() сategoriesStatus: EventEmitter<boolean> = new EventEmitter();
	@Output() menuStatus: EventEmitter<boolean> = new EventEmitter();
	
	isSearchActive: boolean = false;
	
	private isCategoriesActive: boolean = false;
	private isMenuActive: boolean = false;
	
	constructor(private renderer: Renderer2) {}

	ngOnInit() {
	}
	
	ngOnChanges(changes: SimpleChanges) {
        if (changes.searchStatus) {
            this.isSearchActive = changes.searchStatus.currentValue;
            // console.log(this.isSearchActive);
        }
    }

	private сategoriesOpen() {
		this.renderer.addClass(document.body, 'offcanvas-open');
		this.renderer.setStyle(document.body, 'overflow', 'hidden');
		this.сategoriesStatus.emit(this.isCategoriesActive);
	}
	
	private сategoriesClose() {
		setTimeout(() => {
			this.renderer.removeClass(document.body, 'offcanvas-open');
			this.renderer.setStyle(document.body, 'overflow', 'visible');
			this.сategoriesStatus.emit(this.isCategoriesActive);
		}, 450);
	}
	
	private menuOpen() {
		this.renderer.addClass(document.body, 'offcanvas-open');
		this.renderer.setStyle(document.body, 'overflow', 'hidden');
		this.menuStatus.emit(this.isMenuActive);
	}
	
	private menuClose() {
		setTimeout(() => {
			this.renderer.removeClass(document.body, 'offcanvas-open');
			this.renderer.setStyle(document.body, 'overflow', 'visible');
			this.menuStatus.emit(this.isMenuActive);
		}, 450);
	}
	
	toggleCategories() {		
		this.isCategoriesActive = !this.isCategoriesActive;
		this.isCategoriesActive ? this.сategoriesOpen() : this.сategoriesClose();
	}
	
	toggleMenu() {
		
		this.isMenuActive = !this.isMenuActive;
		this.isMenuActive ? this.menuOpen() : this.menuClose();
	}
}
