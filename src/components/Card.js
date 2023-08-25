//class for cards
class Card {
  constructor(
    { cardItem, handleCardClick, handleDeleteClick, handleLikeClick },
    cardSelector
  ) {
    this._cardItem = cardItem;
    this._name = cardItem.name;
    this._link = cardItem.link;
    this._likes = cardItem._likes;
    this._card = document.querySelector(cardSelector);
    this._handleCardClick = handleCardClick;
    this._handleDeleteClick = handleDeleteClick;
    this._handleLikeClick = handleLikeClick;
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
        this._handleDeleteClick(listItem);
      });

    this._element
      .querySelector(".element__like-button")
      .addEventListener("click", (evt) => {
        const LikeButtonIsActive = this._element
          .querySelector(".element__like-button")
          .classList.contains("element__like-button_active");
        this._handleLikeClick(LikeButtonIsActive);
        evt.target.classList.toggle("element__like-button_active");
      });

    this._element
      .querySelector(".element__image")
      .addEventListener("click", () => {
        this._handleCardClick({ name: this._name, link: this._link });
      });
  }

  showCardIcons(result) {
    const buttonItem = this._element.querySelector(".element__delete-button");
    //check if it's a new card just created
    if (this._cardItem.likes === undefined) {
      //likes counter
      this._element.querySelector(".element__likes").textContent = 0;
      //show delete bin
      buttonItem.classList.add("element__delete-button_active");
    } else {
      //likes counter
      this._element.querySelector(".element__likes").textContent =
        this._cardItem.likes.length;
      this._cardItem.likes.forEach((element) => {
        if (result._id === element._id)
          this._element
            .querySelector(".element__like-button")
            .classList.toggle("element__like-button_active");
      });
      //show delete bin if the card was created by the user
      if (result._id === this._cardItem.owner._id) {
        buttonItem.classList.add("element__delete-button_active");
      }
    }
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
