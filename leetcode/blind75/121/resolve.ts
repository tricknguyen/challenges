//https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/

function maxProfit(prices: number[]): number {
    const min = Math.min(...prices);

    const indexMin = prices.findIndex(t => t === min);

    if (indexMin === prices.length) {
        return 0;
    } else {
        const subPrices = prices.slice(0, indexMin);
        const max = Math.max(...subPrices);

        const indexMax = subPrices.findIndex(t => t === max);
        
        return prices[indexMax] - min;
    }
};