interface Provider {
    provide: string,
    useClass: any
}

export interface KbSdkOptions {
    apiKey: string;
    sdkResponse?: Provider;
    exposeApi?: boolean;
}

export type ExposedApi = {
    route: string;
    method: string;
}