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

// TODO: Recipe should have one of readme, config, or html as required
export interface Recipe {
  title: string;
  html: string;
  css: string;
  readme: string;
  config: {
    thumbnailURL: string;
  };
}
