export interface GitHubResult {
  name: string;
  tech: string;
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

type Preview = {
  url: string;
  type: 'iframe' | 'img';
};

// TODO: Recipe should have one of readme, config, or html as required
export interface Recipe {
  title: string;
  tech: string;
  html: RecipeFile;
  css: RecipeFile;
  scss: RecipeFile;
  readme?: RecipeFile;
  config: {
    thumbnail: Preview;
    detail: Preview;
  };
}
