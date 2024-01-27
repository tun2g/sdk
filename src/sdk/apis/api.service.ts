import { NextFunction, Request, Response } from "express";
import { ExposedApi } from "../utils/types";

export abstract class DefaultServiceApi {
    abstract getExposedApis() : ExposedApi[];
    abstract handleApiRequest(req:Request, res: Response, next : NextFunction): unknown;
    abstract getRequestMapping(key:string): unknown;
    abstract getServiceId():string;
    convertApiToString(api : ExposedApi):string{
        return `${api.method}_${api.route}`
    }
} 