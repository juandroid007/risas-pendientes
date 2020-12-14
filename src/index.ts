import './index.css'
import './icons.css'
import './nprogress.css'
import App from './App.svelte'
import wf from 'webfontloader'

const app = new App({
  target: document.getElementById('app'),
})

wf.load({
  google: {
    families: ['Work+Sans:300,300;italic,500,500;italic,700,700;italic', 'Inconsolata']
  }
})

export default app
