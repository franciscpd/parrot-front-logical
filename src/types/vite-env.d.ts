interface ImportMetaEnv {
  readonly PROD: boolean;
  readonly API_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
