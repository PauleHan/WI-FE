import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../environments/environment';

@Injectable()
export class ArticlesService {
    
    constructor(private http: HttpClient) {}
    
    putArticle() {
        
        return true;   
    }
    
    setArticle(data: any) {
        
        return this.http.post(`${environment.api}/articles`, data);
    }
    
    getArticles() {
        
        return this.http.get(`${environment.api}/articles?_sort=createdAt:desc`);
    }
    
    getTypes() {
        
        return this.http.get(`${environment.api}/articletypes`);
    }
    
    getLocations() {
        
        return this.http.get(`${environment.api}/locations`);
        
    }
    
    setFileUpload(data: any) {

        return this.http.post(`${environment.api}/upload`, data);
    }
    
}