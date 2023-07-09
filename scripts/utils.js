import {
  name,
  category,
  nameInput,
  categoryInput,
  titleInput,
  urlInput,
  editPopup,
  addPopup,
  renderCard,
} from "./index.js";
// Function to toggle the visibility of a popup
function togglePopupVisibility(item) {
  item.classList.toggle("popup__visible");
}

// Submit handler for profile edit form
function handleProfileEditSubmit(evt) {
  evt.preventDefault();

  name.textContent = nameInput.value;
  category.textContent = categoryInput.value;

  togglePopupVisibility(editPopup);
}

// Submit handler for add card form
function handleAddCardSubmit(evt) {
  const submitButton = addPopup.querySelector(".popup__submit-button");
  evt.preventDefault();

  const newCard = {
    name: titleInput.value,
    link: urlInput.value,
  };

  renderCard(newCard);
  submitButton.disabled = true;
  submitButton.classList.add("popup__submit-button_inactive");
  togglePopupVisibility(addPopup);
}

export { togglePopupVisibility, handleProfileEditSubmit, handleAddCardSubmit };
