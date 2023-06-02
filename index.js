const initialCards = [
    {
      name: "Valle de Yosemite",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg"
    },
    {
      name: "Lago Louise",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg"
    },
    {
      name: "Montañas Calvas",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg"
    },
    {
      name: "Latemar",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg"
    },
    {
      name: "Parque Nacional de la Vanoise",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg"
    },
    {
      name: "Lago di Braies",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg"
    }
];

const popup = document.querySelector(".popup"); 

const editPopup = document.querySelector(".popup_type_edit")
const addPopup = document.querySelector(".popup_type_add")
const imagePopup = document.querySelector(".popup_type_open-image")
    
const editProfileButton = document.querySelector(".profile__edit-button");
const addImageButton = document.querySelector(".profile__add-button");
const submitButton = document.querySelector(".popup__submit-button");
const addCloseButton = addPopup.querySelector(".popup__close-button");
const editCloseButton = editPopup.querySelector(".popup__close-button");
const imageCloseButton = imagePopup.querySelector(".popup__close-button");

const name = document.querySelector(".profile__name");
const category = document.querySelector(".profile__category");

const nameInput = document.querySelector("#name-input");
const categoryInput = document.querySelector("#category-input");

const titleInput = document.querySelector("#title-input");
const urlInput = document.querySelector("#url-input");

const cardTemplate = document.querySelector("#new-card").content.querySelector('.element');
const elementsContainer = document.querySelector(".elements__container");


editProfileButton.addEventListener("click", () => {
    if (!popup.classList.contains("popup__visible")) {
        nameInput.value = name.textContent;
        categoryInput.value = category.textContent;
    }
    popupDisplay(editPopup)
});

addImageButton.addEventListener("click", () => {
    popupDisplay(addPopup)
});

addCloseButton.addEventListener("click", () => {
    popupDisplay(addPopup)
});

imageCloseButton.addEventListener("click", () => {
    popupDisplay(imagePopup)
});

editPopup.addEventListener("submit", handleProfileEditSubmit);
addPopup.addEventListener("submit", handleAddCardSubmit);

function popupDisplay(item) {
    item.classList.toggle("popup__visible");
}

function handleProfileEditSubmit(evt) {
    evt.preventDefault();

    name.textContent = nameInput.value;
    category.textContent = categoryInput.value;

    popupDisplay(editPopup);
}

function handleAddCardSubmit(evt) {
    evt.preventDefault();
    
    const newCard =
    {
        name: titleInput.value,
        link: urlInput.value
    };
    renderCard(newCard);
    popupDisplay(addPopup);
}

function renderCard(card) {
    elementsContainer.prepend(createCard(card));
}

function createCard(card) {
    const cardEntity = cardTemplate.cloneNode(true);

    const cardImage = cardEntity.querySelector('.element__image');
    const cardTitle = cardEntity.querySelector('.element__title');
    const cardDeleteButton = cardEntity.querySelector('.element__delete-button');
    const cardLikeButton = cardEntity.querySelector('.element__like-button');
    
    cardImage.src = card.link;
    cardImage.alt = card.name;
    cardTitle.textContent = card.name;
  
    cardDeleteButton.addEventListener('click', () => {
      const listItem = cardDeleteButton.closest(".element");
      listItem.remove();
    });

    cardLikeButton.addEventListener('click', (evt) => {
      evt.target.classList.toggle('element__like-button_active');
    });

    cardImage.addEventListener('click', () => {
        let popupImage = document.querySelector('.popup__image');
        let popupImageSubtitle = document.querySelector('.popup__image-subtitle');
        popupImage.src = card.link;
        popupImage.alt = card.name;
        popupImageSubtitle.textContent = card.name;
        popupDisplay(imagePopup);
    });

    return cardEntity;
}

initialCards.forEach((card) => {
    renderCard(card);
});