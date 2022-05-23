var images: any = []

const importAll = (r: any) => {
  return r.keys().map(r)
}

images = importAll(require.context('./', false, /.(png|jpe?g|svg)$/))

const arrUnique = Array.from(new Set(images))

export default arrUnique
