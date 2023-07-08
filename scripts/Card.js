import { imagePopup, togglePopupVisibility } from "./index.js";

//class for cards
class Card {
  constructor(data, cardSelector) {
    (this._name = data.name),
      (this._link = data.link),
      (this._cardSelector = cardSelector);
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".element")
      .cloneNode(true);

    return cardElement;
  }

  _setEventListeners() {
    this._element
      .querySelector(".element__delete-button")
      .addEventListener("click", () => {
        const listItem = this._element
          .querySelector(".element__delete-button")
          .closest(".element");
        listItem.remove();
      });

    this._element
      .querySelector(".element__like-button")
      .addEventListener("click", (evt) => {
        evt.target.classList.toggle("element__like-button_active");
      });

    this._element
      .querySelector(".element__image")
      .addEventListener("click", () => {
        this._handleImageClick();
      });
  }

  _handleImageClick() {
    const popupImage = document.querySelector(".popup__image");
    const popupImageSubtitle = document.querySelector(".popup__image-subtitle");
    popupImage.src = this._link;
    popupImage.alt = this._name;
    popupImageSubtitle.textContent = this._name;
    togglePopupVisibility(imagePopup);
  }

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();

    this._element.querySelector(".element__image").src = this._link;
    this._element.querySelector(".element__image").alt = this._name;
    this._element.querySelector(".element__title").textContent = this._name;

    return this._element;
  }
}

export { Card };
