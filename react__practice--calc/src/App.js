import React, { Component } from 'react';
import Total from './Components/Total/Total.js';
import History from './Components/History/History.js';
import Operation from './Components/Operation/Operation.js';

class App extends Component {

  
  //Method for data acceptance
  state = {
    transactions: [],
    description: '',
    amount: '',
   }
  // Add transactions
   addTransaction= add => {

    const transactions = [...this.state.transactions];

     const transaction = {
       id: `cmr${(+new Date).toString(16)}`,
       description: this.state.description,
       amount: this.state.amount,
       add
     }
     transactions.push(transaction)

     this.setState({ 
        transactions,
        description: '',
        amount: '',
    })
   }
   //ADDamount
   addAmount = e => {
     this.setState({amount: e.target.value});
   }
   //Description
   addDescription = e => {
     this.setState({description: e.target.value});
   }

  render() {
    return (
      <>
        <header>
          <h1>Кошелёк</h1>
          <h2>Калькулятор расходов</h2>
        </header>
        
        <main>
          <div className="container">
          <Total />
          <History
            transactions={this.state.transactions}
           />
          <Operation 
            addTransaction={this.addTransaction}
            addAmount={this.addAmount}
            addDescription={this.addDescription}
            description={this.state.description}
            amount={this.state.amount}
            />   
          </div>
        </main>
      </>
    );
  }
}

export default App;
