export const emailValidator = (email: string) => {
    const re = /\S+@\S+\.\S+/;
  
    if (!email || email.length <= 0) return 'Email cannot be empty.';
    if (!re.test(email)) return 'Ooops! We need a valid email address.';
  
    return '';
  };

  export function phoneValidator(phoneNumber:string) {
    const regex = /^998\d{7}$/;

    if (!phoneNumber || phoneNumber.length <= 0) return 'Email cannot be empty.';
    if (!regex.test(phoneNumber)) return 'Ooops! We need a valid email address.';

    return regex.test(phoneNumber);
  }
  
  export const passwordValidator = (password: string) => {
    if (!password || password.length <= 0) return 'Password cannot be empty.';
  
    return '';
  };
  
  export const nameValidator = (name: string) => {
    if (!name || name.length <= 0) return 'Name cannot be empty.';
  
    return '';
  };