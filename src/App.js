import React, { Component } from 'react';

import Balance from './components/Balance';
import History from './components/History';
import Operations from './components/Operations';

class App extends Component {

  state = {
    transactions: [],
    description: '',
    amount: ''
}

handleTransaction(plus) {
  const transactions = [...this.state.transactions];
    const transaction = {
        id: `cm-${(+new Date()).toString(16)}`,
        description: this.state.description,
        amount: this.state.amount,
        plus
    }

    transactions.push(transaction);
    console.log(transactions);
}

handleDescription = e => this.setState({ description: e.target.value });

handleAmount = e => this.setState({ amount: e.target.value });


  render() {
    return (
      <>
        <header>
            <h1>Кошелек</h1>
        </header>
        <main>
          <div className="container">
            <Balance />
            <History />
            <Operations 
              handleTransaction={this.handleTransaction} 
              handleDescription={this.handleDescription}
              handleAmount={this.handleAmount}
            />
          </div>
        </main>
      </>
    );
  }
}

export default App;
