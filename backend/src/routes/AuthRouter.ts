import express, { Router, Request, Response } from "express";
import { userLogin, userAuth } from "../utils/Auth";
import * as jwt from "jsonwebtoken";

const JWT_SECRET: any = process.env.JWT_SECRET;

const router: Router = express.Router();

/**
 * LOGIN END-POINT
 */
router.post("/login", userLogin);

/**
 * END-POINT protected behind userAuth middle-ware
 */
router.get("/profile", userAuth, (req: Request, res: Response) => {
  const token = req.cookies.jwt;
  jwt.verify(token, JWT_SECRET, (err: any, decodedToken: any) => {
    if (err) {
      res.send("ERROR");
    } else {
      const userName = decodedToken.userName;
      res.send(`Welcome ${userName}! you are logged in!`);
    }
  });
});

export { router as AuthRouter };
