import express from "express";

import {
  Create as createUser,
  listByName,
  listByNickname,
  modifyLastnameAndAddress,
  modifyNickname,
  delByid,
} from "./controllers/UserController.js";

const routes = express.Router();

routes.post("/users/create", createUser);
routes.get("/users/read", listByName);
routes.get("/users/read/:nickname", listByNickname);
routes.put("/users/updateLastnameAndAddress/:id", modifyLastnameAndAddress);
routes.put("/users/updateNickname/:id", modifyNickname);
routes.delete("/users/delete/:id", delByid);

export default routes;
