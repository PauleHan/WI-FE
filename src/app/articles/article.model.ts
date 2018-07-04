export class Article {
    
    constructor(
        public id: number, 
        public author: string, 
        public permlink: string, 
        public category: string, 
        public last_update: string, 
        public title: string, 
        public body: string, 
        public tags: any[], 
        public image: string
    ) {}
}