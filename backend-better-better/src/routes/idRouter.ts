import * as express from 'express';
import { getIds, createId} from '../controllers/idController';


const routerIds = express.Router();

routerIds.get('/ids', getIds);
routerIds.post('', createId);
export default routerIds;
