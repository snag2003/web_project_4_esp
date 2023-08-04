//class for cards
class Card {
  constructor({ cardItem, handleCardClick }, cardSelector) {
    this._name = cardItem.name;
    this._link = cardItem.link;
    this._card = document.querySelector(cardSelector);
    this._handleCardClick = handleCardClick;
  }

  _getTemplate() {
    const cardElement = this._card.content
      .querySelector(".element")
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
        this._handleCardClick({ name: this._name, link: this._link });
      });
  }

  generateCard() {
    this._element = this._getTemplate();
    const elementImage = this._element.querySelector(".element__image");
    const elementTitle = this._element.querySelector(".element__title");
    this._setEventListeners();

    elementImage.src = this._link;
    elementImage.alt = this._name;
    elementTitle.textContent = this._name;

    return this._element;
  }
}

export default Card;
