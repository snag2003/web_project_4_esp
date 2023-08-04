class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
  }
  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      this.close();
    }
  }
  setEventListeners() {
    this._popup
      .querySelector(".popup__close-button")
      .addEventListener("click", (evt) => {
        evt.preventDefault();
        this.close();
        evt.stopPropagation();
      });

    this._popup.addEventListener("click", (evt) => {
      if (evt.target.classList.contains("popup")) this.close();
    });
  }
  open() {
    this._popup.classList.add("popup__visible");
    document.addEventListener("keydown", (evt) => {
      this._handleEscClose(evt);
    });
  }
  close() {
    this._popup.classList.remove("popup__visible");
    document.removeEventListener("keydown", (evt) => {
      this._handleEscClose(evt);
    });
  }
}

export default Popup;
