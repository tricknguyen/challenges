//https://leetcode.com/problems/divisor-game/

export function divisorGame(n: number): boolean {
   return n % 2 == 0 ? true : false;
};

console.log(divisorGame(2));