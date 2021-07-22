import foodCardTpl from './js/jsmenu';
console.log(foodCardTpl);

import foodCards from './menu.json';


console.log(foodCards);
const cardsList = document.querySelector(".js-menu");

cardsList.insertAdjacentHTML("beforeend", createFoodCardsMarkup(foodCards))
  function createFoodCardsMarkup(foodCards) {
  
      return foodCardTpl(foodCards);
};