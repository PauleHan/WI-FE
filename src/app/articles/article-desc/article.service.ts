import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';

@Injectable()
export class ArticleService {

	constructor(private http: HttpClient) {}

    getArticle(author: string, permlink: string) {
    	
        return this.http.get(`${environment.api}/articles/${permlink}`);
    }
    
    setArticle(data: any) {
    	
    }
    
    getComments(articleId: string) {
    	
    	return this.http.get(`${environment.api}/comments?articles=${articleId}`);
    }
    
    setComment(data: any) {
    	
    	return this.http.post(`${environment.api}/comments`, data);
    }
    
    putLikesComment(idComment: string, data: any) {
    	
    	return this.http.put(`${environment.api}/comments/${idComment}`, data);
    }
    
    putLikesArticle(idArticle: string, data: any) {
    	
    	return this.http.put(`${environment.api}/articles/${idArticle}`, data);
    }
    
}
