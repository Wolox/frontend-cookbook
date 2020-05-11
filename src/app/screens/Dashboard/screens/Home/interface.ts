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

export interface CookbookComponent {
  title: string;
  html: string;
  css: string;
  config: {
    thumbnailURL: string;
  };
}
