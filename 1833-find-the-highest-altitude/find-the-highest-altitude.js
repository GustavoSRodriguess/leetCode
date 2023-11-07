/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    let anterior = 0
    let maior = 0

    for(let i = 0; i < gain.length; i++){
        anterior += gain[i]
        if(anterior > maior){
            maior = anterior 
        }
    }
    return maior
};