const testFolder = '../'
import fs from 'fs'

fs.readdirSync(testFolder).forEach((file, index) => {
  if (file.substring(file.length - 4) === '.svg') {
    fs.readFile(testFolder + file, function (err, data) {
      if (err) throw err

      var replaceWidthAndHeight = data
        .toString('utf8')
        .replace(/width="85" height="54"/gim, 'width="100%" height="100%"')

      var addBorderRadius = replaceWidthAndHeight.replace(/<rect/gim, '<rect rx="5px" ry="4px"  strokeLinejoin="round"')

      var replaceFill = addBorderRadius.replace(
        /fill="none"/gim,
        'fill={fill}'
      )

      var changeClipPath = replaceFill.replace(/clip-path"/gim, 'clipPath')

      var changeFillRule = changeClipPath.replace(/fill-rule"/gim, 'fillRule')

      var changeClipRule = changeFillRule.replace(/clip-rule"/gim, 'clipRule')

      var removeFillBlack = changeClipRule.replace(/fill="black"/gim, '')

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
