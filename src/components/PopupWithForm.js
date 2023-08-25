import Popup from "./Popup";

class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._formElement = this._popup.querySelector(".popup__form");
    this._buttonValue = this._popup.querySelector(
      ".popup__submit-button"
    ).textContent;
  }
  _getInputValues() {
    this._formInputs = this._popup.querySelectorAll(".popup__input");
    this._formValues = {};
    this._formInputs.forEach((input) => {
      this._formValues[input.name] = input.value;
    });
    return this._formValues;
  }
  setEventListeners() {
    super.setEventListeners();
    this._formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this.renderLoading(true);
      this._handleFormSubmit(this._getInputValues());
      evt.stopPropagation();
    });
  }
  close() {
    super.close();
    this._formElement.reset();
  }
  renderLoading(isLoading) {
    if (isLoading) {
      this._popup.querySelector(".popup__submit-button").textContent =
        "Guardando...";
    } else {
      this._popup.querySelector(".popup__submit-button").textContent =
        this._buttonValue;
    }
  }
}

export default PopupWithForm;
