import { Request, Response, Router, NextFunction } from "express";
const fs = require('fs');
const iconv  = require('iconv-lite');
class fileRoutes {
  createFile() {
    return async (req: Request, res: Response, next: NextFunction) => {
      const { text, ext, path } = req.body;
      //let body = iconv.decode(new Buffer(text), "TIS-620");
      //console.log(body)
      await fs.writeFile(`${path}/${ext}`, `${text}`, {encodeing: 'iso-8859-1'});
      return res.status(200).send({message: 'Success'})
    };
  }
}
const router = Router();
const route = new fileRoutes();

router.post("/file/create", route.createFile());

export const file = router;
