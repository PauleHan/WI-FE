import { Component, OnInit } from '@angular/core';
// import { Article } from './article.model';
import { ArticlesService } from './articles.service';

import { environment } from '../../environments/environment';

@Component({
	selector: 'app-articles',
	templateUrl: './articles.component.html',
	styleUrls: ['./articles.component.scss']
})

export class ArticlesComponent implements OnInit {
	
	// articles: Article[] = [];
	public articles: any;
	public urlApi: string = environment.api;
	
	constructor(private articlesService: ArticlesService) {}
	
	ngOnInit() {
		this
		.articlesService
		.getArticles()
		.subscribe(
			(data: any) => {
				// console.log(data)
				this.articles = data;
			},
			(error) => console.log(error)
		);
	}

}
