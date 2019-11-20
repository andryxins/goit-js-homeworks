'use strcit';
let userDeliveryCountry = prompt('Куда доставить товар?');
let deliveryPrice;

if (userDeliveryCountry !== null) {
  userDeliveryCountry = userDeliveryCountry.toLowerCase();
  switch (userDeliveryCountry) {
    case 'китай':
      deliveryPrice = 100;
      break;
    case 'чили':
      deliveryPrice = 250;
      break;
    case 'австралия':
      deliveryPrice = 170;
      break;
    case 'индия':
      deliveryPrice = 80;
      break;
    case 'ямайка':
      deliveryPrice = 120;
      break;
    default:
      alert('В вашей стране доставка не доступна');
  }
}
if (deliveryPrice) {
  const validUserDeliveryCountry =
    userDeliveryCountry[0].toUpperCase() + userDeliveryCountry.slice(1);
  alert(
    `Доставка в ${validUserDeliveryCountry} будет стоить ${deliveryPrice} кредитов`,
  );
}
