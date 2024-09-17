//https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/

function maxProfit(prices: number[]): number {
    let minPrice = Number.MAX_VALUE;
    const profit: Array<number> = [];
    for (let i=0; i< prices.length; i++) {
        if (prices[i] < minPrice) {
            minPrice = prices[i];
        } else {
            profit.push(prices[i] - minPrice);
        }
    }
    return profit.length > 0 ? Math.max(...profit) : 0;
};