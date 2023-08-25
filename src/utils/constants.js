// Open and Close Buttons
const editProfileButton = document.querySelector(".profile__edit-button");
const addImageButton = document.querySelector(".profile__add-button");

// Popup Elements
const cardContainer = ".elements__container";
const imagePopupSelector = ".popup_type_open-image";
const editPopupSelector = ".popup_type_edit";
const addPopupSelector = ".popup_type_add";
const deletePopupSelector = ".popup_type_delete";
const avatarPopupSelector = ".popup_type_avatar";
const templateCardSelector = "#new-card";
const overlaySelector = document.querySelector(".profile__overlay-container");

const formConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__submit-button",
  inactiveButtonClass: "popup__submit-button_inactive",
  inputErrorClass: "popup__input_error",
  errorClass: "popup__input-error_active",
};

export {
  editProfileButton,
  addImageButton,
  cardContainer,
  formConfig,
  imagePopupSelector,
  editPopupSelector,
  addPopupSelector,
  deletePopupSelector,
  avatarPopupSelector,
  templateCardSelector,
  overlaySelector,
};
