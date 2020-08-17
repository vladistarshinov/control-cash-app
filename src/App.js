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

handleTransaction = plus => {
  const transactions = [...this.state.transactions];
  transactions.push({
    id: `cm-${(+new Date()).toString(16)}`,
    description: this.state.description,
    amount: this.state.amount,
    plus
  });
  this.setState({ transactions, description: '', amount: '' }, () => console.log(this.state));
}

handleDescription = e => {
  e.preventDefault();
  this.setState({ description: e.target.value })
};

handleAmount = e => {
  e.preventDefault();
  this.setState({ amount: e.target.value });
}


  render() {
    return (
      <>
        <header>
            <h1>Кошелек</h1>
        </header>
        <main>
          <div className="container">
            <Balance />
            <History transactions={this.state.transactions} />
            <Operations 
              handleTransaction={this.handleTransaction} 
              handleDescription={this.handleDescription}
              handleAmount={this.handleAmount}
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
