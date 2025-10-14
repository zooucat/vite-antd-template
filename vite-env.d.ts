/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_NAME: string;
  // You can keep adding more environment variables below
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
