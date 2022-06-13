import { CommonRoutesConfig } from "../common/common.routes.config";
import express from "express";

export class ClubesRoutes extends CommonRoutesConfig {
  constructor(app: express.Application) {
    super(app, "ClubesRoutes");
  }

  configureRoutes() {
    this.app
      .route("/clubes")
      .get((req: express.Request, res: express.Response) => {
        res.status(200).send(`List of clubes`);
      });

    this.app
      .route(`/clubes/:clubId`)
      .all(
        (
          req: express.Request,
          res: express.Response,
          next: express.NextFunction
        ) => {
          // this middleware function runs before any request to /clubes/:clubId
          // but it doesn't accomplish anything just yet---
          // it simply passes control to the next applicable function below using next()
          next();
        }
      )
      .get((req: express.Request, res: express.Response) => {
        res.status(200).send(`GET requested for id ${req.params.clubId}`);
      })
      .put((req: express.Request, res: express.Response) => {
        res.status(200).send(`PUT requested for id ${req.params.clubId}`);
      })
      .patch((req: express.Request, res: express.Response) => {
        res.status(200).send(`PATCH requested for id ${req.params.clubId}`);
      })
      .delete((req: express.Request, res: express.Response) => {
        res.status(200).send(`DELETE requested for id ${req.params.clubId}`);
      });

    return this.app;
  }
}
