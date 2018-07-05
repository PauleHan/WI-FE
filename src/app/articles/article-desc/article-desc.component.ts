import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Article } from '../article.model';
import { ArticleService } from './article.service';

@Component({
	selector: 'app-article-desc',
	templateUrl: './article-desc.component.html',
	styleUrls: ['./article-desc.component.scss']
})
export class ArticleDescComponent implements OnInit {

	article: Article;	
	author: string;
	permlink: string;
	private sub: any;

	constructor(
		private articleService: ArticleService,
		private route: ActivatedRoute
	) {}

	ngOnInit() {
		this.sub = this.route.params
		.subscribe(
			(params: Params) => {
    			this.author		= params['author'];
    			this.permlink	= params['permlink'];
    		}
    	);
    	
		this
		.articleService
		.getArticle(this.author, this.permlink)
		.subscribe(
			(data: Article) => {
				this.article = data;
			},
			// (res) => console.log(res),
			(error) => console.log(error)
		);
	}
	
	ngOnDestroy() {
		this.sub.unsubscribe();
	}
}
