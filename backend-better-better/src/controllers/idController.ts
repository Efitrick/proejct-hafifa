import type { Request, RequestHandler, Response } from "express";
import { idService } from "../service/idService";
import { StatusCodes } from "http-status-codes";
import { log } from "node:console";

export const getIds = async (_req: Request, res: Response)=> {  
  try {
    const serviceResponse = await idService.findAllService();
    
    res.status(StatusCodes.OK).send(serviceResponse);  
  } catch (error) { 
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({ message: "An error occurred while retrieving ids." });
  }
};
export const createId = async (req: Request, res: Response)=> {  
  try {  
    const serviceResponse = await idService.createService(Number(req.body.params.identityDocument));
    
    res.status(StatusCodes.OK).send(serviceResponse);  
  } catch (error) { 
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({ message: "An error occurred while retrieving ids." });
  }
};

