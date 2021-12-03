import path from "path";
import dotenv from "dotenv";

// Parsing the env file.
dotenv.config({ path: path.resolve(__dirname, "../config/config.env") });

// Interface to load env variables
// Note these variables can possibly be undefined
// as someone could skip these varibales or not setup a .env file at all

interface ENV {
  NODE_ENV: string | undefined;
  REACT_APP_ALGOLIA_SITE_INDEX: string | undefined;
  REACT_APP_ALGOLIA_BLOG_INDEX: string | undefined;
  REACT_APP_ALGOLIA_RESOURCES_INDEX: string | undefined;
  REACT_APP_ALGOLIA_DOCS_INDEX: string | undefined;
  REACT_APP_ALGOLIA_INSPIRATION_LIBRARY_INDEX: string | undefined;
  REACT_APP_ALGOLIA_APP_ID:  string | undefined;
  REACT_APP_ALGOLIA_API_KEY:   string | undefined;
}

interface Config {
  NODE_ENV: string;
  REACT_APP_ALGOLIA_SITE_INDEX: string;
  REACT_APP_ALGOLIA_BLOG_INDEX: string;
  REACT_APP_ALGOLIA_RESOURCES_INDEX: string;
  REACT_APP_ALGOLIA_DOCS_INDEX: string;
  REACT_APP_ALGOLIA_INSPIRATION_LIBRARY_INDEX: string;
  REACT_APP_ALGOLIA_APP_ID: string;
  REACT_APP_ALGOLIA_API_KEY: string;
}

// Loading process.env as ENV interface

const getConfig = (): ENV => {
  return {
    NODE_ENV: process.env.NODE_ENV,
    REACT_APP_ALGOLIA_SITE_INDEX: process.env.REACT_APP_ALGOLIA_SITE_INDEX ? String(process.env.REACT_APP_ALGOLIA_SITE_INDEX) : undefined,
    REACT_APP_ALGOLIA_BLOG_INDEX: process.env.REACT_APP_ALGOLIA_BLOG_INDEX ? String(process.env.REACT_APP_ALGOLIA_BLOG_INDEX) : undefined,
    REACT_APP_ALGOLIA_RESOURCES_INDEX: process.env.REACT_APP_ALGOLIA_RESOURCES_INDEX ? String(process.env.REACT_APP_ALGOLIA_RESOURCES_INDEX) : undefined,
    REACT_APP_ALGOLIA_DOCS_INDEX: process.env.REACT_APP_ALGOLIA_DOCS_INDEX ? String(process.env.REACT_APP_ALGOLIA_DOCS_INDEX) : undefined,
    REACT_APP_ALGOLIA_INSPIRATION_LIBRARY_INDEX:process.env.REACT_APP_ALGOLIA_INSPIRATION_LIBRARY_INDEX ? String(process.env.REACT_APP_ALGOLIA_INSPIRATION_LIBRARY_INDEX) : undefined,
    REACT_APP_ALGOLIA_APP_ID: process.env.REACT_APP_ALGOLIA_APP_ID ? String(process.env.REACT_APP_ALGOLIA_APP_ID) : undefined,
    REACT_APP_ALGOLIA_API_KEY: process.env.REACT_APP_ALGOLIA_API_KEY ? String(process.env.REACT_APP_ALGOLIA_API_KEY) : undefined,
  };
};

// Throwing an Error if any field was undefined we don't 
// want our app to run if it can't connect to DB and ensure 
// that these fields are accessible. If all is good return
// it as Config which just removes the undefined from our type 
// definition.

const getSanitzedConfig = (config: ENV): Config => {
  for (const [key, value] of Object.entries(config)) {
    if (value === undefined) {
      throw new Error(`Missing key ${key} in config.env`);
    }
  }
  return config as Config;
};

const config = getConfig();

const sanitizedConfig = getSanitzedConfig(config);

export default sanitizedConfig;

