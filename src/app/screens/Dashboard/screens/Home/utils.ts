import { Component } from './interface';

export const getComponentsCode = (components : Component[]) =>
  components?.length
    ? components.map((comp : Component) => ({
        title: comp.name,
        html: comp.object.entries[0].object.text,
        css: comp.object.entries[1].object.text,
        scss: comp.object.entries[2].object.text
      }))
    : [];
