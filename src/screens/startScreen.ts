import { renderCategoryScreen } from './categoryScreen'

export function renderStartScreen() {
document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<h1>Faunio</h1>
<p>Wie gut kennst du dich aus? HMMM?</p>
<button id="start-button" class="start-button">Start</button>
`
document.getElementById('start-button')?.addEventListener('click', renderCategoryScreen);
}
