/**
 * @param {number[]} nums
 * @return {number}
 */

 function Accumulation(arr){
    return arr.reduce((a,b) => a+b)
}

var pivotIndex = function(nums) {
    let somaEsquerda = 0
    let somaDireita = Accumulation(nums)

    for(let i = 0; i < nums.length; i++){
        let somaAtual = nums[i];

        somaDireita -= somaAtual

        if(somaDireita == somaEsquerda){
            return i
        }
        somaEsquerda +=somaAtual
    }
    return -1    
};

