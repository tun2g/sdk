import { Injectable } from '@nestjs/common';
import { IHandleKBRes } from '../interfaces/handle-res.interface';
import { KB_HANDLE_RES_INSTANCE } from '../constants/provide.const';


@Injectable()
export class HandleKBResService implements IHandleKBRes{
    createKnowledgeBase(){}
    chatWithKnowledgeBase() {}
    importDataToKnowledgeBase() {}
}

export const DefaultProvider = {
    provide: KB_HANDLE_RES_INSTANCE,
    useClass: HandleKBResService,
}
