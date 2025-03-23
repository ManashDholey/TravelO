

// class Environment {
//     static getApiUrl() {
//       return  "http://localhost:8000";
//     }
  
//     static getEnvironment() {
//         if()
//       return  "development";
//     }
  
//     static getVersion() {
//       return process.env.REACT_APP_VERSION || "1.0.0";
//     }
  
//     static isProduction() {
//       return this.getEnvironment() === "production";
//     }
  
//     static isDevelopment() {
//       return this.getEnvironment() === "development";
//     }
//   }
  
//   export default Environment;

  class Environment {
    static apiUrl = "http://localhost:8000"; // Default API URL
    static environment = "development"; // Default environment
    static version = "1.0.0"; // Default version
  
    // Getter methods
    static getApiUrl() {
      return this.apiUrl;
    }
  
    static getEnvironment() {
      return this.environment;
    }
  
    static getVersion() {
      return this.version;
    }
  
    static isProduction() {
      return this.getEnvironment() === "production";
    }
  
    static isDevelopment() {
      return this.getEnvironment() === "development";
    }
  
    // Setter methods (Optional: If you want to override values at runtime)
    static setApiUrl(url) {
      this.apiUrl = url;
    }
  
    static setEnvironment(env) {
      this.environment = env;
    }
  
    static setVersion(ver) {
      this.version = ver;
    }
  }
  
  export default Environment;
  
  