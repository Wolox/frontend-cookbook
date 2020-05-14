import { Component } from './interface';

export const getComponentsCode = (components: Component[]) =>
  components?.length
    ? components.map((comp: Component) => ({
        title: comp.name,
        config: JSON.parse(
          comp.object.entries.find(entry => entry.name === 'config.json')?.object.text || '{}'
        ),
        readme: comp.object.entries.find(entry => entry.name === 'readme.md')?.object.text,
        html: comp.object.entries.find(entry => entry.name === 'index.html')?.object.text,
        css: comp.object.entries.find(entry => entry.name === 'styles.css')?.object.text,
        scss: comp.object.entries.find(entry => entry.name === 'styles.scss')?.object.text
      }))
    : [];
