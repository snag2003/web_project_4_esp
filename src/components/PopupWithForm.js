import Popup from "./Popup";

class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._formElement = this._popup.querySelector(".popup__form");
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
      this._handleFormSubmit(this._getInputValues());
      this.close();
      evt.stopPropagation();
    });
  }
  close() {
    super.close();
    this._formElement.reset();
  }
}

export default PopupWithForm;
