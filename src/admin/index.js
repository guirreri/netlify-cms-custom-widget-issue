import CMS, { init } from 'netlify-cms'
console.log(CMS)
import { Control, Preview } from '../admin-custom-widget'
CMS.registerWidget('test', Control, Preview)
init()