import { Component, OnInit } from '@angular/core';
import { AuthService } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";

import { UserService } from '../user.service';

@Component({
	selector: 'app-cabinet',
	templateUrl: './cabinet.component.html',
	styleUrls: ['./cabinet.component.scss']
})
export class CabinetComponent implements OnInit {

	user: any;
	socialUser: SocialUser;
	
	public photoUrl: string;
	public countArticle = 0;
	public countComment = 0;
	
	constructor(
		private authService: AuthService,
		private userService: UserService
	) {}

	ngOnInit() {
		
		const local = this.userService.authState();
		console.log(local);
		
		this.user = {
			id: local.user._id,
			authToken: local.jwt,
			idToken: "",
			name: local.user.username,
			firstName: local.user.firstName,
			lastName: local.user.lastName,
			email: local.user.email,
			keyMemo: local.user.keyMemo,
			keyActive: local.user.keyActive,
			photoUrl: local.user.photoUrl ? local.user.photoUrl : "assets/img/account/user-default.png",
			provider: "LOCAL"
		};
		
		this.photoUrl = local.user.photoUrl ? local.user.photoUrl : "assets/img/account/user-default.png";
		
		this.userService
		.getCountArticle(this.user.id)
		.subscribe((data: any) => {		
			this.countArticle = data;
		},
		(error) => this.countArticle = 0);	
		
		this.userService
		.getCountComments(this.user.id)
		.subscribe((data: any) => {		
			this.countComment = data;
		},
		(error) => this.countComment = 0);
		
		// console.log(this.user);
		
		this.authService
		.authState
		.subscribe((socialUser: SocialUser) => {
			
			if(socialUser) {
				this.socialUser = socialUser;
				this.photoUrl = socialUser.photoUrl;
			}
		});	
	
	}

}
