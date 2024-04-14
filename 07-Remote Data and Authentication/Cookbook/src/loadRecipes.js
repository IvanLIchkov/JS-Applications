import{createElement} from '../util/createElement.js'
function loadRecipes() {
    const resp = fetch('http://localhost:3030/data/recipes')
        .then(res => res.json())
        .then(data => {
            data.forEach(d =>{
                const recipeName = d.name;
                const recipeImage = d.img;
                const recipeIngredients = d.ingredients;
                const preparationSteps = d.steps;
                let test = createElement('div');
            })
        })
}
loadRecipes()
