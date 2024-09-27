const sum = (a, b) => {
    return a + b;
};

let oneEuroIs = {
    "JPY": 156.5,
    "USD": 1.07,
    "GBP": 0.87
};

const fromEuroToDollar = function(valueInEuro) {
    return valueInEuro * oneEuroIs.USD;
};

const fromDollarToYen = function(dollarAmount) {
    let euroAmount = dollarAmount / oneEuroIs.USD;
    return euroAmount * oneEuroIs.JPY;
};

const fromYenToPound = function(yenAmount) {
    let euroAmount = yenAmount / oneEuroIs.JPY;
    return euroAmount * oneEuroIs.GBP;
};

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };
