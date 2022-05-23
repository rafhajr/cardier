var components: any = []

const importAll = (r: any) => {
  return r.keys().map(r)
}

components = importAll(require.context('./', false, /(m.js)$/))

const arrUnique = Array.from(new Set(components))

console.log(arrUnique)

export default arrUnique
