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

export interface RecipeFile {
  name: string;
  content: string;
}

// TODO: Recipe should have one of readme, config, or html as required
export interface Recipe {
  title: string;
  html: RecipeFile;
  css: RecipeFile;
  readme?: RecipeFile;
  config: {
    thumbnailURL: string;
  };
}
