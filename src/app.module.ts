import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { KbSdkModule } from './sdk/sdk.module';
import { TestModule } from './modules/test/test.module';
import { TestService,  } from './modules/test/test.service';
import { KB_HANDLE_RES_INSTANCE } from './sdk/constants/provide.const';
import { KbMiddleware } from './sdk/sdk.middleware';

@Module({
  imports: [
    KbSdkModule.forRoot({
      apiKey: "TEST-API-KEY", 
      sdkResponse: {
        provide: KB_HANDLE_RES_INSTANCE,
        useClass: TestService
      },
      
    }), 
    TestModule
  ],
  providers: [
      TestService,
  ],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
        .apply(KbMiddleware)
        .forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}
