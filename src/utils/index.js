export function spacesToHyphen(str) {
  return str.replace(/\s/g, '-')
}

export function getComponentsCode(results) {
  const components = results.data.data.repository.object.entries
  return components.map(component => ({
    title: component.name,
    html: component.object.entries[0].object.text,
    scss: component.object.entries[1].object.text
  }))
}
