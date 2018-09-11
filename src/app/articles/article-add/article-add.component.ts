import { Component, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';
import { Router } from '@angular/router';
import { FileHolder } from "angular2-image-upload";
import { ArticlesService } from '../articles.service';
import { GeoService } from '../geo.service';


@Component({
	selector: 'app-article-add',
	templateUrl: './article-add.component.html',
	styleUrls: ['./article-add.component.scss']
})

export class ArticleAddComponent implements OnInit {
	
	public article = {
		media:		null,
		type:		"",
		location:	"",
		title:		"",
		preview:	"",
		body:		"",
		tags:		"wiki ЛонгГрід Запис"
	}
	
	public listTypes: any[] = [];
	public listLocations: any[] = [];
	public file = {
		name: '',
		id: null
	};
  
	private reqArticle: any;
	private pos: any;
	
	constructor(
		private router: Router,
		private geoService: GeoService,
		private articlesService: ArticlesService
		) {}

	onUpload(file) {
		// console.log(file.src);
		this.articlesService
		.setFileUpload(file)
		.subscribe((res: any) => {
			
			this.file.id = res[0].id;		
			// console.log(this.file.id);
		},
		(error) => console.log(error)
		);
	}
	
	onFileChanged(event) {
		
		let target = event.target || event.srcElement;   	
    	this.file.name = target.files[0].name;
    	
    	const formData = new FormData();
    	formData.append('files', target.files[0]);
    	
    	this.onUpload(formData);
	}

	
	addArticle(article) {

		// console.log(article);
		
		this.reqArticle = {
			title: article.title,
			preview: article.preview,
			body: article.body,
			tags: article.tags.split(" "),
			articletypes: {
				_id: article.type
			},
			locations: {
				_id: article.location
			},
			user: {
				_id: "5b82afd0f1b11432b5e33e41"
			},
			media: {
				_id: this.file.id
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
		
		this.articlesService.getTypes()
		.subscribe((data: any) => {		
			this.listTypes = data;
			// console.log(data);
		});
		
		this.articlesService.getLocations()
		.subscribe((data: any) => {		
			this.listLocations = data;
			// console.log(data);
		});
		
		this.pos = this.geoService.getPosition();
		// console.log(this.pos); 
		
		// this
		// .articlesService
		// .putArticle()
		// .subscribe(
		// 	(data: any) => {
		// 		console.log(data)
		// 	},
		// 	(error) => console.log(error)
		// );
	}
	
	// ngOnChanges(changes: SimpleChanges) { }

}
