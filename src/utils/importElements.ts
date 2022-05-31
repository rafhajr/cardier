// const path = require.context('../../public/elements', false, /\.jpg\.svg\.png$/)

// // require.context('../assets/images/', true, )

// export default path.keys().map(path)

const importAll = (r: any) => {
  let images: any[] = []
  r.keys().map((item: any, index: any) => {
    images[index] = r(item)
  })
  return images
}

const images = importAll(
  require.context('../../public/elements/', false, /\.(png|jpe?g|svg)$/)
)

export default images
