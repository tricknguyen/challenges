function coinChange(coins: number[], amount: number): number {
    // const newArr = coins.sort((a,b) => b-a);
    // const temp = amount/newArr[0];
    // let count = 0;
    // if (coins.findIndex(t => t = temp) > -1) {
        
    //     for (let i=0; i<newArr.length; i++) {
    //         const quotient = Math.floor(amount / newArr[i])
    //         const remainder = amount % newArr[i];
    //         if (remainder === 0) {
    //             count = quotient;
    //         } else {
                
    //         }
    //     }
       
    // } else {
    //     return count;
    // }

    const cache = new Array(amount+1).fill(Infinity);
};