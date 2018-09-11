import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService, SocialUser } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";

import { UserService } from '../user.service';

@Component({
	selector: 'app-sign-in',
	templateUrl: './sign-in.component.html',
	styleUrls: ['./sign-in.component.scss']
})

export class SignInComponent implements OnInit {

	user = {
		email: "",
		password: ""
	};
	
	constructor(
		private authService: AuthService,
		private userService: UserService,
		private router: Router
	) {}
	
	signUpStrategy() {
		
		this.authService
		.authState
		.subscribe((data: SocialUser) => {
			
			if(data) {
				this.user = {
					// username: data.name.replace(/\s/g, '').toLowerCase(),
	            	email: data.email,
	            	password: "hB5ZkDoQICv3"
				};
				
				// console.log(this.user);
				this.userService.signInLocal(this.user);
				
				// this.router.navigate(['/']);
				this.router.navigate(['/welcome']);
			}
		});	
	}

	signInWithGoogle(): void {
		this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
		this.signUpStrategy();
	}
 
	signInWithFB(): void {
		this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
		this.signUpStrategy();
	}
	
	signIn(user: any): void {
		
		this.userService.signInLocal(user);
		this.router.navigate(['/']);
	}
	
	ngOnInit() {
	}
 	
}
