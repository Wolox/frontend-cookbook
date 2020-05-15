export interface CardsContainerProps {
  components: {
    title: string;
    html: {
      name: string;
      content: string;
    };
    css: {
      name: string;
      content: string;
    };
  }[];
  category: string;
}
