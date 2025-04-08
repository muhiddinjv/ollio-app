import axiosInstance from '../screens/Auth/axiostance';

export const checkStockQuantity = async (productId, quantity) => {
  try {
    const response = await axiosInstance.post("stock/checkqty", {
      _id: productId,
      quantity,
    });
    return response.data; // Return the response data
  } catch (error) {
    console.error("Error checking stock quantity:", error);
    throw error; // Rethrow the error for handling in the calling function
  }
};

export const emailValidator = (email) => {
  const re = /\S+@\S+\.\S+/;

  if (!email || email.length <= 0) return 'Email cannot be empty.';
  if (!re.test(email)) return 'Ooops! We need a valid email address.';

  return '';
};

export function phoneValidator(phoneNumber) {
  const regex = /^998\d{7}$/;

  if (!phoneNumber || phoneNumber.length <= 0) return 'Email cannot be empty.';
  if (!regex.test(phoneNumber)) return 'Ooops! We need a valid email address.';

  return regex.test(phoneNumber);
}

export const passwordValidator = (password) => {
  if (!password || password.length <= 0) return 'Password cannot be empty.';

  return '';
};

export const calculateTotal = (products) => {
  return products.reduce((total, item) => total + (item.price * item.quantity), 0);
};



