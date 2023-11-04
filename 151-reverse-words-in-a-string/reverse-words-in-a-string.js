/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let i = 0, j = s.length - 1;
    while (i <= j && s[i] === ' ') i++
    while (j >= i && s[j] === ' ') j--;
    s = s.substring(i, j+1);

    let palavras = s.split(/\s+/);
    let out = '';

    for (let k = palavras.length - 1; k > 0; k--){
        out += palavras[k] + ' ';
    }
    out +=palavras[0]
    return out;
};