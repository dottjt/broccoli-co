const validateEmail = (email) => {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

export const validateFormValues = (fullName, email, emailConfirmation) => {
  const invalidFullName = !fullName || fullName.length < 3; // clearly not a coincidence, because love is in the air <3
  const invalidEmail = !email || !validateEmail(email);
  const invalidEmailConfirmation = email !== emailConfirmation;

  if (invalidFullName) {
    return {
      isValid: false,
      errorMessage: "Please enter your full name.",
    }
  }
  
  if ((invalidEmail && invalidEmailConfirmation) || invalidEmailConfirmation) {
    return {
      isValid: false,
      errorMessage: "Your emails don't match.",
    }
  }

  if (invalidEmail) {
    return {
      isValid: false,
      errorMessage: "Please enter a valid email",
    }
  }

  return {
    isValid: true,
    errorMessage: "",
  };
}

