/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  const categoryExpenditure = transactions.reduce((acc, transaction) => {
    const { category, price } = transaction;
    if (category in acc) {
      return { ...acc, [category]: acc[category] + price };
    } else {
      return { ...acc, [category]: price };
    }
  }, {});
  const result = [];
  for (const [key, value] of Object.entries(categoryExpenditure)) {
    result.push({  category: key, totalSpent: value });
  }
  return result;
}

module.exports = calculateTotalSpentByCategory;
