export const emailValidator = email => {
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
  
  export const passwordValidator = password => {
    if (!password || password.length <= 0) return 'Password cannot be empty.';
  
    return '';
  };
  
  export const calculateTotal = products => {
    return products.reduce((total, item) => total + item.price * item.quantity, 0);
  };
  
  export const formatDate = dateString => {
    const date = new Date(dateString);
    const options = {
      hour: '2-digit',
      minute: '2-digit',
      day: '2-digit',
      month: '2-digit',
      year: '2-digit',
    };
    // Format to HH:MM, DD-MM-YYYY
    return date.toLocaleString('en-GB', options).replace(',', ''); 
  };
  
  export const formattedDate = date => {
    const d = new Date(date);
    const day = String(d.getDate()).padStart(2, '0');
    const month = d.toLocaleString('default', { month: 'short' });
    const year = d.getFullYear();
    const hours = String(d.getHours()).padStart(2, '0');
    const minutes = String(d.getMinutes()).padStart(2, '0');
  
    return `${day}_${month}_${year}_${hours}_${minutes}`;
  };
  
  export const formatCurrency = (amount) => {
    if (typeof amount !== 'number') {
      return 'N/A';
    }
    if (amount >= 1000000000) {
      return `${(amount / 1000000000).toFixed(1)}B`;
    }
    if (amount >= 1000000) {
      return `${(amount / 1000000).toFixed(1)}M`;
    }
    if (amount >= 1000) {
      return `${(amount / 1000).toFixed(0)}K`;
    }
    return amount.toLocaleString('en-US');
  };
  
  export const formatPercentage = (value) => {
    if (typeof value !== 'number' || isNaN(value)) {
      return 'N/A';
    }
    const sign = value >= 0 ? '+' : '';
    return `${sign}${value.toFixed(2)}%`;
  };
  
  export const formatXAxisLabel = (label,selectedPeriod) => {
    switch (selectedPeriod) {
      case 'day':
        return dayjs(label, 'HH:mm').format('h A');
      case 'week':
      case 'month':
        return dayjs(label).format('DD MMM');
      case 'year':
        return dayjs(label).format('MMM YY');
      default:
        return label;
    }
  };
  
  export const formatYLabel= (yValue) => {
    if (yValue >= 1000000000) return `${(yValue / 1000000000).toFixed(1)}B`;
    if (yValue >= 1000000) return `${(yValue / 1000000).toFixed(1)}M`;
    return yValue.toLocaleString();
  }
  
  export const formatError = error => {
    if (error.response) {
      return error.response.data.message;
    }
    return error.message;
  };
  