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

export enum FileTypes {
  file = 'file',
  folder = 'folder'
}

export interface TreeFileItem {
  type: FileTypes;
  name: string;
  content: any;
}

export interface TreeFolderItem {
  type: FileTypes;
  name: string;
  content: TreeFileItem[];
}

export interface TreeRecipeItem {
  name: string;
  files: Array<TreeFileItem | TreeFolderItem>;
}

export interface SelectedFile {
  code: string;
  name: string;
  lang: string;
}
