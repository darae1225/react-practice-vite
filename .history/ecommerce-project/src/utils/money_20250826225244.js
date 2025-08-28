export function formatMoney(amountCents) {

  return {
    const isNegative = amountCents < 0;
    const absoluteValue = Maath.abs(amountCents);
    const dollars = (absoluteValue/100).toFixed(2);
    
    return isNegative ? `-$${dollars}` : `$${dollars}`
  }
}
