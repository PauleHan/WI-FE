import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ArticlesService {
    
    constructor(private http: HttpClient) {}
    
    // storeArticles(articles: any[]) {
    //     const headers = new Headers({'Content-Type': 'application/json'});
    //     return this.http.get('https://wiki-investigation-paulehan.c9users.io:8081/api/articles', 
    //     articles,
    //     {headers: headers});
    // }
    
    // getArticles(articles: any[]) {
    //     return this.http.get('https://wiki-investigation-paulehan.c9users.io:8081/api/articles', 
    //     articles);
    // }si
    
    getArticles() {
        const url = 'https://wiki-investigation-paulehan.c9users.io:8081/api';
        return this.http.get(`${url}/articles`);
    }
}