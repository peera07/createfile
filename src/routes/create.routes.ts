import { Request, Response, Router, NextFunction } from "express";
const fs = require('fs');
class fileRoutes {
  createFile() {
    return async (req: Request, res: Response, next: NextFunction) => {
      const { text, ext, path } = req.body;
      await fs.writeFile(`${path}/${ext}`, `${text}`, {encoding: 'utf-8'});
      return res.status(200).send({message: 'Success'})
    };
  }
}
const router = Router();
const route = new fileRoutes();

router.post("/file/create", route.createFile());

export const file = router;
