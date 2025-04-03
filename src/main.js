import { mount } from 'svelte'
// import './app.css'
// import Main from './lib/Main.svelte'
import App from './App.svelte'

const app = mount(App, {
  target: document.getElementById('app'),
})

export default app
