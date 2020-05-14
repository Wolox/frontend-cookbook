import { Component } from '~constants/interfaces/component';

export const getComponentsCode = (components: Component[]) =>
  components?.length
    ? components.map((comp: Component) => ({
        title: comp.name,
        html: {
          name: comp.object.entries[0].name,
          content: comp.object.entries[0].object.text
        },
        css: {
          name: comp.object.entries[1].name,
          content: comp.object.entries[1].object.text
        },
        scss: {
          name: comp.object.entries[2].name,
          content: comp.object.entries[2].object.text
        }
      }))
    : [];

export const getComponentCode = (comp: Component) =>
  comp ?
  {
    title: comp.name,
    html: {
      name: comp.object.entries[0].name,
      content: comp.object.entries[0].object.text
    },
    css: {
      name: comp.object.entries[1].name,
      content: comp.object.entries[1].object.text
    },
    scss: {
      name: comp.object.entries[2].name,
      content: comp.object.entries[2].object.text
    }
  } : {};
