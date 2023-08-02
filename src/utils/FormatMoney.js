const formatMoney = (area, currencyTag) => {
    return new Intl.NumberFormat(area, {
        style: 'currency',
        currency: currencyTag,
    });
};
export default formatMoney;
