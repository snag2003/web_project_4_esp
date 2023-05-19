const popup = document.querySelector(".popup"); 

const editPopup = document.querySelector(".popup_type_edit")
const addPopup = document.querySelector(".popup_type_add")

const editProfileButton = document.querySelector(".profile__edit-button")
const addImageButton = document.querySelector(".profile__add-button")
const submitButton = document.querySelector(".form__submit-button");
const closeButton = document.querySelector(".popup_type_add.popup__close-button");

const name = document.querySelector(".profile__name");
const category = document.querySelector(".profile__category");

const nameInput = document.querySelector("#name-input");
const categoryInput = document.querySelector("#category-input");

function popupDisplayEdit() {
    if (!popup.classList.contains("popup__visible")) {
        nameInput.value = name.textContent;
        categoryInput.value = category.textContent;
    }

    popup.classList.toggle("popup__visible");
}

function popupDisplayAdd() {
    addPopup.classList.toggle("popup__visible");
}

function handleProfileEditSubmit(evt) {
    evt.preventDefault();

    name.textContent = nameInput.value;
    category.textContent = categoryInput.value;

    popupDisplayEdit();
}

function handleProfileAddSubmit(evt) {
    evt.preventDefault();

    popupDisplayAdd();
}

function handleCloseButton() {
    addPopup.classList.remove("popup__visible")
}

editProfileButton.addEventListener("click", popupDisplayEdit);
addImageButton.addEventListener("click", popupDisplayAdd);
editPopup.addEventListener("submit", handleProfileEditSubmit);
addPopup.addEventListener("submit", handleProfileAddSubmit);
closeButton.addEventListener("click", handleCloseButton)