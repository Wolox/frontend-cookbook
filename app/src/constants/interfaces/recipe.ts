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
  readme?: RecipeFile;
  config: {
    thumbnail: Preview;
    detail: Preview;
  };
  source: TreeRecipe;
  // TODO: Remove the next props once it's updated to the new files structure
  html: RecipeFile;
  css: RecipeFile;
  scss: RecipeFile;
}

export enum FileTypes {
  blob = 'Blob',
  tree = 'Tree'
}

export interface SelectedFile {
  id: string;
  src: string;
  name: string;
  lang: string;
  isBinary: boolean;
}

export type TreeEntry = TreeEntryFile | TreeEntryFolder;

export interface TreeEntryFile {
  id: string;
  name: string;
  type: FileTypes.blob;
  src: string;
  isBinary: boolean;
}

export interface TreeEntryFolder {
  name: string;
  type: FileTypes.tree;
  entries: TreeEntry[];
}

export interface TreeRecipe {
  name: string;
  entries: TreeEntry[];
}
