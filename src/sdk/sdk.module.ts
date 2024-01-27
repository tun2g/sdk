import { DynamicModule, Module } from '@nestjs/common';
import { DefaultProvider } from './services/handle-kb-res.service';
import { KbClient } from './services/kb-client.service';
import { KbSdkOptions } from './utils/types';
import { KB_API_KEY } from './constants/provide.const';
import { ModelServiceApi } from './apis/model/model.api';


@Module({
  providers: [
    KbClient, 
    ModelServiceApi
  ],
  exports:[ModelServiceApi]
})
export class KbSdkModule {
    static forRoot(kbOptions : KbSdkOptions): DynamicModule {
        return {
          module: KbSdkModule,
          providers: [
            {
              provide: KB_API_KEY, 
              useValue: kbOptions.apiKey,
            },
            kbOptions.sdkResponse || DefaultProvider
          ],
          global: true, 
        };
    }
}
