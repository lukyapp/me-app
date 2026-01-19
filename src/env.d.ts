declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: 'development' | 'test' | 'production';
    RESEND_API_KEY: string;
    CONTACT_EMAIL: string;
    RESEND_FROM_EMAIL: string;
  }
}
