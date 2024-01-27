import { ExposedApi } from "src/sdk/utils/types";
import { DefaultServiceApi } from "../api.service";
import { Injectable } from "@nestjs/common";
import { MODEL_CHAT, MODEL_CREATE, MODEL_ID, MODEL_UPLOAD } from "./constans";
import { KbClient } from "src/sdk/services/kb-client.service";

@Injectable()
export class ModelServiceApi extends DefaultServiceApi{
    private requestMapping : Record<string, any>;

    constructor(
        private readonly kbClient: KbClient
    ){
        super();

        this.requestMapping= {
            [this.convertApiToString({route: MODEL_CREATE, method: "POST"})]: async(req,res)=> {
                return await this.kbClient.createKB("a")
            }
        }
    }

    getServiceId(): string {
        return MODEL_ID;
    }
    getExposedApis(): ExposedApi[] {
        return [
            { route: MODEL_CREATE, method: "POST" },
            { route: MODEL_UPLOAD, method: "POST" },
            { route: MODEL_CHAT, method: "POST" }
        ]
    }
    getRequestMapping(key){
        if(key in this.requestMapping){
            return this.requestMapping[key];
        }
        return null;
    }
    async handleApiRequest(req,res,next) {
        
        /**
         * @todo: separate req url to get origin route before request mapping 
         */
        
        const matchedRequest = this.getRequestMapping(this.convertApiToString({route: req.url, method: req.method}))
        if(!matchedRequest){
            next();
            return;
        }
        else {
            const data =  await matchedRequest(req,res);
            return res.json(data);
        }
    }

}