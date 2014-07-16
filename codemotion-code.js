/**
 * @HackathonLovers challenge to generate a code to win a free pass to 
 * @codemotion_es 2014
 *  
 * 1. Coger como input la palabra "Codemotion" (tal cual, pero sin las comillas)
 * 2. Para cada carácter de la palabra coger su código ASCII numérico.
 * 3. Sumar cada uno de estos códigos numéricos.
 * 4. Calcular el SHA-512 en hexadecimal de la suma anteriormente obtenida.
 * 5. Coger los 6 primeros caracteres de la firma anteriormente obtenida.
 * 6. Sacar como output dicho código hexadecimal de 6 caracteres.
 */

var asciiSum = 'Codemotion'.split('').reduce(function (sum, char) {
    sum += char.charCodeAt(0);
    return sum;
}, 0);
var code = require('crypto').createHash('sha512').update(String(asciiSum)).digest('hex').substr(0,6);
console.log(code);
