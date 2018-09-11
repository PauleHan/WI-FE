import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from "rxjs/Observable";
import { Subscription } from 'rxjs/Subscription';

import { Article } from '../article.model';
import { ArticleService } from './article.service';
import { UserService } from '../../user/user.service';

import { environment } from '../../../environments/environment';

@Component({
	selector: 'app-article-desc',
	templateUrl: './article-desc.component.html',
	styleUrls: ['./article-desc.component.scss']
})
export class ArticleDescComponent implements OnInit, OnDestroy {
	
	article: any;
	comments: any[] = [];
	
	// subscription: Subscription;
	
	public comment = {
		username: "",
		body: ""
	};
	dataComment: any;
	
	public author: string;
	public permlink: string;
	public urlApi: string = environment.api;
	
	public statusAuth: boolean;
	
	private sub: any;
	private userId: string;

	constructor(
		private articleService: ArticleService,
		private userService: UserService,
		private route: ActivatedRoute
	) {}

	ngOnInit() {
		
		this.userService.authState();
		console.log(this.userService.getUserId())
		this.userId = this.userService.getUserId();
		this.statusAuth = this.userService.getStatusAuth();
		
		// this.subscription = this.userService
		// .getLoggedIn()
		// .subscribe((data: boolean) => {
		// 	console.log('Comment ready: ' + data);
		// 	this.loggedIn = data;
		// });
		
		this.sub = this.route.params
		.subscribe(
			(params: Params) => {

    			this.author		= params['author'];
    			this.permlink	= params['permlink'];
    			this.dataComment = {
    				"articles": {
    					"_id": params['permlink']
    				}
    			}
    			
    		}
    	);
    	
		this
		.articleService
		.getArticle(this.author, this.permlink)
		.subscribe(
			(data: any) => {
				
				this.article = data;
				
				// this.comments = data.comments;
				// console.log(this.comments);
			},
			(error) => console.log(error)
		);
		
		this
		.articleService
		.getComments(this.permlink)
		.subscribe(
			(data: any) => {
				
				this.comments = data;
				// console.log(data);
			},
			(error) => console.log(error)
		);
	}
	
	ngOnDestroy(): void {
		
		this.sub.unsubscribe();
		// this.subscription.unsubscribe();
	}
	
	sendComment(comment: any): void {
		
		this.dataComment.likes		= 0;
		this.dataComment.dislikes	= 0;
		// this.dataComment.name		= comment.name;
		// this.dataComment.email		= comment.email;
		this.dataComment.body		= comment.body;
		this.dataComment.user		= this.userId;
		
		if (comment.body) {
			
			console.log(this.dataComment)
			
			this.articleService
			.setComment(this.dataComment)
			.subscribe(
				(resComment) => {
					
					this.comments.push(resComment);
					
					// Reset Form
					this.comment = {
						username: "",
						body: ""
					};
				},
				(error) => console.log(error)
			);
		}
		
		// https://stackoverflow.com/questions/36655922/resetting-a-form-in-angular-2-after-submit
		// this.form.reset();
	}

	likeArticle(idArticle: string, likes: number): void {
		
		const data = {
			likes: +(likes + 1)
		}
		
		this.articleService.putLikesArticle(idArticle, data)
		.subscribe(
			(res) => {
				this.article.likes = data.likes;
				// console.log(res)
			},
			(error) => console.log(error)
		);
			
		// console.log('Like article: ' + idArticle + ' ' + data.likes)	
	}
	
	dislikeArticle(idArticle: string, dislikes: number): void {
		
		const data = {
			dislikes: +(dislikes + 1)
		}
		
		this.articleService.putLikesArticle(idArticle, data)
		.subscribe(
			(res) => {
				this.article.dislikes = data.dislikes;
				// console.log(res)
			},
			(error) => console.log(error)
		);
		
		// console.log('Dislike comment: ' + idArticle + ' ' + data.dislikes)	
	}
	
	likeComment(idComment: string, likes: number): void {
		
		const data = {
			likes: +(likes + 1)
		}
		
		this.articleService.putLikesComment(idComment, data)
		.subscribe(
			(res) => {
				
				console.log(res)
			},
			(error) => console.log(error)
		);
			
		console.log('Like comment: ' + idComment + ' ' + data.likes)	
	}
	
	dislikeComment(idComment: string, dislikes: number): void {
		
		const data = {
			dislikes: +(dislikes + 1)
		}
		
		this.articleService.putLikesComment(idComment, data)
		.subscribe(
			(res) => {
				
				console.log(res)
			},
			(error) => console.log(error)
		);
		
		console.log('Dislike comment: ' + idComment + ' ' + data.dislikes)	
	}
}
