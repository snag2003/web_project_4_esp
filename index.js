let popup = document.querySelector(".popup"); 

let editProfileButton = document.querySelector(".profile__edit-button")
let addImageButton = document.querySelector(".profile__add-button")

let submitButton = document.querySelector(".form__submit-button");

editProfileButton.addEventListener("click", popupDisplay);

function popupDisplay() {
    popup.classList.toggle("popup__closed");
}

function handleProfileFormSubmit(evt) {
    evt.preventDefault();

    let nameInput = document.querySelector("#name-input");
    let nameCategory = document.querySelector("#category-input");

    newName = nameInput.value;
    newCategory = nameCategory.value;

    let name = document.querySelector(".profile__name");
    let category = document.querySelector(".profile__category");

    name.textContent = newName;
    category.textContent = newCategory;

    popupDisplay();
}

popup.addEventListener('submit', handleProfileFormSubmit);
