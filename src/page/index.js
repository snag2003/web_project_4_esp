import "./index.css";
import Api from "../components/Api.js";
import Card from "../components/Card.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";
import FormValidator from "../components/FormValidator";
import {
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
} from "../utils/constants.js";

let listItemDelete;
let cardIdDelete;

const api = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/web_es_07",
  headers: {
    authorization: "75ae37db-e1c0-4226-9bd4-60fb735a3607",
    "Content-Type": "application/json",
  },
});

const popupWithImage = new PopupWithImage(imagePopupSelector);
popupWithImage.setEventListeners();

function renderCard(cardItem) {
  const card = new Card(
    {
      cardItem,
      handleCardClick: ({ name, link }) => {
        popupWithImage.open(name, link);
      },
      handleDeleteClick: (listItem) => {
        listItemDelete = listItem;
        cardIdDelete = card._cardItem._id;
        deleteFormElement.open();
      },
      handleLikeClick: (LikeButtonIsActive) => {
        if (LikeButtonIsActive) {
          api.cardUnliked(card._cardItem._id).then((result) => {
            card._element.querySelector(".element__likes").textContent =
              result.likes.length;
          });
        } else {
          api.cardLiked(card._cardItem._id).then((result) => {
            card._element.querySelector(".element__likes").textContent =
              result.likes.length;
          });
        }
      },
    },
    templateCardSelector
  );
  api.setCardIcons().then((result) => {
    card.showCardIcons(result);
  });
  const cardElement = card.generateCard();
  return cardElement;
}

api.getInitialCards().then((results) => {
  const cardList = new Section(
    {
      items: results,
      renderer: (cardItem) => {
        cardList.addItem(renderCard(cardItem));
      },
    },
    cardContainer
  );

  cardList.renderItems();
});

const addFormElement = new PopupWithForm(addPopupSelector, (data) => {
  api
    .postNewCard(data)
    .then((result) => {
      document.querySelector(cardContainer).prepend(renderCard(result));
      addFormElement.close();
    })
    .finally(() => addFormElement.renderLoading(false));
});

addFormElement.setEventListeners();

addImageButton.addEventListener("click", () => {
  addFormElement.open();
});

const userInfo = new UserInfo({
  nameSelector: ".profile__name",
  jobSelector: ".profile__job",
  avatarSelector: ".profile__picture",
});

api.getUserInfo().then((data) => {
  userInfo.setUserInfo({ name: data.name, job: data.about });
  userInfo.setAvatar(data.avatar);
});

const editFormElement = new PopupWithForm(editPopupSelector, (data) => {
  api
    .editUserInfo(data)
    .then(() => {
      userInfo.setUserInfo(data);
    })
    .then(() => {
      editFormElement.close();
    })
    .finally(() => editFormElement.renderLoading(false));
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

const deleteFormElement = new PopupWithForm(deletePopupSelector, () => {
  listItemDelete.remove();
  api
    .deleteCard(cardIdDelete)
    .then((result) => {
      deleteFormElement.close();
    })
    .finally(() => deleteFormElement.renderLoading(false));
});

deleteFormElement.setEventListeners();

const avatarFormElement = new PopupWithForm(avatarPopupSelector, (avatar) => {
  api
    .editAvatar(avatar.link)
    .then(() => {
      userInfo.setAvatar(avatar.link);
    })
    .then(() => {
      avatarFormElement.close();
    })
    .finally(() => avatarFormElement.renderLoading(false));
});

avatarFormElement.setEventListeners();

overlaySelector.addEventListener("click", () => {
  avatarFormElement.open();
});

const formList = Array.from(document.querySelectorAll(formConfig.formSelector));
formList.forEach((formElement) => {
  const form = new FormValidator(formConfig, formElement);
  form.enableValidation();
});
