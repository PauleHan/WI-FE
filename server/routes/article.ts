import { Request, Response, Router } from "express";
import * as removeMD from "remove-markdown";
import * as rp from "request-promise-native";

const articleRouter: Router = Router();

// GET Article
articleRouter.get("/:author/:permlink", (request: Request, response: Response) => {

    const author = request.params.author;
    const permlink = request.params.permlink;
      
    // let baseUrl: string = 'https://jsonplaceholder.typicode.com';
    // let baseUrl: string = 'https://httpbin.org/post';
    const baseUrl: string = 'https://api.steemit.com';
    
    const options = {
        method: 'POST',
        uri: baseUrl, 
        body: {
            jsonrpc: "2.0", 
            method: "get_content", 
            params: [
                author, permlink
            ],
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
    
    async function getArticle () {  
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
            
            let item = data.result;
            let resItem = <resItem>{};;
            
            resItem.id          = item.id;
            resItem.author      = item.author;
            resItem.permlink    = "long-grid/" + item.author + "/" + item.permlink;
            resItem.category    = item.category;
            resItem.last_update = item.last_update;
            resItem.title       = item.title;
            
            resItem.body        = removeMD(item.body);
            
            let payload         = JSON.parse(item.json_metadata);
            resItem.tags        = payload.tags ? payload.tags : null;
            resItem.image       = payload.image ? payload.image[0] : null;       

            response.json(resItem);
        }
        catch (err) {
            response.json('Failed: ' + err.message);
        }
    }
    getArticle();
    
});

// POST Article
articleRouter.post("/", (request: Request, response: Response) => {
    
    console.log(request.body);
    
    response.json(request.body);
});

export { articleRouter };