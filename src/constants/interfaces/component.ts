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
