import { Router, Response, NextFunction } from 'express';

import { GenericRequest } from '../models/misc/GenericRequest';

import { generate } from '../services/pdfService';

const pdfRouter = Router();

pdfRouter.get('/', (_: GenericRequest, res: Response, next: NextFunction) => {
  generate()
    .then((pdf) => {
      res.status(200).send(pdf);
    })
    .catch((err) => {
      next(err);
    });
});

export default pdfRouter;
