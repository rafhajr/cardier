import html2canvas from 'html2canvas'

export const takeScreenshot = async (el: HTMLDivElement | null) => {
  if (el) {
    const canvas = await html2canvas(el, { backgroundColor: null })
    const data = canvas.toDataURL('image/jpg')

    // const link = document.createElement('a')

    // if (typeof link.download === 'string') {
    //   link.href = data
    //   link.download = 'image.jpg'

    //   document.body.appendChild(link)
    //   link.click()
    //   document.body.removeChild(link)
    // } else {
    //   window.open(data)
    // }

    return data
  }

  return ''
}
