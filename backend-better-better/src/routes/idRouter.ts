import * as express from 'express';
import { createId } from '../controllers/idController';


const routerIds = express.Router();

routerIds.post('/', createId);
export default routerIds;