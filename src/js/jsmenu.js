
import foodCardTpl from '../templates/food-card.hbs';


export default foodCardTpl;

// const cardsList = document.querySelector(".js-gallery");
// // cardsList.innerHTML = createFotoCardsMarkup(galleryItems);
// cardsList.insertAdjacentHTML("beforeend", createFotoCardsMarkup(galleryItems))
//   function createFotoCardsMarkup(galleryItems) {
//   const markup = galleryItems.map(({ preview, original, description }) => {
//     return `<li class="gallery__item">
//               <a
//                 class="gallery__link"
//                 href="${original}"
//               >
//                 <img
//                   class="gallery__image"
//                   src="${preview}"
//                   data-source="${original}"
//                   alt="${description}"
//                 />
//               </a>
//             </li>`;
//   }).join("");
//   return markup;
// };

// const modalCloseButton = document.querySelector("[data-action=close-lightbox]")
// const lightBox = document.querySelector(".js-lightbox");
// const fotoImg = document.querySelector(".lightbox__image");


// cardsList.addEventListener("click", onOpenFotoClik);
// modalCloseButton.addEventListener("click", onCloseFotoClik);
// // window.addEventListener("keydown", escapePress)


// function onOpenFotoClik(e) {
//   if (!e.target.classList.contains("gallery__image")) {
//     return;
//   }
//   e.preventDefault();
//   lightBox.classList.add("is-open");
//   fotoImg.src = e.target.dataset.source;
//   fotoImg.alt = e.target.alt;
//   window.addEventListener("keydown", escapePress)
// };

// function onCloseFotoClik() {
//   lightBox.classList.remove("is-open");
//   fotoImg.src = "";
//   fotoImg.alt = "";
//   window.addEventListener("keydown", escapePress)
// }

// function escapePress(e) {
//   if (e.code === "Escape") {
// onCloseFotoClik()
//   }
// }