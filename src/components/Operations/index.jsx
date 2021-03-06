import React, { Component } from 'react';

class Operations extends Component {
    render() {
        return (
            <section className="operation">
                <h3>Новая операция</h3>
                <form id="form">
                    <label>
                        <input 
                            type="text" 
                            className="operation__fields operation__name" 
                            placeholder="Наименование операции"
                            value={this.props.description}
                            onChange={this.props.handleDescription} 
                        />
                    </label>
                    <label>
                        <input 
                            type="number" 
                            className="operation__fields operation__amount" 
                            placeholder="Введите сумму" 
                            value={this.props.amount}
                            onChange={this.props.handleAmount}
                        />
                    </label>
                    <div className="operation__btns">
                        <button 
                            onClick={() => this.props.handleTransaction(false)}
                            type="button" 
                            className="operation__btn operation__btn-subtract"
                        >РАСХОД</button>
                        <button 
                            onClick={() => this.props.handleTransaction(true)}
                            type="button" 
                            className="operation__btn operation__btn-add"
                        >ДОХОД</button>
                    </div>

                </form>
            </section>
        )
    }
};

export default Operations;