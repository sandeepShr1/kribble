
export const formatPrice = (value: number): string => {
      const symbol = 'रु  ';
      if (value >= 10000000) {
            return symbol + (value / 10000000).toFixed(2).replace(/\.00$/, '') + ' Cr';
      } else if (value >= 100000) {
            return symbol + (value / 100000).toFixed(2).replace(/\.00$/, '') + ' Lakh';
      } else {
            return symbol + value.toString();
      }
};