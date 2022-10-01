declare module "@env" {
  export type ENV = {
    API_BASE_URL: string;
    API_TOKEN: string;
    NODE_ENV: "development" | "production";
    PORT?: string;
    PWD: string;
    SENTRY_ORG: string;
    SENTRY_PROJECT: string;
    SENTRY_AUTH_TOKEN: string;
  };
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export {};
