import foodCardTpl from './js/jsmenu';
console.log(foodCardTpl);

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
console.dir(switchCheck)
switchControl.addEventListener("click", onSwitchControlClik);


document.body.className = Theme.LIGHT;

// localStorage.setItem('bodyClasses', JSON.stringify(Theme));
//   const bodyClassSelected = JSON.parse(localStorage.getItem('bodyClasses'));
function onSwitchControlClik(e) {
  
  e.preventDefault();
  
  
  let bodyClass = document.body.className;

localStorage.setItem('bodyClasses', bodyClass);
  const bodyClassSelected = localStorage.getItem('bodyClasses');
  document.body.className = bodyClassSelected
  

  if (bodyClassSelected === Theme.LIGHT) {
    (document.body.className = "dark-theme") && (switchCheck.checked = true);
    
  };

  if (bodyClassSelected === Theme.DARK) {
    (document.body.className = "light-theme") && (switchCheck.checked = false)
  };
  
  
  // if (bodyClass === bodyClassSelected.LIGHT || ' ') {
  //   (document.body.className = "dark-theme") && (switchCheck.checked = true);
  // }
  // if (bodyClass === bodyClassSelected.DARK) {(document.body.className = "light-theme") && (switchCheck.checked = false);
  // };
  console.log(switchCheck.checked)
  console.log(bodyClass);
  
}