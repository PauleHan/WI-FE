import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService, SocialUser } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";

import { UserService } from '../user.service';

@Component({
	selector: 'app-sign-up',
	templateUrl: './sign-up.component.html',
	styleUrls: ['./sign-up.component.scss']
})

export class SignUpComponent implements OnInit {
	
	user = {
		email: "",
		username: "",
		phone: "",
		password: "",
		confirmPass: ""
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
					username: data.name.replace(/\s/g, '').toLowerCase(),
	            	email: data.email,
	            	phone: '',
	            	password: 'hB5ZkDoQICv3',
	            	confirmPass: 'hB5ZkDoQICv3'
				};
				
				this.userService.steemGetPrivateKey(this.user.username, this.user.password);
				
				console.log(this.user);
				this.signUp(this.user);
				
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
	
	signUp(user: any): void {
		
		this.userService.signUpLocal(user);
	}
	
	ngOnInit() {
		
	}

}
