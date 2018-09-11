import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { AuthService } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";

import { UserService } from '../../user/user.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})

export class ToolbarComponent implements OnInit, OnDestroy {
	
	@Output() searchStatus: EventEmitter<boolean> = new EventEmitter();
	
	subscription: Subscription;
	
	user: any;
	socialUser: SocialUser;
	photoUrl: string;
	userName: string;
	
	private isOnSearch: boolean = false;
	
	loggedIn: boolean;
	
	constructor(
		private authService: AuthService,
		private userService: UserService,
		private router: Router,
		
	) {}

	signOut(): void {
		
		const local = this.userService.authState();
		
		// this.loggedIn = null;
		
		this.userService.signOutLocal();
		this.authService.signOut();
		
		this.router.navigate(['/']);
	}
	
	onSearch() {
		this.isOnSearch = !this.isOnSearch;
		this.searchStatus.emit(this.isOnSearch);
	}
	
	ngOnInit() {
		
		this.subscription = this.userService
		.getLoggedIn()
		.subscribe((data: boolean) => {
			console.log('User Auth: ' + data);
			this.loggedIn = data;
		});
		
		const local = this.userService.authState();
		
		if(local) {
			this.user = {
				id: local.user._id,
				authToken: local.jwt,
				idToken: "",
				name: local.user.username,
				firstName: local.user.firstName,
				lastName: local.user.lastName,
				email: local.user.email,
				photoUrl: local.user.photoUrl ? local.user.photoUrl : "assets/img/account/user-default.png",
				provider: "LOCAL"
			};
			
			this.photoUrl = local.user.photoUrl ? local.user.photoUrl : "assets/img/account/user-default.png";
			this.userName = local.user.username;
			
			// this.loggedIn = (this.user != null);
			this.userService.setLoggedIn(this.user != null)
		}

		this.authService
		.authState
		.subscribe((socialUser) => {
			
			if(socialUser) {
				// console.log(socialUser);
				this.socialUser = socialUser;
				this.photoUrl = socialUser.photoUrl;
				this.userName = socialUser.name.replace(/\s/g, '').toLowerCase();
				
				// this.loggedIn = (this.socialUser != null);
				this.userService.setLoggedIn(this.socialUser != null)
			}
		});
		
		// console.log(this.loggedIn);
	}
	
	ngOnDestroy(): void {

        this.subscription.unsubscribe();
    }
}
