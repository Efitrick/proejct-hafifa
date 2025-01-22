import type { Request, Response } from "express";
import { idService } from "../service/idService";
import { StatusCodes } from "http-status-codes";

export const createId = async (req: Request, res: Response)=> {  
  try {  
    const serviceResponse = await idService.createService(req.body.params.identityDocument);
    
    res.status(StatusCodes.OK).send(serviceResponse);  
  } catch (error) { 
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({ message: "An error occurred while retrieving ids." });
  }
};

