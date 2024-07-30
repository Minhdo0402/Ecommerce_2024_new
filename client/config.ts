// config.ts
interface Config {
    baseUrl: string;
  }
  
  const checkConfig = (server: string): Config | Record<string, never> => {
    let config: Config | Record<string, never> = {};
    switch (server) {
      case "production":
        config = {
          baseUrl: "", // Update with your actual production URL
        };
        break;
      case "local":
        config = {
          baseUrl: "http://localhost:8000",
        };
        break;
      default:
        config = {}; // Explicitly set as an empty object
        break;
    }
    return config;
  };
  
  export const selectServer = "local";
  export const config = checkConfig(selectServer) as Config;
  