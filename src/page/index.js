import "./index.css";
import Card from "../components/Card.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";
import FormValidator from "../components/FormValidator";
import {
  initialCards,
  editProfileButton,
  addImageButton,
  cardContainer,
  formConfig,
  imagePopupSelector,
  editPopupSelector,
  addPopupSelector,
  templateCardSelector,
} from "../utils/constants.js";

const popupWithImage = new PopupWithImage(imagePopupSelector);
popupWithImage.setEventListeners();

function renderCard(cardItem) {
  const card = new Card(
    {
      cardItem,
      handleCardClick: ({ name, link }) => {
        popupWithImage.open(name, link);
      },
    },
    templateCardSelector
  );
  const cardElement = card.generateCard();
  return cardElement;
}

const cardList = new Section(
  {
    items: initialCards,
    renderer: (cardItem) => {
      cardList.addItem(renderCard(cardItem));
    },
  },
  cardContainer
);

cardList.renderItems();

const addFormElement = new PopupWithForm(addPopupSelector, (data) => {
  document.querySelector(cardContainer).prepend(renderCard(data));
});

addFormElement.setEventListeners();

addImageButton.addEventListener("click", () => {
  addFormElement.open();
});

const userInfo = new UserInfo({
  nameSelector: ".profile__name",
  jobSelector: ".profile__job",
});

const editFormElement = new PopupWithForm(editPopupSelector, (data) => {
  userInfo.setUserInfo({
    name: data.name,
    job: data.about,
  });
});

editFormElement.setEventListeners();

editProfileButton.addEventListener("click", () => {
  const currentInfo = userInfo.getUserInfo();
  const nameInput = document.getElementById("name-input");
  const jobInput = document.getElementById("category-input");

  nameInput.value = currentInfo.name;
  jobInput.value = currentInfo.job;
  editFormElement.open();
});

const formList = Array.from(document.querySelectorAll(formConfig.formSelector));
formList.forEach((formElement) => {
  const form = new FormValidator(formConfig, formElement);
  form.enableValidation();
});
