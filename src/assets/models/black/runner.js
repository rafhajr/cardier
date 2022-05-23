const testFolder = '../'
import fs from 'fs'

fs.readdirSync(testFolder).forEach((file, index) => {
  if (file.substring(file.length - 4) === '.svg') {
    fs.readFile(testFolder + file, function (err, data) {
      if (err) throw err

      var replaceWidthAndHeight = data
        .toString('utf8')
        .replace(/width="85" height="54"/gim, 'width="100%" height="100%"')

      var replaceFill = replaceWidthAndHeight.replace(
        /fill="none"/gim,
        'fill={fill}'
      )

      var removeFillBlack = replaceFill.replace(/fill="black"/gim, '')

      const js = `
  export const Model = ({ fill }) => (
    ${removeFillBlack}
  )
  `
      fs.writeFile(`Model${index}.m.js`, js, function (err) {
        if (err) throw err
        console.log('File is created successfully.')
      })
    })
  }
})

// fs.readFile(testFolder + 'roger.svg', function (err, data) {
//   if (err) throw err

//   var replaceFill = data
//     .toString('utf8')
//     .replace(/fill="none"/gim, 'fill={fill}')

//   var removeFillBlack = replaceFill.replace(/fill="black"/gim, '')

//   const js = `
// export const Border1 = ({ fill }) => (
//   ${removeFillBlack}
// )
// `
//   fs.writeFile('tesst.js', js, function (err) {
//     if (err) throw err
//     console.log('File is created successfully.')
//   })
// })
