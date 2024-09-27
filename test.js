const { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

test('suma 14 + 9 es igual a 23', () => {
    let total = sum(14, 9);
    expect(total).toBe(23);
});

test("Un euro debería ser 1.07 dólares", function() {
    const dollars = fromEuroToDollar(3.5);
    const expected = 3.5 * 1.07;
    expect(dollars).toBe(expected);
});

test("Un dólar debería ser aproximadamente 146.26 yenes", function() {
    const yen = fromDollarToYen(1);
    const expected = (1 / 1.07) * 156.5; // Convertir dólar a euro, luego euro a yen
    expect(yen).toBeCloseTo(expected);
});

test("Un yen debería ser aproximadamente 0.00556 libras", function() {
    const pounds = fromYenToPound(1);
    const expected = (1 / 156.5) * 0.87; // Convertir yen a euro, luego euro a libra
    expect(pounds).toBeCloseTo(expected);
});
