import { Injectable } from '@nestjs/common';
import { IHandleKBRes } from 'src/sdk/interfaces/handle-res.interface';

@Injectable()
export class TestService implements IHandleKBRes{
    async createKnowledgeBase() {
        console.log("Client handle created")
    }
    async chatWithKnowledgeBase() {
        
    }
    async importDataToKnowledgeBase() {
        
    }
}


