const testFolder = './'
import fs from 'fs'

fs.readdirSync(testFolder).forEach((file, index) => {
  if (file.substring(file.length - 4) === 'm.js') {
    fs.unlink(testFolder + file, (err) => {
      if (err) {
        console.error(err)
        return
      }
    })
  }
})
