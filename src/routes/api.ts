import { Router } from 'express';

import adminRoutes from '../controllers/pdfRoutes';

const apiRouter = Router();

apiRouter.use('/pdf-generator', adminRoutes);

export { apiRouter };
