import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArticlesService } from '../articles.service';

@Component({
	selector: 'app-crowd-add',
	templateUrl: './crowd-add.component.html',
	styleUrls: ['./crowd-add.component.scss']
})
export class CrowdAddComponent implements OnInit {

	public article = {
		title:		"",
		preview:	""
	}
	
	private reqArticle: any;
	
	constructor(
		private router: Router,
		private articlesService: ArticlesService
	) {}

	addCrowd(article) {

		// console.log(article);
		
		this.reqArticle = {
			title: article.title,
			preview: article.preview,
			crowd: true,
			user: {
				_id: "5b82afd0f1b11432b5e33e41"
			},
			permlink: Math.floor(Math.random() * 99999999)
		}
		
		console.log(this.reqArticle);
		
		this.articlesService
		.setArticle(this.reqArticle)
		.subscribe((res: any) => {
						
			console.log(res);
			this.router.navigate(['/']);
		},
		(error) => console.log(error)
		);
	}

	ngOnInit() {
		
	}

}
