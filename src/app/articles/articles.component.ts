import { Component, OnInit } from '@angular/core';
import { Article } from './article.model';
import { ArticlesService } from './articles.service';

@Component({
	selector: 'app-articles',
	templateUrl: './articles.component.html',
	styleUrls: ['./articles.component.scss']
})

export class ArticlesComponent implements OnInit {
	
	articles: Article[] = [];
	
	constructor(private articlesService: ArticlesService) {}
	
	ngOnInit() {
		this
		.articlesService
		.getArticles()
		.subscribe(
			(data: Article[]) => {
				this.articles = data;
			},
			// (res) => console.log(res),
			(error) => console.log(error)
		);
	}

}
