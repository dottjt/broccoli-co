
import { validateFormValues } from './functions';

describe('validateFormValues', () => {
  const invalidFullName = "jr";
  const validFullName = "Julius Reade";

  const invalidEmail = "cakecakecake";
  const validEmail = "cake@gmail.com";
  
  const invalidEmailConfirmation = "wahwahwahwahwah";
  const validEmailConfirmation = "cake@gmail.com";
  
  it('invalidFullName + validEmail + validEmailConfirmation' , () => {
    const formValidationObject = validateFormValues(invalidFullName, validEmail, validEmailConfirmation);
    
    expect(formValidationObject.isValid).to.be.equal(false);
    expect(formValidationObject.errorMessage.length).to.be.greater.than(0);
    expect(formValidationObject.errorType).to.be.equal("fullName");
  });

  it('validFullName + invalidEmail + validEmailConfirmation' , () => {
    const formValidationObject = validateFormValues(validFullName, validEmail, validEmailConfirmation);
    
    expect(formValidationObject.isValid).to.be.equal(false);
    expect(formValidationObject.errorMessage.length).to.be.greater.than(0);    
    expect(formValidationObject.errorType).to.be.equal("email");    
  });

  it('validFullName + validEmail + invalidEmailConfirmation' , () => {
    const formValidationObject = validateFormValues(validFullName, validEmail, validEmailConfirmation);
    
    expect(formValidationObject.isValid).to.be.equal(false);
    expect(formValidationObject.errorMessage.length).to.be.greater.than(0);    
    expect(formValidationObject.errorType).to.be.equal("emailConfirmation");    
  });

  it('validFullName + validEmail + validEmailConfirmation' , () => {
    const formValidationObject = validateFormValues(validFullName, validEmail, validEmailConfirmation);
    
    expect(formValidationObject.isValid).to.be.equal(false);
    expect(formValidationObject.errorMessage.length).to.be.greater.than(0);    
    expect(formValidationObject.errorType).to.be.equal("recaptcha");      
  });

  it('validFullName + validEmail + validEmailConfirmation' , () => {
    const formValidationObject = validateFormValues(validFullName, validEmail, validEmailConfirmation);
    
    expect(formValidationObject.isValid).to.be.equal(false);
    expect(formValidationObject.errorMessage.length).to.be.equal(0);    
    expect(formValidationObject.errorType).to.be.equal("recaptcha");      
  });
})
