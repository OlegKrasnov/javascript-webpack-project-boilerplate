export default class Initial {
  constructor(app) {
    this.app = app
    this.title = 'Javascript Webpack Project Boilerplate'
  }

  createTitle() {
    const container = document.createElement('div')
    container.classList.add('container')
    const h1 = document.createElement('h1')
    h1.innerHTML = this.title
    container.appendChild(h1)
    this.app.appendChild(container)
  }
}
