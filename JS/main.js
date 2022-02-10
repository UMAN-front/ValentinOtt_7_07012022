
// DATA
import ApiRecettes from './Json/data.js';

import HomeRecette from './home.js';

new ApiRecettes().getDataRecettes()

new HomeRecette().displayRecipe(recipes[0]);

// (function appDispatch() {
//     new ApiFishEye().getDataFishEye().then((data) => {
//         // HOMEPAGE 
//         new HomeRecette().displayRecipe(recipes);
//     }).catch(() => {
//     })
// })();