import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

import { environment } from '../../environments/environment';

@Injectable()
export class UserService {
	
	private subject = new Subject<any>();
	private storeUser = new Subject<any>();
	private statusAuth: boolean;
	private userId: string;
	
	constructor(
		private http: HttpClient,
		private router: Router) {}

	getStatusAuth() {		
		return this.statusAuth;
	}
	
	getLoggedIn(): Observable<any> {
		return this.subject.asObservable();
	}
	
	setLoggedIn(status: boolean): void {
        this.subject.next(status);
        this.statusAuth = status;
    }
    
    getUserId() {
		return this.userId;
    }
    
    setUserId(id: string) {
    	this.userId = id;
    }
	
	signUpLocal(user) {
	    
        const userData = {
            username: user.username,
            email: user.email,
            phone: user.phone,
            password: user.password
        }
        
        this.http.post(`${environment.api}/auth/local/register`, userData)
        .subscribe((user: any) => {
            localStorage.setItem('local', JSON.stringify(user));
            this.router.navigate(['/welcome']);
        },
		(error) => console.log(error));
	}
	
	signInLocal(user) {
	    
        const userData = {
            identifier: user.email, // The identifier param can either be an email or a username.
            password: user.password
        }
		
        return this.http
            .post(`${environment.api}/auth/local`, userData)
            .subscribe((user: any) => {
            	
            	console.log(user);
                localStorage.setItem('local', JSON.stringify(user));
                this.setLoggedIn(true);
            },
    		(error) => console.log(error));
	}
	
	signOutLocal() {
	    
	    localStorage.removeItem('local');
	    this.setLoggedIn(false);
	}
	
	authState() {
	    
	    const local = JSON.parse(localStorage.getItem('local'));
	    
	    if(local) {
			this.setUserId(local.user._id);
	    }
		
	    return local ? local : false;
	}
	
	recoveryPassword(email) {
	    
	    const urlRecovery = environment.host + '/recovery';
	    
	    const data = {
	        email: email,
	        url: urlRecovery
	    };
	    
	    this.http.post(`${environment.api}/auth/forgot-password`, data)
	    .subscribe(
	        (res: any) => console.log(res),
    		(error) => console.log(error)
    	);
	}
	
	steemGetPrivateKey(username, password) {
				
		const dataMemo = {
			jsonrpc: "2.0", 
			method: "get_private_key_from_password", 
			params: [username, "memo", password], 
			id: "323"
		};
		
		this.http.post(environment.bcWallet, dataMemo)
	    .subscribe(
	        (res: any) => console.log(res),
    		(error) => console.log(error)
    	);
	}
	
	getCountArticle(userId) {

		return this.http.get(`${environment.api}/articles/count/?user=${userId}`);
	}
	
	getCountComments(userId) {

		return this.http.get(`${environment.api}/comments/count/?user=${userId}`);
	}

}
