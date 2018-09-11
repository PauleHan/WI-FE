import { Request, Response, Router } from "express";

const authRouter: Router = Router();

const auth = {
    "body": "Auth Work!"
};

authRouter.get("/", (request: Request, response: Response) => {

    response.json(auth);
});

authRouter.post("/", (request: Request, response: Response) => {

    console.log(request.body);

    response.json(request.body);
});

export { authRouter };