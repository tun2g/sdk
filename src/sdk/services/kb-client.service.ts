import { Inject, Injectable } from '@nestjs/common';
import { IHandleKBRes } from '../interfaces/handle-res.interface';
import { KB_API_KEY, KB_HANDLE_RES_INSTANCE } from '../constants/provide.const';


@Injectable()
export class KbClient {

    constructor (
        @Inject(KB_HANDLE_RES_INSTANCE)
        private readonly handleService: IHandleKBRes,

        @Inject(KB_API_KEY)
        private readonly apiKey: string
    ){

    }

    /**
     * 
     * @todo: config axios instance
     */

    async createKB(data){

        // call api to KB server
        console.log("created")

        // handle response
        await this.handleService.createKnowledgeBase();

        return {"message":"Created successfully"};
    }

    async chatWithKnowledgeBase(){

    }

    async importDataToKnowledgeBase(){

    }

    async getListKnowledgeBases(){

    }
}
