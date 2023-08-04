const initialCards = [
  // Array of Initial Cards. Each has a name and a link
  {
    name: "Valle de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg",
  },
  {
    name: "Montañas Calvas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg",
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg",
  },
];

// Open and Close Buttons
const editProfileButton = document.querySelector(".profile__edit-button");
const addImageButton = document.querySelector(".profile__add-button");

// Popup Elements
const cardContainer = ".elements__container";
const imagePopupSelector = ".popup_type_open-image";
const editPopupSelector = ".popup_type_edit";
const addPopupSelector = ".popup_type_add";
const templateCardSelector = "#new-card";

const formConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__submit-button",
  inactiveButtonClass: "popup__submit-button_inactive",
  inputErrorClass: "popup__input_error",
  errorClass: "popup__input-error_active",
};

export {
  initialCards,
  editProfileButton,
  addImageButton,
  cardContainer,
  formConfig,
  imagePopupSelector,
  editPopupSelector,
  addPopupSelector,
  templateCardSelector,
};
