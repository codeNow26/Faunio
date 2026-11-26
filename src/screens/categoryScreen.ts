import { renderStartScreen } from './startScreen';

export function renderCategoryScreen() {
    document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
 <h1>Wähle eine Kategorie!</h1>

 <div id="category-button-container" class="category-button-container">
 </div>
 <button id = "back-button" class="start-button">Zurück</button>
 `

    for (let i = 0; i < animalCategories.length; i++) {

        document.querySelector<HTMLDivElement>('#category-button-container')!.innerHTML += `
 <button class="category-button">${animalCategories[i]}</button>
 `

        document.querySelectorAll<HTMLButtonElement>('#category-button-container .category-button').forEach((button, index) => {
            button.addEventListener('click', () => {
                const selectedCategory = animalCategories[index];
                console.log('Ausgewählte Kategorie: ', selectedCategory);
            });
        })
    }

    document.getElementById('back-button')?.addEventListener('click', renderStartScreen);
}




const animalCategories: string[] = [
    "Vögel",
    "Säugetiere",
    "Fische",
    "Amphibien",
];

