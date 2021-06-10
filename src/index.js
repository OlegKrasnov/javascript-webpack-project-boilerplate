import Initial from './app/initial'

import './styles/index.scss'

const app = document.querySelector('#app')
const initial = new Initial(app)
initial.createTitle()
