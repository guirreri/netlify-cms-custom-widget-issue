import Control from './Control'
import Preview from './Preview'

if (typeof window !== 'undefined') {
  window.Control = Control
  window.Preview = Preview
}
console.log(window.Control)
console.log(window.Preview)

export { Control, Preview }