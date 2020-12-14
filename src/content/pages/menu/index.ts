import breakfast from './breakfast-boxes.json'
import sandwich from './sandwich-box-lunches.json'
import meals from './box-meals.json'
import salad from './salad-box-lunches.json'
import bbq from './bbq-box-meals.json'
import index from './index.json'

export default {
  ...index,
}

const categories = {
  'breakfast-boxes': {
    title: 'Breakfast Boxes',
    ...breakfast,
  },
  'sandwich-box-lunches': {
    title: 'Sandwich Box Lunches',
    ...sandwich,
  },
  'box-meals': {
    title: 'Box Meals',
    ...meals,
  },
  'salad-box-lunches': {
    title: 'Salad Box Lunches',
    ...salad,
  },
  'bbq-box-meals': {
    title: 'BBQ Box Meals',
    ...bbq,
  },
}

const getImg = (src: string) => {
  const validateExternalSrc = (str: string) =>
    str.indexOf("http://") == 0 || str.indexOf("https://") == 0
  const isExternal = validateExternalSrc(src)
  const path = isExternal ? src : '/images/' + src
  const extension = path.split('.').pop()
  const pathWithoutExtension = path.substr(0, path.length - extension.length)
  return isExternal ? path : pathWithoutExtension + 'webp'
}

Object.keys(categories).map((k: string) => {
  categories[k].image = getImg(categories[k].image)
})

export {
  categories,
}
