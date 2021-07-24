import foodCardTpl from './js/jsmenu';
import foodCards from './menu.json';

const cardsList = document.querySelector(".js-menu");

cardsList.insertAdjacentHTML("beforeend", createFoodCardsMarkup(foodCards))
  function createFoodCardsMarkup(foodCards) {
  
      return foodCardTpl(foodCards);
};

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const switchControl = document.querySelector(".theme-switch__control");
const switchCheck = document.querySelector('#theme-switch-toggle');
const bodyClassSelected = localStorage.getItem('bodyClasses');
themeChange()

switchControl.addEventListener("change", onSwitchControlClik);

function onSwitchControlClik() {
  
    if (switchCheck.checked) {
    
       localStorage.setItem('bodyClasses', Theme.DARK);
      
       document.body.className = Theme.DARK;
    }
    else {
    
       localStorage.setItem('bodyClasses', Theme.LIGHT);
      
       document.body.className = Theme.LIGHT;
    };
 
}

function themeChange() {
 
  if (bodyClassSelected === Theme.DARK) {
    switchCheck.checked = true;
    document.body.className = bodyClassSelected;
  }
  else {document.body.className = bodyClassSelected};
};

