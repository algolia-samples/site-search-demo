declare namespace NodeJS {
    interface ProcessEnv {
      REACT_APP_ALGOLIA_SITE_INDEX: string;
      REACT_APP_ALGOLIA_BLOG_INDEX: string;
      REACT_APP_ALGOLIA_RESOURCES_INDEX: string;
      REACT_APP_ALGOLIA_DOCS_INDEX: string;
      REACT_APP_ALGOLIA_INSPIRATION_LIBRARY_INDEX: string;
      REACT_APP_ALGOLIA_APP_ID: string;
      REACT_APP_ALGOLIA_API_KEY: string;
    }
  }