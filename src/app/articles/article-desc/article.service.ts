import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ArticleService {

	constructor(private http: HttpClient) {}

    getArticle(author: string, permlink: string) {
    	
        const url = 'https://wiki-investigation-paulehan.c9users.io:8081/api';
        return this.http.get(`${url}/article/${author}/${permlink}`);
    } 
}
