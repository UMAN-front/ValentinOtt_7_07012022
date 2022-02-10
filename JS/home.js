/////////////////////////////////////////

// DISPLAY ALL PHOTOGRAPHERS BY DEFAULT
export default class HomeRecette {
    // Build the photographers section, call the 'filtertags' function and the 'passer au contenu' button
    displayRecipe(recipe) {
        let listRecipes = recipe.listRecipes;
        listRecipes.map(cook => {
            articleRecette.className = recipe.tags.join(' ') + ' articlePh';
            let templateRecette = `
                <div class="card">
                    <div class="square">
                        <article class="recette">
                            <div class="image">
                            </div>
                            <div class="description">
                                <h3 class="cooks">${cook.name}</h3>
                                <div class="timer">
                                    <i class="far fa-clock"></i>
                                    <p class="time">${cook.time}</p>
                                </div>
                            </div>
                            <div class="setting">
                                <div class="ingredient-description">
                                    <p><span class="cook">${cook.ingredient}:</span> ${ingredient.quantity} ${ingredient.unit}</p>
                                    <p><span class="cook">${cook.ingredient}:</span> ${ingredient.quantity} ${ingredient.unit}</p>
                                    <p><span class="cook">${cook.ingredient}:</span> ${ingredient.quantity} ${ingredient.unit}</p>
                                    <p><span class="cook">${cook.ingredient}:</span> ${ingredient.quantity} ${ingredient.unit}</p>
                                    <p><span class="cook">${cook.ingredient}:</span> ${ingredient.quantity} ${ingredient.unit}</p>
                                </div>
                                <p class="igrd">${cook.description}</p>
                            </div>
                        </article>
                    </div>
                </div>
                `
                sectionRecettes.appendChild(articleRecette);
                articleRecette.innerHTML = templateRecette;
            })              
    }
}
