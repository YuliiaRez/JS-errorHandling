/*Для рекурсивной функции возведения числа в степень pow(base, exponent) реализовать валидацию 
передаваемых значений и генерацию ошибок соостветствующих типов.
Вызов функции заключить в блок try с отлавливанием исключительных ситуаций (ошибок) 
разных типов с оповещением пользователя о типе наступившей ошибки. */
const isPrime = num => {
    for (let i = 2; i < num; i++)
        if (num % i === 0) return false;
    return num > 1;
};
function getExpon(base, exp) {
    if (typeof base !== 'number' && typeof exp !== 'number') {
        throw new TypeError('Input values is not  number');
    }
    if (exp <= 0 && !isPrime(exp)) {
        throw new RangeError('The exponent must be a natural number values');
    }
    if (!Number.isFinite(base) && !Number.isFinite(exp)) {
        throw new RangeError('The arguments must be  finite values');
    }
    if (!Number.isSafeInteger(base) && !Number.isSafeInteger(exp)) {
        throw new RangeError('The arguments must be a finite values');
    }

    return exp === 1 ? base : base * getExpon(base, exp - 1);
}
try {
    const res1 = getExpon(-2, 3);
    console.log(res1);
    const res = getExpon(2, -3);
    console.log(res);
} catch (e) {
    console.error(e)
}
