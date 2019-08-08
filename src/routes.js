import { Router } from "express";

const routes = new Router();

routes.get("/lucas", (req, res) => {
  return res.json("Hello Lucas Topíssimo");
});

export default routes;
