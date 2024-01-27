import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";
import { DefaultServiceApi } from "./apis/api.service";
import { ModelServiceApi } from "./apis/model/model.api";

@Injectable()
export class KbMiddleware implements NestMiddleware {
  private services : DefaultServiceApi[];
  constructor(
    private readonly modelService: ModelServiceApi
  ){
    this.services = [modelService]
  }

  use(req: Request, res: Response, next: NextFunction) {
    
      
    // we added a service_id into each request headers,
    // so from the request, we can get the right service to handle
      
    // TODO: check conditions here
    if(true){
        this.modelService.handleApiRequest(req,res,next);
    }
    else{
        // if we can not find the service, return the NextFunction
        next();
    }
  }
}
