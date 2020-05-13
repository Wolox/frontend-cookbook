export interface Component {
  name: string;
  object: {
    entries: {
      name: string;
      object: {
        text: string;
      };
    }[];
  };
}

export interface Recipe {
  title: string;
  html: string;
  css: string;
  config: {
    thumbnailURL: string;
  };
}
