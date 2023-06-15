document.addEventListener("DOMContentLoaded", function () {
  // Declarations
  const initialCards = [
    // Array of Initial Cards. Each has a name and a link
    {
      name: "Valle de Yosemite",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg",
    },
    {
      name: "Lago Louise",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg",
    },
    {
      name: "Montañas Calvas",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg",
    },
    {
      name: "Latemar",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg",
    },
    {
      name: "Parque Nacional de la Vanoise",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg",
    },
    {
      name: "Lago di Braies",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg",
    },
  ];
  // Popup elements
  const popup = document.querySelector(".popup");
  const editPopup = document.querySelector(".popup_type_edit");
  const addPopup = document.querySelector(".popup_type_add");
  const imagePopup = document.querySelector(".popup_type_open-image");

  // Open and Close Buttons
  const editProfileButton = document.querySelector(".profile__edit-button");
  const addImageButton = document.querySelector(".profile__add-button");
  const addCloseButton = addPopup.querySelector(".popup__close-button");
  const editCloseButton = editPopup.querySelector(".popup__close-button");
  const imageCloseButton = imagePopup.querySelector(".popup__close-button");

  //Inputs
  const name = document.querySelector(".profile__name");
  const category = document.querySelector(".profile__category");

  const nameInput = document.querySelector("#name-input");
  const categoryInput = document.querySelector("#category-input");

  const titleInput = document.querySelector("#title-input");
  const urlInput = document.querySelector("#url-input");

  // Card template and container
  const cardTemplate = document
    .querySelector("#new-card")
    .content.querySelector(".element");
  const elementsContainer = document.querySelector(".elements__container");

  // Event listeners
  editProfileButton.addEventListener("click", () => {
    if (!popup.classList.contains("popup__visible")) {
      nameInput.value = name.textContent;
      categoryInput.value = category.textContent;
    }
    togglePopupVisibility(editPopup);
  });

  editCloseButton.addEventListener("click", () => {
    togglePopupVisibility(editPopup);
  });

  addImageButton.addEventListener("click", () => {
    clearInputs(titleInput, urlInput);
    togglePopupVisibility(addPopup);
  });

  addCloseButton.addEventListener("click", () => {
    clearInputs(titleInput, urlInput);
    togglePopupVisibility(addPopup);
  });

  imageCloseButton.addEventListener("click", () => {
    togglePopupVisibility(imagePopup);
  });

  editPopup.addEventListener("submit", handleProfileEditSubmit);
  addPopup.addEventListener("submit", handleAddCardSubmit);

  // submitting addPopup when pressing enter key
  urlInput.addEventListener("keyup", (event) => {
    evt.preventDefault();
    if (event.key === "Enter") {
      togglePopupVisibility(addPopup);
    }
  });

  // Function to clear inputs in a two field form
  function clearInputs(inputOne, inputTwo) {
    inputOne.value = "";
    inputTwo.value = "";
  }

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
    evt.preventDefault();

    const newCard = {
      name: titleInput.value,
      link: urlInput.value,
    };
    renderCard(newCard);
    togglePopupVisibility(addPopup);
  }

  // Function to render a card
  function renderCard(card) {
    elementsContainer.prepend(createCard(card));
  }

  // Function to create a card element
  function createCard(card) {
    const cardEntity = cardTemplate.cloneNode(true);

    const cardImage = cardEntity.querySelector(".element__image");
    const cardTitle = cardEntity.querySelector(".element__title");
    const cardDeleteButton = cardEntity.querySelector(
      ".element__delete-button"
    );
    const cardLikeButton = cardEntity.querySelector(".element__like-button");

    cardImage.src = card.link;
    cardImage.alt = card.name;
    cardTitle.textContent = card.name;

    cardDeleteButton.addEventListener("click", () => {
      const listItem = cardDeleteButton.closest(".element");
      listItem.remove();
    });

    cardLikeButton.addEventListener("click", (evt) => {
      evt.target.classList.toggle("element__like-button_active");
    });

    cardImage.addEventListener("click", () => {
      const popupImage = document.querySelector(".popup__image");
      const popupImageSubtitle = document.querySelector(
        ".popup__image-subtitle"
      );
      popupImage.src = card.link;
      popupImage.alt = card.name;
      popupImageSubtitle.textContent = card.name;
      togglePopupVisibility(imagePopup);
    });

    return cardEntity;
  }

  initialCards.forEach((card) => {
    renderCard(card);
  });

  // Function to close popup when you click outside of it
  function closePopupOnOutsideClick(popup, popupElement) {
    popupElement.addEventListener("click", (evt) => {
      if (evt.target.classList.contains("popup")) {
        togglePopupVisibility(popup);
      }
    });
  }

  closePopupOnOutsideClick(editPopup, editPopup);
  closePopupOnOutsideClick(addPopup, addPopup);
  closePopupOnOutsideClick(imagePopup, imagePopup);

  // Function to handle escape key press and close popups
  function escapeKeyHandler(evt) {
    if (evt.key === "Escape") {
      closePopup(imagePopup);
      closePopup(editPopup);
      closePopup(addPopup);
    }
  }

  // Function to close popup
  function closePopup(popup, popupElement) {
    if (popup.classList.contains("popup__visible")) {
      togglePopupVisibility(popup);
    }
  }

  document.addEventListener("keydown", escapeKeyHandler);
});
