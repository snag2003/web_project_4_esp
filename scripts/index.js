import { FormValidator } from "./FormValidator.js";
import { Card } from "./Card.js";
import {
  togglePopupVisibility,
  handleProfileEditSubmit,
  handleAddCardSubmit,
} from "./utils.js";

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

// Popup elements
const popup = document.querySelector(".popup");
const editPopup = document.querySelector(".popup_type_edit");
const addPopup = document.querySelector(".popup_type_add");
const imagePopup = document.querySelector(".popup_type_open-image");

// Open and Close Buttons
const editProfileButton = document.querySelector(".profile__edit-button");
const addImageButton = document.querySelector(".profile__add-button");
const addCloseButton = addPopup.querySelector(".popup__close-button");
const editCloseButton = editPopup.querySelector(".popup__close-button");
const imageCloseButton = imagePopup.querySelector(".popup__close-button");

//Inputs
const name = document.querySelector(".profile__name");
const category = document.querySelector(".profile__category");

const nameInput = document.querySelector("#name-input");
const categoryInput = document.querySelector("#category-input");

const titleInput = document.querySelector("#title-input");
const urlInput = document.querySelector("#url-input");

// Event listeners
editProfileButton.addEventListener("click", () => {
  if (!popup.classList.contains("popup__visible")) {
    nameInput.value = name.textContent;
    categoryInput.value = category.textContent;
  }
  togglePopupVisibility(editPopup);
});

editCloseButton.addEventListener("click", () => {
  togglePopupVisibility(editPopup);
});

addImageButton.addEventListener("click", () => {
  clearInputs(titleInput, urlInput);
  togglePopupVisibility(addPopup);
});

addCloseButton.addEventListener("click", () => {
  clearInputs(titleInput, urlInput);
  togglePopupVisibility(addPopup);
});

imageCloseButton.addEventListener("click", () => {
  togglePopupVisibility(imagePopup);
});

editPopup.addEventListener("submit", handleProfileEditSubmit);
addPopup.addEventListener("submit", handleAddCardSubmit);

// submitting addPopup when pressing enter key
urlInput.addEventListener("keyup", (evt) => {
  evt.preventDefault();
  if (evt.key === "Enter") {
    togglePopupVisibility(addPopup);
  }
});

initialCards.forEach((card) => {
  renderCard(card);
});

// Function to clear inputs in a two field form
function clearInputs(inputOne, inputTwo) {
  inputOne.value = "";
  inputTwo.value = "";
}

// Function to render a card
function renderCard(card) {
  const newCard = new Card(card, "#new-card");
  const newCardElement = newCard.generateCard();
  document.querySelector(".elements__container").prepend(newCardElement);
}

const formConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__submit-button",
  inactiveButtonClass: "popup__submit-button_inactive",
  inputErrorClass: "popup__input_error",
  errorClass: "popup__input-error_active",
};
const formList = Array.from(document.querySelectorAll(formConfig.formSelector));

formList.forEach((formElement) => {
  const form = new FormValidator(formConfig, formElement);
  form.enableValidation();
});

// Function to close popup when you click outside of it
function closePopupOnOutsideClick(popup, popupElement) {
  popupElement.addEventListener("click", (evt) => {
    if (evt.target.classList.contains("popup")) {
      togglePopupVisibility(popup);
    }
  });
}

closePopupOnOutsideClick(editPopup, editPopup);
closePopupOnOutsideClick(addPopup, addPopup);
closePopupOnOutsideClick(imagePopup, imagePopup);

// Function to handle escape key press and close popups
function escapeKeyHandler(evt) {
  if (evt.key === "Escape") {
    closePopup(imagePopup);
    closePopup(editPopup);
    closePopup(addPopup);
  }
}

// Function to close popup
function closePopup(popup) {
  if (popup.classList.contains("popup__visible")) {
    togglePopupVisibility(popup);
  }
}

document.addEventListener("keydown", escapeKeyHandler);

export {
  imagePopup,
  togglePopupVisibility,
  name,
  category,
  nameInput,
  categoryInput,
  titleInput,
  urlInput,
  editPopup,
  addPopup,
  renderCard,
};
