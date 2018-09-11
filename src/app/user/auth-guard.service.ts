import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from "angularx-social-login";

@Injectable()

export class AuthGuardService implements CanActivate {

	loggedIn: boolean;
	
	constructor(private authService: AuthService) { }
	
	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
		
		this.authService
		.authState
		.subscribe((user) => {
			this.loggedIn = (user != null);
			// console.log('Status1 user: ' + this.loggedIn);
		});
		
		// console.log('Status2 user: ' + this.loggedIn);
		// return !this.loggedIn;
		
		return true;
	}
	
	// canNotActivate(route: ActivatedRouteSnapshot, state: RouterStateSnaphot): boolean {
		
	// 	return true;
	// }
	
}
