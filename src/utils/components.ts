import { Component } from '~constants/interfaces/component';

const getComponentByFileName = (comp: Component, fileName: string) => {
  const file = comp.object.entries.find(entry => entry.name === fileName);
  return file
    ? {
        name: file.name,
        content: file.object.text
      }
    : null;
};

export const getComponentCode = (comp: Component) =>
  comp
    ? {
        title: comp.name,
        config: JSON.parse(
          comp.object.entries.find(entry => entry.name === 'config.json')?.object.text || '{}'
        ),
        readme: getComponentByFileName(comp, 'readme.md'),
        html: getComponentByFileName(comp, 'index.html'),
        css: getComponentByFileName(comp, 'styles.css'),
        scss: getComponentByFileName(comp, 'styles.scss')
      }
    : {};

export const getComponentsCode = (components: Component[]) =>
  components?.length ? components.map(getComponentCode) : [];
