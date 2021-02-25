import { feature, mesh } from 'topojson-client'

export function prepareMesh(outline, borders, path) {
  return outline && borders ? {
    outline: { ...outline, rsmKey: "outline", svgPath: path(outline) },
    borders: { ...borders, rsmKey: "borders", svgPath: path(borders) },
  } : {}
}

export function prepareFeatures(geographies, path) {
  return geographies ? geographies.map((d, i) => {
    return {
      ...d,
      rsmKey: `geo-${i}`,
      svgPath: path(d),
    }
  }) : []
}

export function getMesh(geographies) {
  const isTopojson = geographies.type === "Topology"
  if (!isTopojson) return null
  const outline = mesh(geographies, geographies.objects[Object.keys(geographies.objects)[0]], (a, b) => a === b)
  const borders = mesh(geographies, geographies.objects[Object.keys(geographies.objects)[0]], (a, b) => a !== b)
  return { outline, borders }
}

export function getFeatures(geographies, parseGeographies) {
  const isTopojson = geographies.type === "Topology"
  if (!isTopojson) {
    return parseGeographies
      ? parseGeographies(geographies.features || geographies)
      : (geographies.features || geographies)
  } 
  const feats = feature(
    geographies,
    geographies.objects[Object.keys(geographies.objects)[0]]
  ).features
  return parseGeographies ? parseGeographies(feats) : feats
}
