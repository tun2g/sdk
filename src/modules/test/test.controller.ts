import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';

@Controller('test')
export class TestController {
    constructor(){

    }

    @HttpCode(HttpStatus.OK)
    @Get('/')
    async createKb(){
        
    }
}
