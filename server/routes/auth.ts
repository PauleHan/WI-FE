import { Request, Response, Router } from "express";

const authRouter: Router = Router();

const auth = {
    "body": "Auth Work!"
};

authRouter.get("/", (request: Request, response: Response) => {

    response.json(auth);
});

export { authRouter };