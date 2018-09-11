import { Injectable } from '@angular/core';

@Injectable()
export class GeoService {

	constructor() { }
	
	public pos: any;

	public getPosition() {
		window.navigator.geolocation.getCurrentPosition((position) => {
			this.pos = position;
		});
	}	
}
