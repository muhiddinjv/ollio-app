import axiosInstance from '../api/axiostance';

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

export const formatDate = (dateString) => {
  const date = new Date(dateString);
  const options = {
    hour: '2-digit',
    minute: '2-digit',
    day: '2-digit',
    month: '2-digit',
    year: '2-digit',
  };
  return date.toLocaleString('en-GB', options).replace(',', ''); // Format to HH:MM, DD-MM-YYYY
};

export const formattedDate = (date) => {
  const d = new Date(date);
  const day = String(d.getDate()).padStart(2, '0');
  const month = d.toLocaleString('default', { month: 'short' });
  const year = d.getFullYear();
  const hours = String(d.getHours()).padStart(2, '0');
  const minutes = String(d.getMinutes()).padStart(2, '0');

  return `${day}_${month}_${year}_${hours}_${minutes}`;
};



