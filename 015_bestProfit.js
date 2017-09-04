// Given an array for which the ith element is the price of a given stock on day i, assuming you are only permitted to buy the stock once, and then, after you buy it, sell the stock once, write a function to determine the maximum amount of money you can make.

// Examples:
// Input: [7, 1, 5, 3, 6, 4]
// Output: 5
// max. profit = 6-1 = 5 (not 7-1 = 6, because you need to buy the stock before you can sell it)

// Input: [7, 6, 4, 3, 1]
// Output: 0
// In this case, no transaction is done, i.e. max profit = 0.

//  Input: [1, 2, 3, 4]
// Output: 4 - 1 = 3

// input: array
// output: max profit number
// edge cases? input always array of #s no #, str, {}, func...
// edge cases: [] -- 0?
// constraints: None


function maxProfit(stockPrices) {
    // solution 1: brute force - calculcate every single possible cases get the maximum
    
    // var result = [];
    // var buyingPrice;
    // var sellingPrice;
    
    // // iterate stockPrices assign value to buying price
    // for (let i = 0; i < stockPrices.length; i++) {
    //   buyingPrice = stockPrices[i];
    //   // iterate stockPrices assign value to selling price
    //   for (let j = 0; j < stockPrices.length; j++) {
    //     // if the buying is before selling it is good otherwise it is not
    //     if (i < j) {
    //       // calculate the difference and append to the result
    //       sellingPrice = stockPrices[j];
    //       result.push(sellingPrice - buyingPrice);        
    //     }
    //   };
    // };
  
    // if (result.length !== 0) {
    //   if (Math.max(...result) > 0) {
    //     return Math.max(...result);
    //   };
    // }
    
    // return 0;
  
    
    // solution 2
    // buyingPrice
    // sellingPrice
    
    // iterate stockPrices
      // when the number is smaller than then previous
        // buyingPrice = current
    // return 0;
    
    // when the number is larger than the previous
    
    let profit = 0;
    let smallestPriceSeen = Infinity;
    let difference;
    
    for (let i = 0; i < stockPrices.length; i++) {
      difference = stockPrices[i] - smallestPriceSeen;
      profit = difference > profit ? difference : profit; 
      smallestPriceSeen = stockPrices[i] < smallestPriceSeen ? stockPrices[i] : smallestPriceSeen;
    }
  
    return profit;
  }
  
  
  console.log(maxProfit([5, 2, 3, 8, 1, 8]) === 7)
  console.log(maxProfit([5, 1, 3, 10, 7, 12]) === 11)
  console.log(maxProfit([4, 11, 2, 9, 10, 9]) === 8)
  console.log(maxProfit([7, 1, 5, 3, 6, 4]) === 5)
  console.log(maxProfit([7, 6, 4, 3, 1]) === 0)
  console.log(maxProfit([1, 2, 3, 4]) === 3)
  // returns 6 (buying for $5 and selling for $11)
