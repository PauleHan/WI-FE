import { Request, Response, Router } from "express";

const userRouter: Router = Router();

const user = {
    "id": 1,
    "username": "RomanY",
    "userava": "Roman_Yakovlev.webp",
    "email": "Sincere@april.biz",
    "name": "Roman Yakovliev"
};

userRouter.get("/", (request: Request, response: Response) => {

    response.json(user);
});

export { userRouter };