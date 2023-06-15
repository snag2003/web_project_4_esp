// Form validation
const showInputError = (formElement, inputElement, errorMessage) => {
  // Find the error element corresponding to the input element
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  // Add error styles to the input element
  inputElement.classList.add("popup__input_type_error");
  // Set the error message text
  errorElement.textContent = errorMessage;
  // Display the error message
  errorElement.classList.add("popup__input-error_active");
};

const hideInputError = (formElement, inputElement) => {
  // Find the error element corresponding to the input element
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  // Remove error styles from the input element
  inputElement.classList.remove("popup__input_type_error");
  // Hide the error message
  errorElement.classList.remove("popup__input-error_active");
  // Clear the error message text
  errorElement.textContent = "";
};

const checkInputValidity = (formElement, inputElement) => {
  // Check if the input element is valid
  if (!inputElement.validity.valid) {
    // If not valid, show the input error
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    // If valid, hide the input error
    hideInputError(formElement, inputElement);
  }
};

const hasInvalidInputs = (inputList) => {
  // Filter the input list to find invalid inputs
  return inputList.filter((inputElement) => {
    return !inputElement.validity.valid;
  });
};

const toggleButtonState = (inputList, buttonElement) => {
  const invalidInputs = hasInvalidInputs(inputList);
  // Check if there are any invalid inputs
  if (invalidInputs.length > 0) {
    // If there are invalid inputs, disable the button
    buttonElement.classList.add("popup__submit-button_inactive");
    buttonElement.disabled = true;
  } else {
    // If all inputs are valid, enable the button
    buttonElement.classList.remove("popup__submit-button_inactive");
    buttonElement.disabled = false;
  }
};

const setEventListeners = (formElement) => {
  // Get the input list and submit button element within the form
  const inputList = Array.from(formElement.querySelectorAll(".popup__input"));
  const buttonElement = formElement.querySelector(".popup__submit-button");
  // Toggle the button state based on input validity
  toggleButtonState(inputList, buttonElement);
  inputList.forEach((inputElement) => {
    // Add input event listeners to check input validity and toggle button state
    inputElement.addEventListener("input", function () {
      checkInputValidity(formElement, inputElement);
      toggleButtonState(inputList, buttonElement);
    });
  });
};

const enableValidation = () => {
  // Get all form elements
  const formList = Array.from(document.querySelectorAll(".popup__form"));
  formList.forEach((formElement) => {
    // Prevent form default submission and set event listeners for each form
    formElement.addEventListener("submit", function (evt) {
      evt.preventDefault();
    });
    // Get the fieldset list within the form and set event listeners for each fieldset
    const fieldsetList = Array.from(
      formElement.querySelectorAll(".popup__fields")
    );
    fieldsetList.forEach((fieldset) => {
      setEventListeners(fieldset);
    });
  });
};

// Enable form validation
enableValidation();
