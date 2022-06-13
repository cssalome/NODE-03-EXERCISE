import { CommonRoutesConfig } from "../common/common.routes.config";
import express from "express";

export class ClubesRoutes extends CommonRoutesConfig {
  constructor(app: express.Application) {
    super(app, "ClubesRoutes");
  }

  configureRoutes() {
    return this.app;
  }
}
