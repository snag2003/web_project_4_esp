import Popup from "./Popup";

class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }

  open(name, link) {
    this._popup.querySelector(".popup__image").src = link;
    this._popup.querySelector(".popup__image-subtitle").textContent = name;
    this._popup.querySelector(".popup__image").alt = name;

    super.open();
  }
}

export default PopupWithImage;
