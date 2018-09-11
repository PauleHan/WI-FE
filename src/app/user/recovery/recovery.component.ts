import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UserService } from '../user.service';

@Component({
	selector: 'app-recovery',
	templateUrl: './recovery.component.html',
	styleUrls: ['./recovery.component.scss']
})
export class RecoveryComponent implements OnInit {
	
	user = {
		email: ""
	};
	
	constructor(
		private userService: UserService,
		private router: Router
	) {}
	
	recovery(user: any): void {
		
		this.userService.recoveryPassword(user.email);
		this.router.navigate(['/login']);
	}

	ngOnInit() {
	}

}
