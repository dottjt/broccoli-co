
import { validateFormValues } from './functions';

describe('validateFormValues', () => {
  const invalidFullName = "jr";
  const validFullName = "Julius Reade";

  const invalidEmail = "cakecakecake";
  const validEmail = "cake@gmail.com";
  
  const invalidEmailConfirmation = "wahwahwahwahwah";
  const validEmailConfirmation = "cake@gmail.com";
  
  const invalidRecaptcha = false;
  const validRecaptcha = true;


  it('invalidFullName + validEmail + validEmailConfirmation + validRecaptcha' , () => {
    const formValidationObject = validateFormValues(invalidFullName, validEmail, validEmailConfirmation, validRecaptcha);
    
    expect(formValidationObject.isValid).toBe(false);
    expect(formValidationObject.errorMessage.length).toBeGreaterThan(0);
    expect(formValidationObject.errorType).toBe("fullName");
  });

  it('validFullName + validEmail + invalidEmailConfirmation + validRecaptcha' , () => {
    const formValidationObject = validateFormValues(validFullName, validEmail, invalidEmailConfirmation, validRecaptcha);
    
    expect(formValidationObject.isValid).toBe(false);
    expect(formValidationObject.errorMessage.length).toBeGreaterThan(0);    
    expect(formValidationObject.errorType).toBe("emailConfirmation");    
  });

  it('validFullName + invalidEmail + invalidEmailConfirmation + validRecaptcha' , () => {
    const formValidationObject = validateFormValues(validFullName, invalidEmail, invalidEmailConfirmation, validRecaptcha);
    
    expect(formValidationObject.isValid).toBe(false);
    expect(formValidationObject.errorMessage.length).toBeGreaterThan(0);    
    expect(formValidationObject.errorType).toBe("emailConfirmation");    
  });

  it('validFullName + validEmail + validEmailConfirmation + invalidRecaptcha' , () => {
    const formValidationObject = validateFormValues(validFullName, validEmail, validEmailConfirmation, invalidRecaptcha);
    
    expect(formValidationObject.isValid).toBe(false);
    expect(formValidationObject.errorMessage.length).toBeGreaterThan(0);    
    expect(formValidationObject.errorType).toBe("recaptcha");      
  });

  it('validFullName + validEmail + validEmailConfirmation + validRecaptcha' , () => {
    const formValidationObject = validateFormValues(validFullName, validEmail, validEmailConfirmation, validRecaptcha);
    
    expect(formValidationObject.isValid).toBe(true);
    expect(formValidationObject.errorMessage.length).toBe(0);    
    expect(formValidationObject.errorType).toBe("success");      
  });
})
