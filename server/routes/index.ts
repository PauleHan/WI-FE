import { Request, Response, Router } from "express";

const indexRouter: Router = Router();


indexRouter.get("/", (request: Request, response: Response) => {

    response.send('API Works!');
});

export { indexRouter };