export const formatNumberToCLP = (number: number): string => {
  const formattedNumber = new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(number);
  return isNaN(number) ? "$-" : formattedNumber
};