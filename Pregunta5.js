/*
Calcula el balance final en USD:
(incomes convertidos a USD) - (expenses convertidos a USD)
Debe retornar un único número.
*/

const transactions = [
    { id: 1, type: "income", amount: 500, currency: "USD" },
    { id: 2, type: "expense", amount: 200, currency: "USD" },
    { id: 3, type: "income", amount: 300, currency: "EUR" },
    { id: 4, type: "expense", amount: 50, currency: "USD" },
    { id: 5, type: "expense", amount: 100, currency: "EUR" },
    { id: 6, type: "income", amount: 1000, currency: "CLP" },
  ];

  const exchangeRates = {
    EUR: 1.1,
    CLP: 0.001
  };


//Solución

function finalBalanceUSD(transactions, exchangeRates){

    const income = [];
    const expenses = [];

    transactions.forEach((transaction) => {

        //convierto a USD los montos en EUR o CLP
        if(transaction.currency === "EUR"){
            transaction.amount *= exchangeRates.EUR;
        } else if(transaction.currency === "CLP") {
            transaction.amount *= exchangeRates.CLP;
        }

        //separo las transacciones entre income y expenses
        if(transaction.type === "income"){
            income.push(transaction);
        } else {
            expenses.push(transaction);
        }
    })

    return (income.reduce((total, income) => {return total + income.amount}, 0)) - (expenses.reduce((total, expense) => {return total + expense.amount}, 0));

}

console.log(finalBalanceUSD(transactions, exchangeRates));