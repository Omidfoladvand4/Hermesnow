export const toPersianNumbers = (num) => {
  if (!num && num !== 0) return '';
  
  const persianDigits = '۰۱۲۳۴۵۶۷۸۹';
  const englishDigits = '0123456789';
  
  return String(num)
    .split('')
    .map(char => {
      const index = englishDigits.indexOf(char);
      return index !== -1 ? persianDigits[index] : char;
    })
    .join('');
};