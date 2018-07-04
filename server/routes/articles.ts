import { Request, Response, Router } from "express";
import * as removeMD from "remove-markdown";
import * as rp from "request-promise-native";

const articlesRouter: Router = Router();

articlesRouter.get("/", (request: Request, response: Response) => {
    
    // let baseUrl: string = 'https://jsonplaceholder.typicode.com';
    // let baseUrl: string = 'https://httpbin.org/post';
    const baseUrl: string = 'https://api.steemit.com';
    const options = {
        method: 'POST',
        uri: baseUrl,
        body: {
            jsonrpc: "2.0", 
            method: "get_discussions_by_hot", 
            params: [{limit: 10, tag: "life"}],
            id: 323
        },
        json: true
    };
    
    function strip_html_tags(str)
    {
        if ((str === null) || (str === '')) {
            return false;
        }
        else {
            str = str.toString();
        }
        return str.replace(/<[^>]*>/g, '');
    }
    
    async function getArticles () {  
        try {
            let data = await rp.post(options);

            let res = Array();
            
            interface resItem {
                id: number;
                author: string;
                permlink: string;
                category: string;
                last_update: string;
                title: string;
                body: string;
                tags: any[];
                image: string;
            }
            
            for (let item of data.result) {
            
                let resItem = <resItem>{};
                
                resItem.id          = item.id;
                resItem.author      = item.author;
                resItem.permlink    = "long-grid/" + item.author + "/" + item.permlink;
                resItem.category    = item.category;
                resItem.last_update = item.last_update;
                resItem.title       = item.title;
                
                let body            = removeMD(item.body);
                resItem.body        = body.substring(0, 140) + " ...";
                
                let payload         = JSON.parse(item.json_metadata);
                resItem.tags        = payload.tags ? payload.tags : null;
                resItem.image       = payload.image ? payload.image[0] : null;
                
                res.push(resItem);
            }           

            response.json(res);
        }
        catch (err) {
            response.json('Failed: ' + err.message);
        }
    }
    getArticles();
    
});

export { articlesRouter };